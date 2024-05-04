import { KFTea, WeightUnit, Recipe, FluidUnit, OtherUnit } from '../types/kf';

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
        type: Recipe.Standard,
      },
      {
        value: 0.7,
        unit: FluidUnit.honey,
        type: Recipe.Standard,
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
        type: Recipe.Standard,
      },
      {
        value: 0.6,
        unit: FluidUnit.honey,
        type: Recipe.Standard,
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
        type: Recipe.Standard,
      },
      {
        value: 0.1,
        unit: FluidUnit.honey,
        type: Recipe.Standard,
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

const LATTE = [
  {
    name: 'Pearl Latte with Brown Sugar',
    syrup: null,
    tea: '300-200ml',
    water: null,
    honey: null,
    availability: true,
    note: 'Pearl 180-120',
  },
  {
    name: 'Black Tea Latte',
    syrup: null,
    tea: '160-120-100ml',
    milk: '180-140-120',
    water: null,
    honey: '1.4-1.0-0.8',
    availability: true,
    note: 'Can change to green tea or Oolong',
  },
  {
    name: 'Chocolate Latte',
    syrup: '3ts 2ts 1ts',
    tea: null,
    water: '100-80-60',
    milk: '180-140-120',
    honey: '0.6-0.4-0.3',
    availability: true,
    note: null,
  },
  {
    name: 'Pearl Matcha Latte',
    syrup: '34-26-22g',
    tea: null,
    water: '100-80-60',
    milk: '180-140-120',
    honey: '0.6-0.4-0.3',
    availability: true,
    note: null,
  },
  {
    name: 'Pearl Taro Latte',
    syrup: null,
    tea: null,
    water: '60-40ml (if no pearls, add extra 40ml milk)',
    milk: '140-120ml',
    honey: '0.3-0.2',
    availability: true,
    note: 'Pearl + Taro: 100 + 120g 80 _ 90g (if no pearls, Taro: 160-120g)',
  },
];

const UNCATEGORIZED = [
  {
    name: 'Power Taro Pudding Pearl Milk',
    syrup: null,
    tea: 'Milk: 200ml',
    water: null,
    honey: null,
    note: 'Pearl Pudding Taro: 80 + 100 + 160',
  },
  {
    name: 'Taro Sago',
    syrup: null,
    tea: 'Milk: 200ml',
    water: null,
    honey: '0.3',
    note: 'Sago + Taro: 130 - 160g',
  },
  {
    name: 'Rose Oolong Tea',
    syrup: '72-54-44g',
    tea: '280-200-160ml',
    water: 'Hot water: 60-40-20ml',
    honey: null,
    note: null,
  },
  {
    name: 'Grape Fruit Green Tea with Agar BB',
    syrup: '2-1.5-1oz',
    tea: 'GT: 200-160-120ml',
    water: null,
    honey: '0.3-0.2-0.1',
    note: '1 buoi Agar BB: 100-80g',
  },
  {
    name: 'Winter Melon with Lemon',
    syrup: 'Lemon: 1.5-1.0-0.5oz',
    tea: 'Winter Melon: 380-280-200ml',
    water: null,
    honey: null,
    note: '1 lime',
  },
  {
    name: 'Honey Lemon with Aloe Vera',
    syrup: 'Lemon: 1.5-1.0-0.5oz',
    tea: 'GT: 160-120-100ml',
    water: '60-40-20ml',
    honey: '1.6-1.2-1.0',
    note: 'Aloe Vera: 80-65g',
  },
  {
    name: 'Passion Fruit with Basil Seeds',
    syrup: 'Passion Fruit: 3-2-1.5oz Basil Seeds: 160-120-80ml',
    tea: null,
    water: '180-140-100ml',
    honey: '0.4-0.3-0,2',
    note: null,
  },
  {
    name: 'Passion Fruit QQ',
    syrup: '2-1.5-1.0oz',
    tea: null,
    water: '220-160-120ml',
    honey: '0.3-0.2-0.1',
    note: 'Pearl/Agar J/Coconut J: 80/50/50 60/40/40',
  },
  {
    name: 'Yakult Green Tea with Aloe Vera',
    syrup: '2-1.5-1.0oz',
    tea: 'GT: 220-160-120ml',
    water: null,
    honey: '1.2-0.9-0.7',
    note: 'Aloe Vera: 80-65g',
  },
  {
    name: 'Pearl Milk Green Tea with Taro',
    syrup: 'Medium - Small',
    tea: 'GT: 160-120ml',
    water: null,
    honey: '0.6-0.4',
    note: 'Pearl + Taro: 100 + 100g/80 + 80g',
  },
  {
    name: 'Coffe Milk Tea',
    syrup: 'Large - Medium - Small Coffee: 3.5-3.0-2.5oz',
    tea: 'BT: 120-100-80ml',
    water: null,
    honey: '1.2-1.0-0.8',
    note: null,
  },
  {
    name: 'Matcha Milk Tea with Redbean',
    syrup: 'Matcha: 34-26-22g Milk Powder: Nho -2t.s-1.5t.s',
    tea: null,
    water: 'Hot water: 140-120-80ml',
    honey: '0.6-0.4-0.3',
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
        type: Recipe.Standard,
      },
      {
        value: 0.3,
        unit: FluidUnit.honey,
        type: Recipe.Standard,
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
        type: Recipe.Standard,
      },
      {
        value: 0.2,
        unit: FluidUnit.honey,
        type: Recipe.Standard,
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

export const KF_TEA_LIST = CMF.concat(ORIGINAL, FRUIT);
