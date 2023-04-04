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

function caculator2 (n) {
    if (n < 0) return
    let result = 0

    for(let i = 0; i <= n; i++) {
        result = result + Math.pow(i, 2)
    }

    return result

}

console.log(caculator2(5))
