function map(arr, uniqueWork) {
    const newArr = []
    for (const el of arr) {
        newArr.push(uniqueWork(el))
    }
    return newArr
}

function reduce(arr, uniqueWork, startingPoint) {
    let accumulator
    if (startingPoint) {
        accumulator = startingPoint
        arr.forEach(el => {
            accumulator = uniqueWork(el, accumulator)
        })
    } else {
        accumulator = arr[0]
        arr.slice(1).forEach(el => {
            accumulator = uniqueWork(el, accumulator)
        })
    }
    return accumulator
}
