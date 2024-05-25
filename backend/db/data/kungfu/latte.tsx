import { KFTeaDrink } from "@backend/types/kf";

export const LATTE: KFTeaDrink[] = [
  {
    name: 'Earl Grey Latte',
    label: ['NEW', 'COLD', 'HOT', 'MILK'],
    availability: true,
    recipes: [],
  },
  {
    name: 'Earl Grey Latte with pearl',
    label: ['NEW', 'COLD', 'HOT', 'MILK'],
    availability: true,
    recipes: [],
  },
  {
    name: 'Pearl Latte with Brown Sugar',
    label: ['RECOMMEND', 'COLD', 'HOT', 'MILK'],
    availability: true,
    recipes: [
      {
        milk: [
          {
            value: 300,
            unit: 'ml',
          },
        ],

        toppings: [
          {
            value: 180,
            unit: 'g',
            note: 'Pearl',
          },
        ],
        type: 'Standard',
      },
      {
        milk: [
          {
            value: 200,
            unit: 'ml',
          },
        ],

        toppings: [
          {
            value: 120,
            unit: 'g',
            note: 'Pearl',
          },
        ],
        type: 'Medium',
      },
    ],
  },
  {
    name: 'Pearl Black Tea Latte',
    label: ['COLD', 'HOT', 'MILK'],
    availability: true,
    note: 'Can change to green tea or Oolong',
    recipes: [
      {
        tea: [
          {
            value: 160,
            unit: 'ml',
          },
        ],

        milk: [
          {
            value: 180,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 1.4,
            unit: 'honey',
          },
        ],

        type: 'Standard',
      },
      {
        tea: [
          {
            value: 120,
            unit: 'ml',
          },
        ],

        milk: [
          {
            value: 140,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 1,
            unit: 'honey',
          },
        ],

        type: 'Medium',
      },
      {
        tea: [
          {
            value: 100,
            unit: 'ml',
          },
        ],

        milk: [
          {
            value: 120,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.8,
            unit: 'honey',
          },
        ],

        type: 'Small',
      },
    ],
  },
  {
    name: 'Pearl Chocolate Latte',
    label: ['COLD', 'HOT', 'MILK'],
    availability: true,
    recipes: [
      {
        syrup: [
          {
            value: 3,
            unit: 'ts',
          },
        ],

        water: [
          {
            value: 100,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 180,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],

        type: 'Standard',
      },
      {
        syrup: [
          {
            value: 2,
            unit: 'ts',
          },
        ],

        water: [
          {
            value: 80,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 140,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],

        type: 'Medium',
      },
      {
        syrup: [
          {
            value: 1,
            unit: 'ts',
          },
        ],

        water: [
          {
            value: 60,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 120,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],

        type: 'Small',
      },
    ],
  },
  {
    name: 'Pearl Matcha Latte',
    availability: true,
    label: ['COLD', 'HOT', 'MILK'],
    recipes: [
      {
        syrup: [
          {
            value: 34,
            unit: 'g',
          },
        ],

        water: [
          {
            value: 100,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 180,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.6,
            unit: 'honey',
          },
        ],

        type: 'Standard',
      },
      {
        syrup: [
          {
            value: 26,
            unit: 'g',
          },
        ],

        water: [
          {
            value: 80,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 140,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.4,
            unit: 'honey',
          },
        ],

        type: 'Medium',
      },
      {
        syrup: [
          {
            value: 22,
            unit: 'g',
          },
        ],

        water: [
          {
            value: 60,
            unit: 'ml',
          },
        ],
        milk: [
          {
            value: 120,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],

        type: 'Small',
      },
    ],
  },
  {
    name: 'Pearl Taro Latte',
    label: ['COLD', 'HOT', 'MILK', 'RECOMMEND'],
    availability: true,
    recipes: [
      {
        water: [
          {
            value: 60,
            unit: 'ml',
            note: 'if no pearls, add extra 40ml milk',
          },
        ],
        milk: [
          {
            value: 140,
            unit: 'ml',
            note: 'if no pearls, add extra 40ml milk',
          },
        ],
        honey: [
          {
            value: 0.3,
            unit: 'honey',
          },
        ],
        toppings: [
          {
            value: 100,
            unit: 'g',
            note: 'Pearl',
          },
          {
            value: 120,
            unit: 'g',
            note: 'Taro - If no pearls, Taro: 160'
          }
        ],
      },
      {
        water: [
          {
            value: 40,
            unit: 'ml',
            note: 'if no pearls, add extra 40ml milk',
          },
        ],
        milk: [
          {
            value: 120,
            unit: 'ml',
          },
        ],
        honey: [
          {
            value: 0.2,
            unit: 'honey',
          },
        ],
        toppings: [
          {
            value: 80,
            unit: 'g',
            note: 'Pearl',
          },
          {
            value: 90,
            unit: 'g',
            note: 'Taro - If no pearls, Taro: 120'
          }
        ],
      },
    ],
  },
];
