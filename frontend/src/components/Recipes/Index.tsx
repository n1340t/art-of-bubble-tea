import { useState } from 'react';
import useRecipeData from '../../hooks/useRecipeData';

export default function RecipesIndex() {
	const [category, setCategory] = useState('allDrinks');
	const hardCodedData = useRecipeData();
	return (
		<div className='relative dark:bg-gray-200 min-h-screen'>
			<div className='fixed top-0 left-0 w-screen z-10'>
				<div className='flex h-full w-full bg-gray-100 dark:bg-zinc-600 px-3 p-2'>
					<div
						className='cursor-pointer -translate-x-2 flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-900 dark:text-gray-50'
						onClick={() => {
							window.history.back();
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 19.5 8.25 12l7.5-7.5'
							/>
						</svg>
					</div>

					<h1 className='text-2xl font-semibold dark:text-gray-50 translate-y-0.5'>Recipes</h1>
					<div className=''></div>
				</div>
			</div>
			<div className='pt-16 pb-24 px-4'>
				{hardCodedData && category && category.length > 0 && (
					<div className='flex flex-wrap gap-4'>
						{hardCodedData[category].map((recipe: any, index: number) => {
							return (
								<div
									className='border p-4 rounded-lg text-gray-800 dark:border-gray-500'
									key={index}
								>
									<div className='text-lg font-bold text-gray-500'>
										{String(recipe)
											?.split(' ')
											.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>

			<ControlBar
				data={hardCodedData}
				selected={category}
				setCategory={setCategory}
			/>
		</div>
	);
}

const ControlBar = ({ data, selected, setCategory }: { data: any; selected: string, setCategory: any }) => {
	return (
		<div className='fixed bottom-0 left-0 z-10 h-auto overflow-hidden w-full'>
			<div className='flex justify-center max-w-screen w-full'>
				<div className='flex items-end gap-x-0 w-[fit-content] lg:px-3 overflow-x-scroll z-10 h-[4.5rem] overflow-visible'>
					{Object.keys(data)
						.sort()
						.map((key: string) => {
							return (
								<div className={'relative flex border h-14 min-w-[5em] px-2 cursor-pointer' + (selected === key ? ' bg-indigo-500 dark:bg-gray-50 text-white' : ' bg-white dark:bg-gray-300')}
									onClick={() => setCategory(key)}
									key={key}
								>
									<div className='flex h-full w-full justify-center items-center text-sm text-center dark:text-gray-600'>
										{
											// Split by the first capital letter and capitalize the first letter of each word
											key
												.split(/(?=[A-Z])/)
												.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
												.join(' ')
										}
									</div>
									<div className='z-10 absolute -top-2.5 -right-2 bg-red-500 rounded-full w-5 h-5 text-center p-0.5 text-white text-xs'>
										{data[key] && data[key]?.length}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
