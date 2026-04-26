export type Grass = {
	slug: string;
	name: string;
	headline: string;
	shortDescription: string;
	longDescription: string;
	benefits: string[];
	recommendedFor: string;
	image: string;
	color: string;
	accent: string;
};

export const grasses: Grass[] = [
	{
		slug: 'san-agustin',
		name: 'San Agustín',
		headline: 'Textura acolchonada y gran tolerancia a la sombra.',
		shortDescription: 'Pasto de hoja ancha ideal para jardines familiares con tráfico moderado.',
		longDescription:
			'El pasto San Agustín destaca por su follaje denso y suave que se adapta a climas cálidos y húmedos. Resiste periodos cortos de sequía y prospera en áreas parcialmente sombreadas, brindando una alfombra verde uniforme durante todo el año.',
		benefits: ['Hojas anchas y acolchonadas', 'Tolera sombra parcial', 'Requiere riegos moderados'],
		recommendedFor: 'Jardines residenciales, zonas de juego familiar y áreas frente a casa.',
		image:
			'https://images.unsplash.com/photo-1683525871483-b4d1fb0ac4e3?auto=format&fit=crop&w=1200&q=80',
		color: '#e0f2d8',
		accent: '#3c7a3c',
	},
	{
		slug: 'pasto-chino',
		name: 'Pasto Chino',
		headline: 'Crecimiento vertical controlado con estética elegante.',
		shortDescription: 'Variedad ornamental de baja estatura que reduce la frecuencia de corte.',
		longDescription:
			'Conocido por su porte delicado y color verde intenso, el pasto chino es perfecto para quienes buscan jardines prolijos y de mantenimiento sencillo. Su sistema radicular profundo mejora la retención de humedad y la estabilidad del suelo.',
		benefits: ['Mantiene altura uniforme', 'Excelente densidad de cobertura', 'Mayor eficiencia en uso de agua'],
		recommendedFor: 'Paisajismo contemporáneo, frentes comerciales y camellones decorativos.',
		image:
			'https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?auto=format&fit=crop&w=1200&q=80',
		color: '#d6f0e6',
		accent: '#2f6b57',
	},
	{
		slug: 'zoysia',
		name: 'Zoysia',
		headline: 'Resistencia sobresaliente al uso rudo y al calor intenso.',
		shortDescription: 'Césped de hoja fina que soporta alto tránsito y reduce la aparición de maleza.',
		longDescription:
			'La zoysia forma un tapete compacto con raíces profundas que la hacen altamente resistente al pisoteo y a periodos secos. Su color verde esmeralda permanece vibrante con la fertilización adecuada y requiere menos cortes que otras variedades.',
		benefits: ['Alta resistencia al desgaste', 'Raíces profundas que retienen humedad', 'Menor frecuencia de corte'],
		recommendedFor: 'Campos deportivos, áreas recreativas y jardines expuestos al sol directo.',
		image:
			'https://images.unsplash.com/photo-1606749482582-8c73563adc2b?auto=format&fit=crop&w=1200&q=80',
		color: '#e4f7ef',
		accent: '#1f6c45',
	},
];