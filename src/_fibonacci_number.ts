export function _fibonacci_number(n) {
	return (
		n < 1
		? 0
		: n <= 2
			? 1
			: _fibonacci_number(n - 1) + _fibonacci_number(n - 2)
	)
}
export {
	_fibonacci_number as _number__fibonacci
}
