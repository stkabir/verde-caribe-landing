export type ExtraCategory = 'planta' | 'roca' | 'arbol' | 'tierra' | 'servicio';

export type ExtraUnit = 'unidad' | 'm²' | 'm³' | 'bulto' | 'servicio';

export type Extra = {
	slug: string;
	name: string;
	category: ExtraCategory;
	price: number;
	unit: ExtraUnit;
	description?: string;
};

export const extras: Extra[] = [
	// Plantas
	{
		slug: 'palmera-areca',
		name: 'Palmera Areca (1.5 m)',
		category: 'planta',
		price: 850,
		unit: 'unidad',
		description: 'Palmera tropical de interior y exterior, frondosa y elegante.',
	},
	{
		slug: 'buganvilia',
		name: 'Buganvilia mediana',
		category: 'planta',
		price: 450,
		unit: 'unidad',
		description: 'Arbusto floral en colores vibrantes, ideal para muros y pérgolas.',
	},
	{
		slug: 'helecho-boston',
		name: 'Helecho Boston',
		category: 'planta',
		price: 220,
		unit: 'unidad',
		description: 'Helecho de follaje denso, perfecto para zonas de sombra.',
	},
	{
		slug: 'agave-azul',
		name: 'Agave azul',
		category: 'planta',
		price: 380,
		unit: 'unidad',
		description: 'Suculenta ornamental de bajo mantenimiento, muy resistente al sol.',
	},
	{
		slug: 'lirio-tropical',
		name: 'Lirio tropical',
		category: 'planta',
		price: 180,
		unit: 'unidad',
		description: 'Flor de colores intensos, excelente para macizos y bordes.',
	},

	// Rocas / piedras
	{
		slug: 'roca-volcanica',
		name: 'Roca volcánica negra',
		category: 'roca',
		price: 180,
		unit: 'm²',
		description: 'Piedra ligera de origen volcánico, acabado moderno.',
	},
	{
		slug: 'piedra-rio',
		name: 'Piedra de río',
		category: 'roca',
		price: 140,
		unit: 'm²',
		description: 'Piedras redondeadas naturales, ideales para caminos y decoración.',
	},
	{
		slug: 'grava-decorativa',
		name: 'Grava decorativa',
		category: 'roca',
		price: 95,
		unit: 'm²',
		description: 'Grava triturada para cobertura de suelo y drenajes decorativos.',
	},
	{
		slug: 'canto-rodado',
		name: 'Canto rodado blanco',
		category: 'roca',
		price: 210,
		unit: 'm²',
		description: 'Piedra pulida en tonos claros, acabado premium.',
	},

	// Árboles
	{
		slug: 'mango',
		name: 'Árbol de mango (1.8 m)',
		category: 'arbol',
		price: 1200,
		unit: 'unidad',
		description: 'Árbol frutal tropical, productivo y de sombra generosa.',
	},
	{
		slug: 'ceiba',
		name: 'Ceiba ornamental (1.5 m)',
		category: 'arbol',
		price: 2400,
		unit: 'unidad',
		description: 'Árbol emblemático de la región, de gran porte y follaje amplio.',
	},
	{
		slug: 'cocotero',
		name: 'Cocotero enano (2 m)',
		category: 'arbol',
		price: 1800,
		unit: 'unidad',
		description: 'Palmera costera de porte medio, ideal para jardines tropicales.',
	},
	{
		slug: 'limon-persa',
		name: 'Limón persa (1.5 m)',
		category: 'arbol',
		price: 950,
		unit: 'unidad',
		description: 'Cítrico productivo todo el año, perfecto para huertos familiares.',
	},

	// Tierra
	{
		slug: 'tierra-nivelar',
		name: 'Tierra preparada para nivelar',
		category: 'tierra',
		price: 620,
		unit: 'm³',
		description: 'Se cotiza aparte según volumen y características del terreno.',
	},
	{
		slug: 'sustrato-universal',
		name: 'Sustrato universal (50 L)',
		category: 'tierra',
		price: 180,
		unit: 'bulto',
		description: 'Mezcla lista para macetas, jardines y zonas verdes.',
	},
	{
		slug: 'compost-organico',
		name: 'Compost orgánico',
		category: 'tierra',
		price: 210,
		unit: 'bulto',
		description: 'Abono natural para enriquecer el suelo antes de sembrar.',
	},

	// Servicios
	{
		slug: 'mantenimiento',
		name: 'Mantenimiento mensual',
		category: 'servicio',
		price: 1800,
		unit: 'servicio',
		description: 'Corte, fertilización, riego y cuidado general del jardín.',
	},
	{
		slug: 'riego-automatico',
		name: 'Sistema de riego automático',
		category: 'servicio',
		price: 4500,
		unit: 'servicio',
		description: 'Instalación completa de riego por aspersión o goteo.',
	},
	{
		slug: 'diseno-paisaje',
		name: 'Diseño de paisaje',
		category: 'servicio',
		price: 3500,
		unit: 'servicio',
		description: 'Diseño profesional con planos y selección de especies.',
	},
];

export const categoryLabels: Record<ExtraCategory, string> = {
	planta: 'Plantas',
	roca: 'Rocas y piedras',
	arbol: 'Árboles',
	tierra: 'Tierra y sustrato',
	servicio: 'Servicios',
};

export const categoryOrder: ExtraCategory[] = ['planta', 'arbol', 'roca', 'tierra', 'servicio'];
