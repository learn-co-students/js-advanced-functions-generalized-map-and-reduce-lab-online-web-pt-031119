// Add your functions here

//
function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray
}

function reduce(array, callback, startingPoint) {
  let total = startingPoint ? startingPoint : array[0]

  //if no starting point, starting point is first element in the array (skips over this first element, starts at 2)
  for (let i = startingPoint ? 0 : 1; i < array.length; i++) {
    total = callback(array[i], total)
  }
  return total
}

//what does reduce do?
