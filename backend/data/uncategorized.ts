import {
	KFTea,
	Data,
	FluidUnit,
	WeightUnit,
	PowderUnit,
	OtherUnit,
	Recipe,
} from './interface/types';

const UNCATEGORIZED: KFTea[] = [
	{
		name: 'Power Taro Pudding Pearl Milk',
		syrup: null,
		tea: null,
		milk: [
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
		],
		water: null,
		honey: null,
		availability: true,
		note: 'Pearl Pudding Taro: 80 + 100 + 160',
	},
	{
		name: 'Taro Sago',
		syrup: null,
		tea: null,
		milk: [
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
		],
		water: null,
		honey: [
			{
				value: 0.3,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
		],
		availability: true,
		note: 'Sago + Taro: 130 - 160g',
	},
	{
		name: 'Rose Oolong Tea',
		syrup: [
			{
				value: 72,
				unit: WeightUnit.g,
				type: Recipe.Standard,
			},
			{
				value: 54,
				unit: WeightUnit.g,
				type: Recipe.OneTopping,
			},
			{
				value: 44,
				unit: WeightUnit.g,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 280,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Olong Tea',
			},
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Olong Tea',
			},
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Olong Tea',
			},
		],
		water: [
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'hot',
			},
			{
				value: 40,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'hot',
			},
			{
				value: 20,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'hot',
			},
		],
		honey: null,
		availability: true,
		note: null,
	},
	{
		name: 'Grape Fruit Green Tea with Agar BB',
		syrup: [
			{
				value: 2,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
			},
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
			},
			{
				value: 1,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Green Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 0.3,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.2,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.1,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: '1 buoi Agar BB: 100-80g',
	},
	{
		name: 'Winter Melon with Lemon',
		syrup: [
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
			},
			{
				value: 1,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
			},
			{
				value: 0.5,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 380,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Winter Melon Tea',
			},
			{
				value: 280,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Winter Melon Tea',
			},
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Winter Melon Tea',
			},
		],
		water: null,
		honey: null,
		availability: false,
		note: '1 lime',
	},
	{
		name: 'Honey Lemon with Aloe Vera',
		syrup: [
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
			},
			{
				value: 1.0,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
			},
			{
				value: 0.5,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Green Tea',
			},
		],
		water: [
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 40,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 20,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		honey: [
			{
				value: 1.6,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 1.2,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 1.0,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
		],
		availability: true,
		note: 'Aloe Vera: 80-65g',
	},
	{
		name: 'Passion Fruit with Basil Seeds',
		syrup: [
			{
				value: 3,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
				note: 'Passion Fruit',
			},
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Basil Seeds',
			},
			{
				value: 2,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
				note: 'Passion Fruit',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Basil Seeds',
			},
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
				note: 'Passion Fruit',
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Basil Seeds',
			},
		],
		tea: null,
		water: [
			{
				value: 180,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		honey: [
			{
				value: 0.4,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.3,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.2,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: null,
	},
	{
		name: 'Passion Fruit QQ',
		syrup: [
			{
				value: 2,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
				note: 'Passion Fruit',
			},
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
				note: 'Passion Fruit',
			},
			{
				value: 1.0,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
				note: 'Passion Fruit',
			},
		],
		tea: null,
		water: [
			{
				value: 220,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		honey: [
			{
				value: 0.3,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.2,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.1,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: 'Pearl/Agar J/Coconut J: 80/50/50 60/40/40',
	},
	{
		name: 'Yakult Green Tea with Aloe Vera',
		syrup: [
			{
				value: 2,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
			},
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
			},
			{
				value: 1.0,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 220,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Green Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 1.2,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.9,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.7,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: 'Aloe Vera: 80-65g',
	},
	{
		name: 'Pearl Milk Green Tea with Taro',
		syrup: [
			{
				value: PowderUnit.med,
				unit: PowderUnit.med,
				type: Recipe.Standard,
				note: 'milk powder',
			},
			{
				value: PowderUnit.sm,
				unit: PowderUnit.sm,
				type: Recipe.OneTopping,
				note: 'milk powder',
			},
		],
		tea: [
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 0.4,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.6,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
		],
		availability: true,
		note: 'Pearl + Taro: 100 + 100g/80 + 80g',
	},
	{
		name: 'Coffe Milk Tea',
		syrup: [
			{
				value: PowderUnit.lg,
				unit: PowderUnit.lg,
				type: Recipe.Standard,
				note: 'milk powder',
			},
			{
				value: 3.5,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
				note: 'Coffee',
			},
			{
				value: PowderUnit.med,
				unit: PowderUnit.med,
				type: Recipe.OneTopping,
				note: 'milk powder',
			},
			{
				value: 3.0,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
				note: 'Coffee',
			},
			{
				value: PowderUnit.sm,
				unit: PowderUnit.sm,
				type: Recipe.OneTopping,
				note: 'milk powder',
			},
			{
				value: 2.5,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
				note: 'Coffee',
			},
		],
		tea: [
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Black Tea',
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Black Tea',
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Black Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 1.2,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 1.0,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.8,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: null,
	},
	{
		name: 'Matcha Milk Tea with Redbean',
		syrup: [
			{
				value: 34,
				unit: WeightUnit.g,
				type: Recipe.Standard,
				note: 'Matcha',
			},
			{
				value: PowderUnit.sm,
				unit: PowderUnit.sm,
				type: Recipe.Standard,
				note: 'Milk Powder',
			},
			{
				value: 26,
				unit: WeightUnit.g,
				type: Recipe.OneTopping,
				note: 'Matcha',
			},
			{
				value: 2,
				unit: OtherUnit.ts,
				type: Recipe.OneTopping,
				note: 'Milk Powder',
			},
			{
				value: 22,
				unit: WeightUnit.g,
				type: Recipe.TwoorMoreToppings,
				note: 'Matcha',
			},
			{
				value: 1.5,
				unit: OtherUnit.ts,
				type: Recipe.TwoorMoreToppings,
				note: 'Milk Powder',
			},
		],
		tea: null,
		water: [
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'hot',
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'hot',
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'hot',
			},
		],
		honey: [
			{
				value: 0.6,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.4,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.3,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: 'Red Bean: 80-65g',
	},
];

export default UNCATEGORIZED;