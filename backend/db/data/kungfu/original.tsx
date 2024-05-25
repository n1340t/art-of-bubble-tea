import { KFTeaDrink } from '@backend/types/kf';

export const ORIGINAL: KFTeaDrink[] = [
  {
    name: 'Jin Xuan Oolong Tea',
    availability: true,
    label: ['RECOMMEND', 'COLD', 'HOT'],
    recipes: [
      {
        tea: [
          {
            value: 360,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 260,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.9,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 200,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.7,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Assam Black Tea',
    availability: true,
    label: ['COLD', 'HOT'],
    recipes: [
      {
        tea: [
          {
            value: 180,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],
        water: [
          {
            value: 100,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.5,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 140,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],
        water: [
          {
            value: 80,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.2,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 100,
            unit: 'ml',
            note: 'Black Tea',
          },
        ],
        water: [
          {
            value: 60,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Jasmine Green Tea',
    availability: true,
    label: ['COLD', 'HOT'],
    recipes: [
      {
        tea: [
          {
            value: 280,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1.4,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 200,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],
      },
      {
        tea: [
          {
            value: 160,
            unit: 'ml',
          },
        ],

        honey: [
          {
            value: 0.8,
            unit: 'honey',
          },
        ],
      },
    ],
  },
  {
    name: 'Winter Melon Drink',
    label: ['COLD'],
    availability: false,
    note: 'tea: 380 (40ml water)-300-240ml',
    recipes: [],
  },
];
