import { CMF } from './cheese';
import { FRUIT } from './fruit';
import { LATTE } from './latte';
import { MILK_TEA } from './milk-tea';
import { ORIGINAL } from './original';
import { UNCATEGORIZED } from './uncatogory';

export const KF_TEA_LIST = CMF.concat(
  LATTE,
  ORIGINAL,
  MILK_TEA,
  UNCATEGORIZED,
  FRUIT
);
