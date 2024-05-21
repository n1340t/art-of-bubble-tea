import { useEffect, useState } from 'react';
import {
  toppings,
  milks,
  sweetnessLevels,
  iceLevels,
  cupSizes,
  drinksWithMilk,
  allDrinks,
} from '../../../backend/db/data/kungfu/order-options';

export default function useRecipeData() {
  

  return {
    toppings,
    milks,
    sweetnessLevels,
    iceLevels,
    cupSizes,
    drinksWithMilk,
    allDrinks,
  }
}
