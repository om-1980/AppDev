// Sample input string
const inputString = "JavaScript is a powerful programming language. It is widely used for web development.";

// I. To search for the last occurrence of a substring in a given string
function lastIndexOfSubstr(string, substr) {
    // Using String object method
    const lastIndexUsingMethod = string.lastIndexOf(substr);
    
    // Without using String object method
    let lastIndex = -1;
    for (let i = string.length - substr.length; i >= 0; i--) {
        if (string.substring(i, i + substr.length) === substr) {
            lastIndex = i;
            break;
        }
    }
    
    return { usingMethod: lastIndexUsingMethod, withoutMethod: lastIndex };
}

// II. To extract a substring from a given string
function extractSubstring(string, start, length) {
    // Using String object method
    const substrUsingMethod = string.substring(start, start + length);
    
    // Without using String object method
    let substr = '';
    for (let i = start; i < start + length; i++) {
        substr += string[i];
    }
    
    return { usingMethod: substrUsingMethod, withoutMethod: substr };
}

// III. To split the given string into various substrings
function splitString(string, separator) {
    // Using String object method
    const substringsUsingMethod = string.split(separator);
    
    // Without using String object method
    const substringsWithoutMethod = [];
    let startIndex = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === separator) {
            substringsWithoutMethod.push(string.substring(startIndex, i));
            startIndex = i + 1;
        }
    }
    substringsWithoutMethod.push(string.substring(startIndex));
    
    return { usingMethod: substringsUsingMethod, withoutMethod: substringsWithoutMethod };
}

// Testing the functions
console.log("Last Index of 'is':", lastIndexOfSubstr(inputString, "is"));
console.log("Extract Substring (index 5, length 10):", extractSubstring(inputString, 5, 10));
console.log("Split String (separator: ' '):", splitString(inputString, ' '));
