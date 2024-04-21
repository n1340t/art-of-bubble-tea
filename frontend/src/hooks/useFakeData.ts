import { Data, FluidUnit, KFTea, OtherUnit, Recipe, WeightUnit } from '../types/kf';

export default function useFakeData({
	recipesCount,
	shuffled,
}: {
	recipesCount?: number;
	shuffled?: boolean;
}) {
	function generateRandomData(): Data {
		return {
			value:
				Math.random() < 0.5 ? Math.round(Math.random() * 100) : Math.random().toFixed(2),
			unit: [FluidUnit.ml, FluidUnit.oz, WeightUnit.g, WeightUnit.kg, OtherUnit.ts][
				Math.floor(Math.random() * 5)
			],
			type:
				Math.random() < 0.5
					? null
					: [Recipe.Standard, Recipe.OneTopping, Recipe.TwoorMoreToppings][
							Math.floor(Math.random() * 3)
					  ],
			note: Math.random() < 0.5 ? null : 'Note about data',
		};
	}

	function generateKFTea(): KFTea {
		return {
			name: `Tea ${Math.random().toString(36).substring(7)}`,
			syrup:
				Math.random() < 0.5
					? null
					: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, generateRandomData),
			tea:
				Math.random() < 0.5
					? null
					: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, generateRandomData),
			tea_unit:
				Math.random() < 0.5
					? null
					: [FluidUnit.ml, FluidUnit.oz][Math.floor(Math.random() * 2)],
			water:
				Math.random() < 0.5
					? null
					: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, generateRandomData),
			milk:
				Math.random() < 0.5
					? undefined
					: Math.random() < 0.5
					? null
					: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, generateRandomData),
			honey:
				Math.random() < 0.5
					? null
					: Array.from({ length: Math.floor(Math.random() * 3 + 1) }, generateRandomData),
			availability: Math.random() < 0.5 ? true : 'Available on demand',
			note: Math.random() < 0.5 ? null : 'Special preparation notes',
		};
	}

	// return them with index of order
	const recipes: KFTea[] = Array.from({ length: recipesCount || 10 }, generateKFTea).map(
		(item, index) => ({ ...item, id: `${index + 1}` })
	);

  // If shuffled is true, shuffle the recipes
  if (shuffled) {
    recipes.sort(() => Math.random() - 0.5);
  }

	return {
		recipes,
	};
}
