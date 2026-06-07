import sharp from 'sharp';
import { readFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicImages = join(root, 'public', 'images');

const FOREST = { r: 0x2D, g: 0x3A, b: 0x31 };
const SAGE = { r: 0x8C, g: 0x9A, b: 0x84 };
const CREAM = { r: 0xF9, g: 0xF8, b: 0xF4 };

async function fileExists(p) {
	try { await access(p); return true; } catch { return false; }
}

async function loadLogoPng(size = 1024) {
	const svg = await readFile(join(publicImages, 'logo.svg'));
	return sharp(svg, { density: 300 })
		.resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();
}

async function makeWhiteFromPng(logoPngBuffer) {
	const { data, info } = await sharp(logoPngBuffer)
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	const whiteBuffer = Buffer.alloc(data.length);
	for (let i = 0; i < data.length; i += 4) {
		const a = data[i + 3];
		whiteBuffer[i] = 255;
		whiteBuffer[i + 1] = 255;
		whiteBuffer[i + 2] = 255;
		whiteBuffer[i + 3] = a;
	}

	return sharp(whiteBuffer, { raw: { width: info.width, height: info.height, channels: 4 } })
		.png()
		.toBuffer();
}

async function generateOgCover() {
	const width = 1200;
	const height = 630;

	const background = sharp({
		create: {
			width,
			height,
			channels: 3,
			background: FOREST,
		},
	});

	const sageGlow = await sharp({
		create: {
			width: 600,
			height: 600,
			channels: 4,
			background: { ...SAGE, alpha: 0.08 },
		},
	})
		.png()
		.toBuffer();

	const logoPng = await loadLogoPng(1024);
	const logoWhite = await makeWhiteFromPng(logoPng);

	const logoSize = 260;
	const logoBuffer = await sharp(logoWhite)
		.resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();

	const taglineTop = Buffer.from(
		`<svg width="${width}" height="80" xmlns="http://www.w3.org/2000/svg">
			<text x="${width / 2}" y="60" text-anchor="middle"
				font-family="Georgia, 'Playfair Display', serif"
				font-size="28" font-weight="600" font-style="italic"
				letter-spacing="6" fill="${rgbToHex(CREAM)}">PASTOS VIVOS</text>
		</svg>`
	);

	const taglineMain = Buffer.from(
		`<svg width="${width}" height="170" xmlns="http://www.w3.org/2000/svg">
			<text x="${width / 2}" y="80" text-anchor="middle"
				font-family="Georgia, 'Playfair Display', serif"
				font-size="78" font-weight="700"
				fill="${rgbToHex(CREAM)}">Verde Caribe</text>
			<text x="${width / 2}" y="140" text-anchor="middle"
				font-family="'Source Sans 3', system-ui, sans-serif"
				font-size="26" font-weight="500" letter-spacing="2"
				fill="${rgbToHex(CREAM)}" opacity="0.85">Cancún · Riviera Maya</text>
		</svg>`
	);

	const taglineBottom = Buffer.from(
		`<svg width="${width}" height="60" xmlns="http://www.w3.org/2000/svg">
			<text x="${width / 2}" y="40" text-anchor="middle"
				font-family="'Source Sans 3', system-ui, sans-serif"
				font-size="20" font-weight="500" letter-spacing="4"
				fill="${rgbToHex(CREAM)}" opacity="0.7">SAN AGUSTÍN · PASTO CHINO · ZOYSIA</text>
		</svg>`
	);

	const out = await background
		.composite([
			{ input: sageGlow, gravity: 'center', blend: 'over' },
			{ input: logoBuffer, top: 80, left: Math.floor((width - logoSize) / 2) },
			{ input: taglineTop, top: 360, left: 0 },
			{ input: taglineMain, top: 410, left: 0 },
			{ input: taglineBottom, top: 570, left: 0 },
		])
		.jpeg({ quality: 88, mozjpeg: true })
		.toBuffer();

	const dest = join(publicImages, 'og-cover.jpg');
	await sharp(out).toFile(dest);
	console.log(`✓ Generated ${dest} (${(out.length / 1024).toFixed(1)} KB)`);
}

async function generateAppleTouchIcon() {
	const size = 180;

	const roundedBg = await sharp({
		create: {
			width: size,
			height: size,
			channels: 4,
			background: { r: 0, g: 0, b: 0, alpha: 0 },
		},
	})
		.composite([{
			input: Buffer.from(
				`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
					<rect width="${size}" height="${size}" rx="36" ry="36" fill="${rgbToHex(SAGE)}"/>
				</svg>`
			),
			top: 0,
			left: 0,
		}])
		.png()
		.toBuffer();

	const logoPng = await loadLogoPng(512);
	const logoWhite = await makeWhiteFromPng(logoPng);

	const logoSize = size - 40;
	const logoBuffer = await sharp(logoWhite)
		.resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();

	const out = await sharp(roundedBg)
		.composite([{
			input: logoBuffer,
			top: 20,
			left: 20,
		}])
		.png()
		.toBuffer();

	const dest = join(publicImages, 'apple-touch-icon.png');
	await sharp(out).toFile(dest);
	console.log(`✓ Generated ${dest} (${(out.length / 1024).toFixed(1)} KB)`);
}

function rgbToHex({ r, g, b }) {
	return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
}

async function main() {
	const hasLogo = await fileExists(join(publicImages, 'logo.svg'));
	if (!hasLogo) {
		console.error('✗ logo.svg not found in public/images/');
		process.exit(1);
	}

	await generateOgCover();
	await generateAppleTouchIcon();
	console.log('✓ All social images generated');
}

main().catch((err) => {
	console.error('✗ Error generating images:', err);
	process.exit(1);
});
