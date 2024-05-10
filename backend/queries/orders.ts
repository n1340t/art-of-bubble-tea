import { DrinkData } from "../db/seeds/orders";

const getRandomOrder = (drinks: DrinkData[]) => {
  const randomIndex = Math.floor(Math.random() * drinks.length);
  const randomDrink = drinks[randomIndex];
  const getRandomItem = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)];

  const result = {
    name: randomDrink.name,
    bigToppings: getRandomItem(randomDrink.bigToppings),
    smallToppings: getRandomItem(randomDrink.smallToppings),
    milk: getRandomItem(randomDrink.milk),
    sweetnessLevel: getRandomItem(randomDrink.sweetnessLevel),
    iceLevel: getRandomItem(randomDrink.iceLevel),
    cupSize: getRandomItem(randomDrink.cupSize),
  };

  return result;
};

export default getRandomOrder;
