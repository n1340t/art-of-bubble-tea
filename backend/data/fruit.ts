import {
	KFTea,
	Data,
	FluidUnit,
	WeightUnit,
	PowderUnit,
	OtherUnit,
	Recipe,
} from './interface/types';

const FRUIT: KFTea[] = [
	{
		name: 'Signature Lite Fruit Tea',
		syrup: [
			{
				value: 2,
				unit: FluidUnit.oz,
				type: Recipe.Standard,
				note: 'Lite',
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Basil Seeds',
			},
			{
				value: 1.5,
				unit: FluidUnit.oz,
				type: Recipe.OneTopping,
				note: 'Lite',
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Basil Seeds',
			},
			{
				value: 1,
				unit: FluidUnit.oz,
				type: Recipe.TwoorMoreToppings,
				note: 'Lite',
			},
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Basil Seeds',
			},
		],
		tea: [
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Olong Tea',
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Olong Tea',
			},
			{
				value: 80,
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
				value: 0.5,
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
		note: '1 Grape F + 3/2 Orange + 3/2 Apple',
	},
	{
		name: 'Mango Fruit Tea',
		syrup: [
			{
				value: 86,
				unit: WeightUnit.g,
				type: Recipe.Standard,
			},
			{
				value: 64,
				unit: WeightUnit.g,
				type: Recipe.OneTopping,
			},
			{
				value: 54,
				unit: WeightUnit.g,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: [
			{
				value: 240,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 180,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Green Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 0.5,
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
		name: 'Passion Fruit Green Tea',
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
				value: 240,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Green Tea',
			},
			{
				value: 180,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Green Tea',
			},
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Green Tea',
			},
		],
		water: null,
		honey: [
			{
				value: 0.8,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 0.6,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 0.4,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: null,
	},
];

export default FRUIT;