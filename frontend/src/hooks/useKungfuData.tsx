import { KFTea } from '../types/kf';
import { KF_TEA_LIST } from '../constants/kungfu';
import { useState, useMemo, useEffect } from 'react';
import { debounce } from './useDebounce';

// Add id to KFTea
interface customKFTea extends KFTea {
	id: number;
}

export default function useKungfuData({
	recipesCount,
	shuffledRequest,
}: {
	recipesCount?: number;
	
	shuffledRequest: boolean;
}) {
	const [search, setSearch] = useState<string>('');

	const updateSearch = debounce((value: string) => {
		setSearch((prev: any) => value);
	}, 1000);

	const recipes: any[] = KF_TEA_LIST;

	// Add ids to keep track of the original order
	recipes.forEach((recipe: any, index: number) => {
		recipe.id = index;
	});

	const filteredRecipes: customKFTea[] = useMemo(() => {
		return recipes.filter((recipe: KFTea) => {
			return recipe.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search]);

	if (shuffledRequest === true) {
		filteredRecipes.sort(() => Math.random() - 0.5);
	} else {
		filteredRecipes.sort((a, b) => a.id - b.id);
	}

	return {
		updateSearch,
		types: ['Standard', 'OneTopping', 'TwoorMoreToppings'],
		recipes: filteredRecipes.slice(0, recipesCount || 10),
	};
}
