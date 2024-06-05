/**
 * file contains arrays of strings representing different drink options.
 */

import { KF_TEA_LIST } from '.';

// 1. Kien
//
// Kiên chỉnh sửa file seeds/order.ts thành file data/drinkData.ts để sử dụng dữ liệu trong các method của controller/logic.ts.
// Lượt bỏ file orderTypes.ts strong scheme cho ngắn gọn.
//

export const toppings: string[] = [
  'Brown sugar pearl',
  'Grass jelly',
  'Basil seeds',
  'Pudding',
  'Cheese milk form',
  'Ice cream',
  'Agar jelly',
  'Coco jelly',
  'Red bean',
  'Aloe vera',
  'Coffee jelly',
  'Agar bubble',
  'Strawberry popping boba',
  'Mango popping boba',
  'Lychee popping boba',
];

export const milks: string[] = [
  'regular milk',
  'lactose free milk',
  'almond milk',
  'soy milk',
];

export const sweetnessLevels: string[] = [
  'No sweet (0%)',
  'Little (30%)',
  'Half (50%)',
  'Less (70%)',
  'Standard (100%)',
  'More (120%)',
];

export const iceLevels: string[] = [
  'Standard (100%)',
  'Less ice (30%)',
  'No ice (0%)',
];

export const cupSizes: string[] = ['Large', 'Regular'];

export const allDrinks = KF_TEA_LIST.filter((tea) => tea.availability).map(
  (tea) => tea.name
);

export const drinksWithMilk = KF_TEA_LIST.filter(
  (tea) => tea.availability && tea.label.includes('MILK')
).map((tea) => tea.name);
