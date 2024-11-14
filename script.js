function firstNonRepeatedChar(str) {
 / const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
