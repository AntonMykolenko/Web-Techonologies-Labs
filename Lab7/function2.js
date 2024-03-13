function sumOfFirstFivePrimes() {
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
    
        if (n % 2 === 0 || n % 3 === 0) return false;
    
        let i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
    
        return true;
    }

    let primes = [];
    let sum = 0;
    let num = 2;

    while (primes.length < 5) {
        if (isPrime(num)) {
            primes.push(num);
            sum += num; 
        }
        num++;
    }

    return sum;
}

console.log(sumOfFirstFivePrimes());
