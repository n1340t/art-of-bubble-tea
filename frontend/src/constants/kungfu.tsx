import { KFTea, WeightUnit, Recipe, FluidUnit } from '../types/kf';

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
        note: 'Black Tea'
      },
      {
        value: 140,
        unit: FluidUnit.ml,
        type: Recipe.OneTopping,
        note: 'Black Tea'
      },
      {
        value: 100,
        unit: FluidUnit.ml,
        type: Recipe.TwoorMoreToppings,
        note: 'Black Tea'
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
    name: 'CMF Oolong Tea',
    syrup: null,
    tea: '300 - 220 - 180 ml',
    water: null,
    honey: '1.0 - 0.8 - 0.6',
    note: null,
  },
  {
    name: 'CMF Rose',
    syrup: '54 - 44 - 34g',
    tea: '200 - 160 - 120 ml',
    water: null,
    honey: null,
    note: null,
  },
  {
    name: 'CMF Mango',
    syrup: '64 - 54 - 44g',
    tea: 'Green Tea: 180 - 140 - 100 ml',
    water: null,
    honey: '0.3 - 0.2 - 0.1',
    note: null,
  },
  {
    name: 'CMF Chocolate',
    syrup: '3ts 2ts 1,5ts',
    tea: null,
    water: '140 - 100 - 80ml (steam)',
    honey: '0.6 - 0.4 - 0.3',
    note: null,
  },
  {
    name: 'CMF Matcha',
    syrup: 'Match: 34 - 26 - 22g',
    tea: null,
    water: '140 - 100 - 80ml (steam)',
    honey: '0.6 - 0.4 - 0.3',
    note: null,
  },
];

const ORIGINAL: KFTea[] = [
  {
    name: 'Jin Xuan Oolong Tea',
    syrup: null,
    tea: '360-260-200ml',
    water: null,
    honey: '1.2-0.9-0.7',
    note: null,
  },
  {
    name: 'Assam Black Tea',
    syrup: null,
    tea: '180-140-100ml',
    water: '100-80-60ml',
    honey: '1.5-1.2-1.0',
    note: null,
  },
  {
    name: 'Jasmine Green Tea',
    syrup: null,
    tea: '280-200-160ml',
    water: null,
    honey: '1.4-1.0-0.8',
    note: null,
  },
  {
    name: 'Winter Melon Drink',
    syrup: null,
    tea: '380 (40ml water)-300-240ml',
    water: null,
    honey: null,
    note: null,
  },
];

const LATTE = [
  {
    name: 'Pearl Latte with Brown Sugar',
    syrup: null,
    tea: '300-200ml',
    water: null,
    honey: null,
    note: 'Pearl 180-120',
  },
  {
    name: 'Black Tea Latte',
    syrup: null,
    tea: '160-120-100ml',
    milk: '180-140-120',
    water: null,
    honey: '1.4-1.0-0.8',
    note: 'Can change to green tea or Oolong',
  },
  {
    name: 'Chocolate Latte',
    syrup: '3ts 2ts 1ts',
    tea: null,
    water: '100-80-60',
    milk: '180-140-120',
    honey: '0.6-0.4-0.3',
    note: null,
  },
  {
    name: 'Pearl Matcha Latte',
    syrup: '34-26-22g',
    tea: null,
    water: '100-80-60',
    milk: '180-140-120',
    honey: '0.6-0.4-0.3',
    note: null,
  },
  {
    name: 'Pearl Taro Latte',
    syrup: null,
    tea: null,
    water: '60-40ml (if no pearls, add extra 40ml milk)',
    milk: '140-120ml',
    honey: '0.3-0.2',
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
    syrup: 'Lite: 2-1.5-1 Basil Seeds: 100-80-60ml',
    tea: 'Oolong Tea: 140-100-80ml',
    water: 'Water: 60-40-20ml',
    honey: '0.5-0.4-0.3',
    note: '1 Grape F + 3/2 Orange + 3/2 Apple',
  },
  {
    name: 'Mango Fruit Tea',
    syrup: '86-64-54g',
    tea: 'GT: 240-180-140ml',
    water: null,
    honey: '0.5-0.3-0.2',
    note: null,
  },
  {
    name: 'Passion Fruit Green Tea',
    syrup: '2-1.5-1.0oz',
    tea: 'GT: 240-180-140ml',
    water: null,
    honey: '0.8-0.6-0.4',
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
