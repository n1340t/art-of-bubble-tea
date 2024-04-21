import { useState } from 'react';
import useFakeData from '../../hooks/useFakeData';

export default function Test() {
	const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
	const [isShuffled, setIsShuffled] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(1);

	const { recipes } = useFakeData({
		recipesCount: numberOfQuestions,
		shuffled: isShuffled,
	});
	const totalPages = Math.ceil(recipes.length / 10); // Pagination set to 10 by default

	const goToPage = (page: number) => {
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * 10; // Pagination set to 10 by default
	const currentItems = recipes.slice(startIndex, startIndex + 10); // Pagination set to 10 by default
	return (
		<div className='flex items-start'>
			<div className='flex flex-col items-center'>
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

				<div className='flex flex-col gap-3 md:gap-4 px-5 md:px-10'>
					{currentItems &&
						currentItems.map((answer: any, index: number) => (
							<div key={answer.id}>
								<div className='bg-white ring-1 ring-black ring-opacity-10 rounded-lg shadow-lg'>
									<div className='border p-2'>{JSON.stringify(answer)}</div>
									<div className=''></div>
								</div>
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
