import { DrinkData } from "../db/schema/orderTypes";

const getRandomItem = (array: string[] | null, count?: number) => {
  if (!array || array.length === 0) {
    return null;
  }

  if (!count) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // select multiple random items and create new array
  const selectedIndices: Set<number> = new Set();

  for (let i = 0; i < count; i ++) {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * array.length);
    } while (selectedIndices.has(randomIndex)); // make sure the index is unique
    selectedIndices.add(randomIndex);
  }

  const selectedItems = Array.from(selectedIndices).map(i => array[i]);
  return selectedItems;

};

const getRandomOrder = (drinks: DrinkData[]) => {
  const randomIndex = Math.floor(Math.random() * drinks.length);
  const randomDrink = drinks[randomIndex];

  // Random topping count from 1 to 5
  const randomToppingsCount = Math.floor(Math.random() * 5) + 1;

  const result = {
    name: randomDrink.name,
    size: getRandomItem(randomDrink.size),
    sweetness: getRandomItem(randomDrink.sweetness),
    ice: getRandomItem(randomDrink.ice),
    topping: getRandomItem(randomDrink.topping, randomToppingsCount),
    milk: getRandomItem(randomDrink.milk),
  };

  return result;
};

export default getRandomOrder;
