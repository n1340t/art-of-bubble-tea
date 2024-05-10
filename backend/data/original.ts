import {
	KFTea,
	Data,
	FluidUnit,
	WeightUnit,
	PowderUnit,
	OtherUnit,
	Recipe,
} from './interface/types';

const ORIGINAL: KFTea[] = [
	{
		name: 'Jin Xuan Oolong Tea',
		syrup: null,
		tea: [
			{
				value: 360,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 260,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
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
		note: null,
	},
	{
		name: 'Assam Black Tea',
		syrup: null,
		tea: [
			{
				value: 180,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
				note: 'Black Tea',
			},
			{
				value: 140,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
				note: 'Black Tea',
			},
			{
				value: 100,
				unit: FluidUnit.ml,
				type: Recipe.TwoorMoreToppings,
				note: 'Black Tea',
			},
		],
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
		honey: [
			{
				value: 1.5,
				unit: FluidUnit.honey,
				type: Recipe.Standard,
			},
			{
				value: 1.2,
				unit: FluidUnit.honey,
				type: Recipe.OneTopping,
			},
			{
				value: 1.0,
				unit: FluidUnit.honey,
				type: Recipe.TwoorMoreToppings,
			},
		],
		availability: true,
		note: null,
	},
	{
		name: 'Jasmine Green Tea',
		syrup: null,
		tea: [
			{
				value: 280,
				unit: FluidUnit.ml,
				type: Recipe.Standard,
			},
			{
				value: 200,
				unit: FluidUnit.ml,
				type: Recipe.OneTopping,
			},
			{
				value: 160,
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
		note: null,
	},
	{
		name: 'Winter Melon Drink',
		syrup: null,
		tea: [],
		water: null,
		honey: null,
		availability: false,
		note: 'tea: 380 (40ml water)-300-240ml',
	},
];

export default ORIGINAL;