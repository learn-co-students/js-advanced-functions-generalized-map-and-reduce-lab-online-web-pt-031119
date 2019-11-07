// Add your functions here
function map(sourceArray, operation) {
  let returnedArray = [];
  sourceArray.forEach(function(element) {
    returnedArray.push(operation(element));
  });
  return returnedArray;
}

function reduce(sourceArray, operation, startingPoint) {
  let total = startingPoint || 0;
  sourceArray.forEach(function(element) {
    total = operation(element, total);
  });
  return total;
}
