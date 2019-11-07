function map(numbers, some_code) {
	let newNumbers = []
	for (let i = 0; i < numbers.length; i++) {
		newNumbers.push(some_code(numbers[i]))
	}
	return newNumbers
}

function reduce(numbers, some_function, starting_value=0) {
	let sum;
	if (starting_value) {
		sum = starting_value
	} else {
		sum = numbers[0]
	}
	let i = starting_value ? 0 : 1
	for (i; i < numbers.length; i++) {
		sum = some_function(numbers[i], sum)
	}
	return sum
}
