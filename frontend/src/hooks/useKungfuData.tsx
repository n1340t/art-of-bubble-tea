import { KFTea, Recipe } from '../types/kf';
import { KF_TEA_LIST } from '../constants/kungfu';
import { useState, useMemo, useEffect } from 'react';
import { debounce } from './useDebounce';

export default function useKungfuData({
	recipesCount,
	shuffled,
}: {
	recipesCount?: number;
	shuffled: boolean;
}) {
	const [search, setSearch] = useState<string>('');

	const updateSearch = debounce((value: string) => {
		setSearch((prev: any) => value);
	}, 1000);
	const recipes: KFTea[] = KF_TEA_LIST;

	const filteredRecipes = useMemo(() => {
		return recipes.filter((recipe: KFTea) => {
			return recipe.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search]);

	
	useEffect(() => {
			filteredRecipes.sort(() => Math.random() - 0.5);
	}, [shuffled, filteredRecipes, recipesCount]);
		

	return {
		updateSearch,
		types: ['Standard', 'OneTopping', 'TwoorMoreToppings'],
		recipes: filteredRecipes.slice(0, recipesCount || 10),
	};
}
