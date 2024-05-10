export type KFTea = {
    name: string;
    syrup: Data[] | null;
    tea: Data[] | null;
    tea_unit?: FluidUnit | null;
    water: Data[] | null;
    milk?: Data[] | null;
    honey: Data[] | null;
    availability: boolean | string;
    note: string | null;
  };
  
  export type Data = {
    value: string | number;
    unit: Unit;
    type?: Recipe | null;
    note?: string | null;
  };
  type Unit = FluidUnit | WeightUnit | PowderUnit | OtherUnit;
  export enum WeightUnit {
    g = 'g',
    kg = 'kg',
  }
  export enum FluidUnit {
    ml = 'ml',
    oz = 'oz',
    honey = 'honey',
  }
  export enum PowderUnit {
    lg = 'large',
    med = 'medium',
    sm = 'small',
  }
  export enum OtherUnit {
    ts = 'teaspoon',
  }
  export enum Recipe {
    Standard,
    OneTopping,
    TwoorMoreToppings,
  }
  