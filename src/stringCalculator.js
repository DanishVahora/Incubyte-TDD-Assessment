// Basic implementation of stringCalculator function

function Add(input) {
    if (input === '') {
        return 0; // Return 0 for empty string
    }

    const numbers = input.split(',').map(Number);
    return numbers.reduce((sum, num) => sum + num, 0); // Sum up all numbers
}

module.exports = Add;