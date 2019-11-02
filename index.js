// Add your functions here
function map(array, block){
    let newArray = []
    array.forEach(element => {
        newArray.push(block(element))
    });
    return newArray
}

function reduce(sourceArray, block, startingpoint){
    let start
    let i
if(startingpoint){
    start = startingpoint
    i = 0
} else {
    start = sourceArray[0]
    i = 1
}
for(; i < sourceArray.length; i++){
    start = block(sourceArray[i], start)
}
return start
}