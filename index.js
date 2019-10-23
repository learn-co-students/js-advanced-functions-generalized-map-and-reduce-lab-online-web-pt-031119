function map(sourceArray, fnc) {
    const transformed = []
    for (const element of sourceArray) {
        transformed.push(fnc(element))
    }
    return transformed
}

function reduce(sourceArray, fnc, startingPoint=0) {
    let total 
    if (startingPoint) {
      total = startingPoint   
    } else {
        total = sourceArray.shift()
    }
    for (const element of sourceArray) {
      total = fnc(element, total)  
    }
    return total 
}

