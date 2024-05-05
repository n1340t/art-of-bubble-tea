import {
  KFTea,
  WeightUnit,
  Recipe,
  FluidUnit,
  OtherUnit,
  PowderUnit,
} from '../types/kf';

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
const FRUIT1 = [
  'Cranberry Green Tea',
  'Plum Green Tea',
  'Special Plum Juice',
  'Lychee Ice Tea',
];

const MILK_TEA = [
  '38 Milk King',
  'Original Milk Tea',
  'Green Milk Tea',
  'Oolong Milk Tea',
  'Chocolate Milk Tea',
  'Kungfu Ginger Milk Tea',
  'Rose Milk Tea',
];

export const KF_TEA_LIST = CMF.concat(ORIGINAL, LATTE, UNCATEGORIZED, FRUIT);
