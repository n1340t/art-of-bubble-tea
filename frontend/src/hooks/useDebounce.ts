const debounce = (fn: Function, delay = 500) => {
	let timeout: any;

	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};

export { debounce };
