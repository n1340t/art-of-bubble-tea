import { KFTea, Recipe } from '../types/kf';
import { KF_TEA_LIST } from '../constants/kungfu';

export default function useKungfuData({
	recipesCount,
	shuffled,
}: {
	recipesCount?: number;
	shuffled?: boolean;
}) {
	const recipes: KFTea[] = KF_TEA_LIST;

	// If shuffled is true, shuffle the recipes
	if (shuffled) {
		recipes.sort(() => Math.random() - 0.5);
	}

	return {
		types: ['Standard', 'OneTopping', 'TwoorMoreToppings'],
		recipes: recipes.slice(0, recipesCount || 10),
	};
}
