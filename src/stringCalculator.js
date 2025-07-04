// Basic implementation of stringCalculator function

function Add(input) {

    if (input === '') {
        return 0; // Return 0 for empty string
    }
    
    return parseInt(input, 10); // Convert single number string to integer

}

module.exports = Add;