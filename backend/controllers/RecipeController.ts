import { KF_TEA_LIST } from '../data';
import { KFTea } from '../data/interface/types';

const randomTheReceipes = (recipes: KFTea[], limit?: number) => {
	if (Object.keys(recipes).length > 0) {
		return Object.values(recipes)
			.sort(() => 0.5 - Math.random())
			.slice(0, limit || 10);
	}

	return [];
};

const getIngredients = (recipe: KFTea) => {
	const { name, availability, note, ...ingredients }: KFTea = recipe;
	return ingredients;
};

const getAvailableTypes = (recipe: KFTea) => {
	let types: any[] = [];

	const ingredients = getIngredients(recipe);

	Object.keys(ingredients).forEach((key) => {
		if (ingredients[key]) {
			ingredients[key].forEach((ingredient: any) => {
				if (!types.includes(ingredient.type)) {
					types.push(ingredient.type);
				}
			});
		}
	});
	return types;
};

const getRandomType = (recipe: KFTea) => {
	const types = getAvailableTypes(recipe);
	return types[Math.floor(Math.random() * types.length)];
}

function getRandomRecipes() {
	const typesAsReadibleTexts = ['Standard', 'One Topping', 'Two or More Toppings'];
	
	// Randomly get 10 recipes from the CMF
	const recipes = randomTheReceipes(KF_TEA_LIST, 10);

	return recipes.map((recipe) => {
		// Randomize the type of the recipe
		const type = getRandomType(recipe);
		let ingredients: any = getIngredients(recipe);
		
		// Filter out the ingredients based on the type
		ingredients = Object.keys(ingredients).reduce((acc, key) => {
			if (ingredients[key]) {
				acc[key] = ingredients[key].filter((ingredient: any) => ingredient.type === type);
			}
			return acc;
		}, {});

		return {
			...recipe,
			ingredients,
			type: typesAsReadibleTexts[type]
		};
	});
}
