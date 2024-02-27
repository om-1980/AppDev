function isPrime(number) {
    // Check if the number is less than 2, as primes start from 2
    if (number < 2) {
        return false;
    }
    
    // Check if the number is divisible by any integer from 2 to its square root
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible, not prime
        }
    }
    
    return true; // If not divisible by any number, it's prime
}

// Example usage:
const num = 17;
if (isPrime(num)) {
    console.log(num + " is prime.");
} else {
    console.log(num + " is not prime.");
}
