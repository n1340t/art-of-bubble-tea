import { useState } from 'react';
import useKungfuData from '../../hooks/useKungfuData';
import { KFTea, Recipe } from '../../types/kf';

export default function Test() {
	const [filter, setFilter] = useState<string>('');
	const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
	const [isShuffled, setIsShuffled] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(1);

	const {
		updateSearch,
		recipes,
		types,
	}: {
		updateSearch: Function;
		recipes: KFTea[];
		types: string[];
	} = useKungfuData({
		recipesCount: numberOfQuestions,
		shuffled: isShuffled,
	});
	const totalPages = Math.ceil(recipes.length / 10); // Pagination set to 10 by default

	const goToPage = (page: number) => {
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * 10; // Pagination set to 10 by default
	const currentItems: KFTea[] = recipes.slice(startIndex, startIndex + 10); // Pagination set to 10 by default
	return (
		<div className='flex items-start w-full'>
			<div className='flex flex-col items-center w-full pb-8'>
				<div className='z-20 fixed md:flex top-0 left-0 w-screen'>
					<div className='bg-white flex flex-col lg:flex-row lg:items-center gap-3 p-3 leading-none shadow-lg w-full'>
						<div className='flex w-full justify-center items-center'>
							<div className='relative items-center w-full pl-4 overflow-hidden'>
								<svg
									className='w-6 h-6 text-gray-400 dark:text-white absolute top-0 left-6 translate-y-[40%] lg:translate-y-[23%] z-10'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeWidth='2'
										d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
									/>
								</svg>

								<div
									className={
										'absolute cursor-pointer transition-all ease-in-out duration-500 top-0 right-3.5 translate-y-3/4 lg:translate-y-1/2 text-gray-400' +
										(filter.length > 0
											? ' translate-x-0 opacity-100'
											: ' translate-x-24 opacity-0')
									}
									onClick={() => {
										setFilter('');
										updateSearch('');
									}}
								>
									Clear
								</div>
								<input
									type='text'
									className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 lg:pr-2.5 lg:py-1.5 pl-9 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Search for recipes'
									value={filter}
									onChange={(e) => {
										e.preventDefault();
										if (currentPage !== 1) {
											setCurrentPage((curr: number) => 1);
										}
										setFilter((prev: any) => e.target.value);
										updateSearch(e.target.value);
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full flex flex-col gap-3 md:gap-4 px-5 md:px-10 pt-[6em] lg:pt-20 pb-6'>
					<div className='flex flex-row items-center justify-end gap-x-3'>
						<div
							className='bg-indigo-500 rounded text-white focus:bg-indigo-600 p-1 px-3'
							onClick={() => {
								if (currentPage !== 1) {
									setCurrentPage((curr: number) => 1);
								}
								setIsShuffled((prev: any) => !prev);
							}}
							role='button'
						>
							{'Shuffle'}
						</div>
						<select
							onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
							className='bg-gray-50 ring-1 ring-black/20 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							{numberOfQuestions &&
								[10, 25, 50, 100].includes(numberOfQuestions) &&
								[10, 25, 50, 100].map((value: number, index: number) => (
									<option
										key={index}
										value={value}
									>{`Get ${value} recipes`}</option>
								))}
						</select>
					</div>
					{currentItems && totalPages > 1 && currentItems.length > 5 && (
						<div className='w-full justify-center flex flex-row items-center gap-x-3 md:gap-x-5'>
							{Array.from({ length: totalPages }, (_, index) => (
								<button
									key={index + 1}
									className={`${
										currentPage === index + 1
											? 'bg-blue-500 text-white'
											: 'bg-white text-black'
									} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
									onClick={() => goToPage(index + 1)}
								>
									{index + 1}
								</button>
							))}
						</div>
					)}
					{currentItems &&
						currentItems.map((answer: KFTea, index: number) => (
							<div key={index}>
								<AnswerDisplay
									answer={answer}
									types={types}
								/>
							</div>
						))}
				</div>
				{currentItems && currentItems.length > 0 && totalPages > 1 && (
					<div className='p-2 flex flex-row items-center gap-3 md:gap-5'>
						{Array.from({ length: totalPages }, (_, index) => (
							<button
								key={index + 1}
								className={`${
									currentPage === index + 1
										? 'bg-blue-500 text-white'
										: 'bg-white text-black'
								} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
								onClick={() => {
									goToPage(index + 1);
									window.scrollTo({
										top: 0,
										behavior: 'smooth',
									});
								}}
							>
								{index + 1}
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

const AnswerDisplay = ({ answer, types }: { answer: KFTea; types: Recipe[] }) => {
	const { name, availability, note, ...others } = answer;
	const getTypes = (): string[] => {
		// Get all the types from fields: syrup, tea, water, milk, honey
		const types: string[] = [];
		Object.keys(others).forEach((key: string) => {
			if (others[key]) {
				others[key].forEach((props: any) => {
					if (!types.includes(props?.type)) {
						types.push(props?.type);
					}
				});

				// break the loop if all types are found
				if (types.length > 0) {
					return types;
				}
			}
		});

		return types;
	};

	const foundTypes: string[] = getTypes();

	return (
		<div className='relative bg-white ring-1 ring-black ring-opacity-10 rounded-lg shadow-lg px-3 md:px-5 py-2 md:py-4'>
			<div className='absolute top-3 right-0'>
				<div className='flex items-center gap-2'>
					<>
						{availability ? (
							<span className='rounded-l bg-lime-700 text-white text-center pl-2 p-1 font-light text-[.8em]'>
								{'In stock'}
							</span>
						) : (
							<span className='rounded-l bg-gray-200 text-gray-800 text-center px-2 py-1 text-xs ring-1 ring-black/10 shadow-lg'>
								{'Out of stock'}
							</span>
						)}
					</>
				</div>
			</div>
			<h3 className='font-lg font-semibold py-2 border-b mb-3'>{answer?.name}</h3>
			<ul className='flex flex-col lg:flex-row w-full justify-evenly gap-x-3 rounded-lg'>
				{foundTypes.map((type: string, index: number) => (
					<li
						key={index}
						className='w-full'
					>
						<RecipeType
							key={index}
							others={others}
							type={type}
							types={types}
						/>
					</li>
				))}
			</ul>

			{note && (
				<div className='border-t border-dotted border-gray-500 mt-3'>
					<span className='text-gray-500 font-light text-[.8em] mb-2'>{'Note: '}</span>
					<div className='bg-gray-100 text-gray-600 px-2 py-1 text-[.9em] rounded-lg'>
						{note}
					</div>
				</div>
			)}
		</div>
	);
};

const RecipeType = ({
	others,
	type,
	types,
}: {
	others: any;
	type: string;
	types: Recipe[];
}) => {
	const [show, setShow] = useState(window.innerWidth > 768 ?? false);
	return (
		<div className='w-full'>
			<div
				className='flex items-center justify-between bg-blue-100 text-gray-600 p-2'
				onClick={() => setShow(window.innerWidth > 768 ? true : !show)}
			>
				<div>{types[type]}</div>
				<div className={'lg:hidden block' + (show ? 'rotate-180' : '')}>
					<svg
						className='w-6 h-6 text-gray-800 dark:text-white'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='none'
						viewBox='0 0 24 24'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m8 10 4 4 4-4'
						/>
					</svg>
				</div>
			</div>
			<div className={'px-3 lg:px-4' + (show && ' py-3 border-x')}>
				{others &&
					Object.keys(others).length > 0 &&
					Object.keys(others).map((key: string, index: number) => (
						<div
							key={index}
							className={
								'flex flex-wrap gap-2 transition-all ease-in-out duration-300 w-full ' +
								(show ? 'h-full mb-1' : 'lg:h-0 lg:mb-0')
							}
						>
							{show &&
								others[key] &&
								others[key] !== null &&
								others[key].filter((item: any) => item.type === parseInt(type))[0] && (
									<div className='flex gap-x-1'>
										<span className='bg-indigo-500 rounded p-0.5 px-1 lg:px-2 text-white'>{`${key}`}</span>

										<span>
											{Object.entries(
												others[key].filter((item: any) => item.type === parseInt(type))[0]
											).map(
												([key, value]: [string, any], index: number) =>
													key !== 'type' && (
														<span
															key={index}
															className='text-sm'
														>
															{`${value} `}
														</span>
													)
											)}
										</span>
									</div>
								)}
						</div>
					))}
			</div>
		</div>
	);
};
