/**
 * logic.ts file implement the logic for generating random drink orders.
 */
import {
	toppings,
	milks,
	sweetnessLevels,
	iceLevels,
	cupSizes,
	drinksWithoutMilk,
	drinksWithMilk,
} from '../db/data/drinkData';

// 2. Kien
//
// Kien chỉnh sửa lại file queries/order.ts thành controller/logic.ts để sử dụng dữ liệu từ data/drinkData.ts.
// Mục đích để tạo ra 1 order ngẫu nhiên từ 3 methods: getRandomItem(), getRandomToppings(), generateRandomDrink()

/**
 * getRandomItem() is a utility function used to retrieve a random item from an array of strings.
 * @param arr An array of strings from which to select a random item.(data from drinkData.ts)
 * @returns A random item from the provided array.
 */
export const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/**
 * getRandomToppings() is a function used to generate a random selection of toppings for a drink.
 * Toppings are selected from the 'toppings' array in 'drinkData.ts'.
 * numToppings determines the number of toppings to be selected, ranging from 1 to 10.
 * @returns An array of randomly selected unique toppings.
 */
export const getRandomToppings = () => {
	const numToppings = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10 (defines the number of toppings)
	const uniqueToppings = new Set<string>(); // Use a Set<string>() to ensure no duplicate toppings

	// while uniqueToppings size is less than numToppings, keep adding a random topping until it reaches numToppings
	while (uniqueToppings.size < numToppings) {
		uniqueToppings.add(getRandomItem(toppings));
	}

	return Array.from(uniqueToppings);
};

/**
 * Generate a random drink order containing the following properties: name, milk, sweetness, ice, cupSize, toppings
 * If the drink contains milk, a random milk type is selected from the 'milks' array in 'drinkData.ts'.
 * If the drink does not contain milk, the milk property is set to undefined or null.
 * @returns A randomly generated drink object.
 */
export const generateRandomDrink = () => {
	const withMilk = Math.random() < 0.5; // 50% chance of having milk

	const drinkName = withMilk
		? getRandomItem(drinksWithMilk)
		: getRandomItem(drinksWithoutMilk);

	const sweetness = getRandomItem(sweetnessLevels);
	const ice = getRandomItem(iceLevels);
	const cupSize = getRandomItem(cupSizes);
	const toppings = getRandomToppings();

	// Construct the drink object with or without the note based on the condition
	const drinkObject: any = {
		name: drinkName,
		sweetness: sweetness,
		ice: ice,
		cupSize: cupSize,
		toppings: toppings,
		milk: withMilk ? getRandomItem(milks) : 'No milks',
	};

	// Add a note for the 'Pearl Taro Latte' drink
	if (drinkName === 'Pearl Taro Latte') {
		drinkObject['note'] =
			'Note: Pearl + Taro: 100 + 120g 80 _ 90g. If no pearls, Taro: 160-120g, if no pearls, add extra 40ml milk';
	}

	return drinkObject;
};

export const getRandomDrinks = (numDrinks: number) => {
	const drinks: Array<any> = [];
	for (let i = 0; i < numDrinks; i++) {
		let randomDrink = generateRandomDrink();
		// While the drink name has already been selected, generate a new drink
		while (drinks.some((drink: any) => drink.name === randomDrink.name)) {
			randomDrink = generateRandomDrink();
		}
		drinks.push(randomDrink);
	}

	return drinks;
};
