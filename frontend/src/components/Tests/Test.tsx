import { useState } from 'react';
import useKungfuData from '../../hooks/useKungfuData';
import { KFTea, Recipe } from '../../types/kf';

export default function Test() {
	const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
	const [isShuffled, setIsShuffled] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(1);

	const {
		recipes,
		types,
	}: {
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
			<div className='flex flex-col items-center w-full'>
				<div className='flex items-center justify-end gap-3 p-3 leading-none'>
					<div className=''>
						<label className='inline-flex items-center mb-5 cursor-pointer text-sm font-medium text-gray-800 dark:text-white'>
							<input
								type='checkbox'
								checked={isShuffled}
								onChange={() => setIsShuffled(!isShuffled)}
								className='sr-only peer'
							/>
							<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
								In Random Order
							</span>
						</label>
					</div>
					<div className='flex flex-col md:flex-row'>
						<label
							htmlFor='default'
							className='block mb-2 text-sm font-medium text-gray-800 dark:text-white'
						>
							Number of recipes
						</label>
						<select
							id='default'
							onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
							className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							{numberOfQuestions &&
								[10, 25, 50, 100].includes(numberOfQuestions) &&
								[10, 25, 50, 100].map((value: number, index: number) => (
									<option
										key={index}
										value={value}
									>{`${value} recipes`}</option>
								))}
						</select>
					</div>
				</div>

				<div className='w-full flex flex-col gap-3 md:gap-4 px-5 md:px-10'>
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
				<div className='p-2 flex flex-row items-center gap-3 md:gap-5'>
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index + 1}
							className={`${
								currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'
							} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
							onClick={() => goToPage(index + 1)}
						>
							{index + 1}
						</button>
					))}
				</div>
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
			<div className='absolute top-2 right-3'>
				<div className='flex items-center gap-2'>
					<>
						{availability ? (
							<span className='rounded-lg bg-lime-700 text-white text-center px-2 py-1 text-xs'>
								{'In stock'}
							</span>
						) : (
							<span className='rounded-lg bg-gray-200 text-gray-800 text-center px-2 py-1 text-xs'>
								{'Out of stock'}
							</span>
						)}
					</>
					<>
						{foundTypes.map((type: string, index: number) => (
							<span
								key={index}
								className='bg-blue-500 text-white text-xs px-2 py-1 rounded-lg'
							>
								{types[parseInt(type)]}
							</span>
						))}
					</>
				</div>
			</div>
			<h3 className={'font-lg font-semibold pb-1' + (availability && ' border-b mb-3')}>{answer?.name}</h3>
			<ul className='flex flex-col lg:flex-row w-full justify-evenly gap-x-3'>
				{foundTypes.map((type: string, index: number) => (
					<li
						key={index}
						className='w-full'
					>
						<div className='ring-2 ring-black/10 w-full'>
							<div className='bg-blue-100 text-gray-600 p-2'>{types[type]}</div>
							<div className='px-3 lg:px-4 py-3'>
								{others &&
									Object.keys(others).length > 0 &&
									Object.keys(others).map((key: string, index: number) => (
										<div
											key={index}
											className='flex flex-wrap gap-2 w-full mb-1'
										>
											{others[key] &&
												others[key] !== null &&
												others[key].filter(
													(item: any) => item.type === parseInt(type)
												)[0] && (
													<>
														<span className='bg-indigo-500 rounded px-2 text-white'>{`${key}:`}</span>
														<span>
															{Object.entries(
																others[key].filter(
																	(item: any) => item.type === parseInt(type)
																)[0]
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
													</>
												)}
										</div>
									))}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
