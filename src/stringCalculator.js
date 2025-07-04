// Basic implementation of stringCalculator function

function Add(input) {
    if (!input) {
        return 0; // Return 0 for empty or null input
    }

    return input.split(',')
        .map(Number)
        .reduce((sum, num) => sum + num, 0); // Sum up all numbers
}

module.exports = Add;