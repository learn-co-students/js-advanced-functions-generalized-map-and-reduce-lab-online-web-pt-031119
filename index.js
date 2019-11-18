// // Add your functions here
function map(array, callBack) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        let newElement = array[i]
        newArr.push(callBack(newElement))
    }
    return newArr
}

function reduce(array, callBack, startValue) {
    let r = (!!startValue) ? startValue : array[0]
    let i = (!!startValue) ? 0 : 1

    for (; i < array.length; i++) {
        r = callBack(array[i], r)
    }

    return r;
}