function map(numbers, some_code) {
	let newNumbers = []
	for (let i = 0; i < numbers.length; i++) {
		newNumbers.push(some_code(numbers[i]))
	}
	return newNumbers
}

function reduce(numbers, some_function, starting_value=0) {
	let accumulator
	if (starting_value) {
		accumulator = starting_value
	} else {
		accumulator = numbers[0]
	}
	let i = starting_value ? 0 : 1
	for (i; i < numbers.length; i++) {
		accumulator = some_function(numbers[i], accumulator)
	}
	return accumulator
}
