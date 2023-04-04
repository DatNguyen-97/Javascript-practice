function caculator () {
    if(arguments.length <= 0) return
    let a = 0
    Object.values(arguments).forEach((value) => {
        a = a + Math.pow(value, 2)
    })


    return a 
}

console.log(caculator(1,2,3))
console.log(caculator())
