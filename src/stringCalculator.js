// String Calculator supporting custom delimiters, negative number validation, and ignoring numbers > 1000

// Escapes special regex characters in a string for use in RegExp
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Removes the outer brackets from a string (e.g., "[abc]" -> "abc")
function removeBrackets(str) {
    return str.slice(1, -1);
}

// Parses the delimiter from the input string and returns the delimiter RegExp and the rest of the string
function parseDelimiter(input) {
    // Multiple delimiters: //[delim1][delim2][delim3]\n (any length)
    if (input.startsWith('//[')) {
        // Match all [delim] sections
        const delimiterMatches = input.match(/\[(.*?)\]/g);
        if (delimiterMatches) {
            const delimiters = delimiterMatches.map(d => escapeRegex(d.slice(1, -1)));
            const delimiterRegex = new RegExp(delimiters.join('|'));
            // Find where the delimiter section ends
            const delimiterSectionEnd = input.indexOf('\n') + 1;
            return { delimiter: delimiterRegex, rest: input.slice(delimiterSectionEnd) };
        }
    }

    // Single-character delimiter: //delimiter\n (e.g., //;\n1;2)
    if (input.startsWith('//')) {
        const match = input.match(/^\/\/(.+)\n/);
        if (match) {
            const escaped = escapeRegex(match[1]);
            return { delimiter: new RegExp(escaped), rest: input.slice(match[0].length) };
        }
    }

    // Default delimiters: comma or newline
    return { delimiter: /,|\n/, rest: input };
}

// Returns an array of negative numbers from the input array
function findNegatives(numbers) {
    return numbers.filter(n => Number(n) < 0);
}

// Filters out numbers greater than 1000 and converts strings to numbers
function filterValidNumbers(numbers) {
    return numbers.map(Number).filter(num => num <= 1000);
}

// Sums an array of numbers
function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Main Add function: parses input, checks for negatives, filters, and sums
function Add(input) {

    if (!input) return 0;
    const { delimiter, rest } = parseDelimiter(input);
    const parts = rest.split(delimiter);
    const negatives = findNegatives(parts);
    if (negatives.length > 0) {
        throw new Error('negative numbers not allowed ' + negatives.join(',')); // Throw if any negatives found
    }
    const validNumbers = filterValidNumbers(parts); 
    
    return sumNumbers(validNumbers); 
}

module.exports = Add;