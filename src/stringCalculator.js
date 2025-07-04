// Basic implementation of stringCalculator function

function Add(input) {
    if (!input) {
        return 0; // Return 0 for empty or null input
    }

    let delimiter = /,|\n/; // Default delimiters: comma and newline

    // Check for custom delimiter
    if (input.startsWith('//')) {
        const delimiterMatch = input.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            // Escape special regex characters in delimiter
            const escapedDelimiter = delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            delimiter = new RegExp(escapedDelimiter);
            input = input.slice(delimiterMatch[0].length); // Remove delimiter declaration
        }
    }

    return input.split(delimiter)
        .map(Number)
        .reduce((sum, num) => sum + num, 0);
}

module.exports = Add;