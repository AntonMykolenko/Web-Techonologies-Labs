function sumOfSeries(n) {
    let currentTerm = 1;
    let currentNumber = 1;

    for (let i = 1; i < n; i++) {
        currentNumber = currentNumber * 10 + 1; 
        currentTerm += currentNumber; 
    }

    return currentTerm;
}

console.log(sumOfSeries(9));

