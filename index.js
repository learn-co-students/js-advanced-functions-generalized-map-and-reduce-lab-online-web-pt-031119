function map(sourceArray, operation) {
    let returnedArray = [];
    sourceArray.forEach(function(element) {
      returnedArray.push(operation(element));
    });
    return returnedArray;
  }
  function reduce(array, callback, startingPoint) {
    let total = startingPoint ? startingPoint : array[0]
  
    for (let i = startingPoint ? 0 : 1; i < array.length; i++) {
      total = callback(array[i], total)
    }
    return total
  }