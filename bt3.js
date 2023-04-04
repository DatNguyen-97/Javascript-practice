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

function caculator3 (n) {
    if (n <= 0) return

    let result = 0

    for(let i = 2; i <= n; i++) {
        result = result + 1/i 
    }

    return result + 1
}

console.log(caculator3(5))