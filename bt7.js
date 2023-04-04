function caculator (n) {
    if (n <= 0) return

    let result = 0

    for(let i = 0; i <= n; i++) {
        result = result + i/(i + 1)
    }

    return result
}

console.log(caculator(5))