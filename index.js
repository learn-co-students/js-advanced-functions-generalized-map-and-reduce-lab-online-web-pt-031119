function map(sourceArray, x) {
    let array = []

    for (let i = 0; i < sourceArray.length; i++) {
        let whatever = sourceArray[i]
        array.push(x(whatever))
    }

    return array;
}

function reduce(sourceArray, x, starting) {
    let whatever = (!!starting) ? starting : sourceArray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < sourceArray.length; i++) {
        whatever = x(sourceArray[i], whatever)
    }

    return whatever;
}