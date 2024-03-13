function checkNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return ""; 
    } else {
        return num % 2 === 0 ? 'Парне' : 'Непарне'; 
    }
}

console.log(checkNumber(4)); 
console.log(checkNumber(7)); 
console.log(checkNumber("hello")); 