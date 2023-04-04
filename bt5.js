function caculator (n) {
    if (n <= 0) return

    let result = 0

    for(let i = 1; i <= n; i++) {
        result = result + 1/(2*i + 1)
    }

    return result + 1
}

console.log(caculator(5))