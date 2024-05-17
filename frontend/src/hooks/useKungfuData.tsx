import { KFTea } from '../types/kf';
import { KF_TEA_LIST } from '../constants/kungfu';
import { useState, useMemo, useEffect } from 'react';
import { debounce } from './useDebounce';
import { getRandomDrinks } from '../../../backend/controller/logic';

// Add id to KFTea
interface customKFTea extends KFTea {
	id: number;
}

export default function useKungfuData({
	recipesCount,
}: {
	recipesCount?: number;
}) {
	const [search, setSearch] = useState<string>('');

	const updateSearch = debounce((value: string) => {
		setSearch((prev: any) => value);
	}, 1000);

	// const recipes: any[] = KF_TEA_LIST;
	const recipes: any[] = getRandomDrinks(recipesCount || 10);

	// Add ids to keep track of the original order
	recipes.forEach((recipe: any, index: number) => {
		recipe.id = index;
	});

	const filteredRecipes: customKFTea[] = useMemo(() => {
		return recipes.filter((recipe: KFTea) => {
			return recipe.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search]);

	return {
		updateSearch,
		types: ['Standard', 'OneTopping', 'TwoorMoreToppings'],
		recipes: filteredRecipes,
	};
}
