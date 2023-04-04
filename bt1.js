function sum () {
    if (arguments.length <= 0) return
    let i = 0
    for (const value of Object.values(arguments)) {
        i = i + value
    }

    return i
}

console.log(sum(3,5,7))
console.log(sum(10,-6,3))
console.log(sum())
