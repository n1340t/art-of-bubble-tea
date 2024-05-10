import {
	KFTea,
	Data,
	FluidUnit,
	WeightUnit,
	PowderUnit,
	OtherUnit,
	Recipe,
} from './interface/types';

const LATTE: KFTea[] = [
	{
		name: 'Pearl Latte with Brown Sugar',
		syrup: null,
		tea: null,
		milk: [
			{
				value: 300,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
		],
		water: null,
		honey: null,
		availability: true,
		note: 'Pearl 180-120',
	},
	{
		name: 'Black Tea Latte',
		syrup: null,
		tea: [
			{
				value: 160,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		milk: [
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
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		water: null,
		honey: [
			{
				value: 1.4,
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
		note: 'Can change to green tea or Oolong',
	},
	{
		name: 'Chocolate Latte',
		syrup: [
			{
				value: 3,
				unit: OtherUnit.ts,
				type: Recipe.Standard,
			},
			{
				value: 2,
				unit: OtherUnit.ts,
				type: Recipe.OneTopping,
			},
			{
				value: 1,
				unit: OtherUnit.ts,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: null,
		water: [
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		milk: [
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
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
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
		note: null,
	},
	{
		name: 'Pearl Matcha Latte',
		syrup: [
			{
				value: 34,
				unit: WeightUnit.g,
				type: Recipe.Standard,
			},
			{
				value: 26,
				unit: WeightUnit.g,
				type: Recipe.OneTopping,
			},
			{
				value: 22,
				unit: WeightUnit.g,
				type: Recipe.TwoorMoreToppings,
			},
		],
		tea: null,
		water: [
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 80,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
			},
		],
		milk: [
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
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
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
		note: null,
	},
	{
		name: 'Pearl Taro Latte',
		syrup: null,
		tea: null,
		water: [
			{
				value: 60,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'if no pearls, add extra 40ml milk',
			},
			{
				value: 40,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'if no pearls, add extra 40ml milk',
			},
		],
		milk: [
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 120,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
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
		],
		availability: true,
		note: 'Pearl + Taro: 100 + 120g 80 _ 90g (if no pearls, Taro: 160-120g)',
	},
];

export default LATTE;