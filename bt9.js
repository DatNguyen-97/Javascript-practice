function caculator (n) {
    if(n <= 0) return

    let result = 1

    for(let i = 1; i <= n; i++){
        result = result * i;
    }

    return result
}

console.log(caculator(5));
