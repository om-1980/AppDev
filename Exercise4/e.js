function isArmstrong(number) {
    let numString = number.toString();
    let numDigits = numString.length;
    let sum = 0;
    
    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === number;
}

// Function to find Armstrong numbers between a given range
function findArmstrongNumbers(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

// Find and print Armstrong numbers between 100 and 5000
let armstrongNumbers = findArmstrongNumbers(100, 5000);
console.log("Armstrong numbers between 100 and 5000:", armstrongNumbers);
