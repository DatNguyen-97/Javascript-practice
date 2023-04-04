function caculator () {
    if(arguments.length <= 0) return
    let result = 0
    Object.values(arguments).forEach(e => {
        result = result + 1/e;
    })

    return result + 1
}

function caculator2 () {
    if(arguments.length <= 0) return
    const result =  Object.values(arguments).reduce((a,b) => {
        return a + 1/b;
    })

    return result
}

console.log(caculator(3,5,7))
console.log(caculator2(4,6,8))