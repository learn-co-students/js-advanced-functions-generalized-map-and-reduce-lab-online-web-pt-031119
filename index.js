const map = (srcArray, fnc) => {
    const result = []
    for (const element of srcArray) {
        result.push(fnc(element))
    }
    return result 
}

const reduce = (srcArray, fnc, start=undefined) => {
    let runTotal 
    if (start) {
      runTotal = start   
    } else {
        runTotal = srcArray.shift()
    }
    for (const element of srcArray) {
      runTotal = fnc(element, runTotal)  
    }
    return runTotal 
}


