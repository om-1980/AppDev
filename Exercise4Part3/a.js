// Sample input string
const inputString = "JavaScript is a powerful programming language.";

// I. To search for the first occurrence of a substring in a given string
function firstIndexOfSubstr(string, substr) {
    // Using String object method
    const firstIndexUsingMethod = string.indexOf(substr);
    
    // Without using String object method
    let firstIndex = -1;
    for (let i = 0; i < string.length - substr.length + 1; i++) {
        if (string.substring(i, i + substr.length) === substr) {
            firstIndex = i;
            break;
        }
    }
    
    return { usingMethod: firstIndexUsingMethod, withoutMethod: firstIndex };
}

// II. To return the character at a specified index
function charAtIndex(string, index) {
    // Using String object method
    const charUsingMethod = string.charAt(index);
    
    // Without using String object method
    const charWithoutMethod = string[index];
    
    return { usingMethod: charUsingMethod, withoutMethod: charWithoutMethod };
}

// III. To concatenate two string objects
function concatenateStrings(string1, string2) {
    // Using String object method
    const concatenatedUsingMethod = string1.concat(string2);
    
    // Without using String object method
    const concatenatedWithoutMethod = string1 + string2;
    
    return { usingMethod: concatenatedUsingMethod, withoutMethod: concatenatedWithoutMethod };
}

// Testing the functions
console.log("First Index of 'is':", firstIndexOfSubstr(inputString, "is"));
console.log("Character at index 5:", charAtIndex(inputString, 5));
console.log("Concatenated strings:", concatenateStrings("Hello, ", "world!"));
