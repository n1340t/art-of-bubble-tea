import { KFTea, Data, FluidUnit, WeightUnit, PowderUnit, OtherUnit, Recipe } from "./interface/types";

const CMF: KFTea[] = [
    {
      name: 'CMF Green Tea',
      syrup: null,
      tea: [
        {
          value: 240,
          unit: FluidUnit.ml,
          type: Recipe.Standard,
        },
        {
          value: 180,
          unit: FluidUnit.ml,
          type: Recipe.OneTopping,
        },
        {
          value: 140,
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
      name: 'CMF Black Tea',
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
      name: 'CMF Oolong Tea',
      syrup: null,
      tea: [
        {
          value: 300,
          unit: FluidUnit.ml,
          type: Recipe.Standard,
        },
        {
          value: 220,
          unit: FluidUnit.ml,
          type: Recipe.OneTopping,
        },
        {
          value: 180,
          unit: FluidUnit.ml,
          type: Recipe.TwoorMoreToppings,
        },
      ],
      water: null,
      honey: [
        {
          value: 1.0,
          unit: FluidUnit.honey,
          type: Recipe.Standard,
        },
        {
          value: 0.8,
          unit: FluidUnit.honey,
          type: Recipe.OneTopping,
        },
        {
          value: 0.6,
          unit: FluidUnit.honey,
          type: Recipe.TwoorMoreToppings,
        },
      ],
      availability: true,
      note: null,
    },
    {
      name: 'CMF Rose',
      syrup: [
        {
          value: 54,
          unit: WeightUnit.g,
          type: Recipe.Standard,
        },
        {
          value: 44,
          unit: WeightUnit.g,
          type: Recipe.OneTopping,
        },
        {
          value: 34,
          unit: WeightUnit.g,
          type: Recipe.TwoorMoreToppings,
        },
      ],
      tea: [
        {
          value: 200,
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
      water: null,
      honey: null,
      availability: true,
      note: null,
    },
    {
      name: 'CMF Mango',
      syrup: [
        {
          value: 64,
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
      note: 'Green tea',
    },
    {
      name: 'CMF Chocolate',
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
          value: 1.5,
          unit: OtherUnit.ts,
          type: Recipe.TwoorMoreToppings,
        },
      ],
      tea: null,
      water: [
        {
          value: 140,
          unit: FluidUnit.ml,
          type: Recipe.Standard,
          note: 'steam',
        },
        {
          value: 100,
          unit: FluidUnit.ml,
          type: Recipe.OneTopping,
          note: 'steam',
        },
        {
          value: 80,
          unit: FluidUnit.ml,
          type: Recipe.TwoorMoreToppings,
          note: 'steam',
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
      name: 'CMF Matcha',
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
          value: 140,
          unit: FluidUnit.ml,
          type: Recipe.Standard,
          note: 'cold then steam',
        },
        {
          value: 100,
          unit: FluidUnit.ml,
          type: Recipe.OneTopping,
          note: 'cold then steam',
        },
        {
          value: 80,
          unit: FluidUnit.ml,
          type: Recipe.TwoorMoreToppings,
          note: 'cold then steam',
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
  ];

  export default CMF;