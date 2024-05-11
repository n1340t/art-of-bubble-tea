import { DrinkData } from "../db/schema/orderTypes";

const getRandomItem = (array: string[] | null) => {
  if (!array || array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomOrder = (drinks: DrinkData[]) => {
  const randomIndex = Math.floor(Math.random() * drinks.length);
  const randomDrink = drinks[randomIndex];

  const result = {
    name: randomDrink.name,
    size: getRandomItem(randomDrink.size),
    sweetness: getRandomItem(randomDrink.sweetness),
    ice: getRandomItem(randomDrink.ice),
    topping: getRandomItem(randomDrink.topping),
    milk: getRandomItem(randomDrink.milk),
  };

  return result;
};

export default getRandomOrder;
