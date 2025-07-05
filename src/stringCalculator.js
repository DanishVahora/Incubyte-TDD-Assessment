// String Calculator supporting custom delimiters, negative number validation, and ignoring numbers > 1000

function parseDelimiter(input) {
    // Multi-character delimiter: //[delimiter]\n
    if (input.startsWith('//[')) {
        const match = input.match(/^\/\/(\[.+\])\n/);
        if (match) {
            // Remove brackets and escape regex special characters
            const rawDelimiter = match[1].slice(1, -1);
            const escaped = rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return { delimiter: new RegExp(escaped), rest: input.slice(match[0].length) };
        }
    }
    // Single-character delimiter: //delimiter\n
    if (input.startsWith('//')) {
        const match = input.match(/^\/\/(.+)\n/);
        if (match) {
            const escaped = match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return { delimiter: new RegExp(escaped), rest: input.slice(match[0].length) };
        }
    }
    // Default delimiters: comma or newline
    return { delimiter: /,|\n/, rest: input };
}

function findNegatives(numbers) {
    return numbers.filter(n => Number(n) < 0);
}

function filterValidNumbers(numbers) {
    // Only include numbers <= 1000
    return numbers.map(Number).filter(num => num <= 1000);
}

function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function Add(input) {
    if (!input) return 0;
    const { delimiter, rest } = parseDelimiter(input);
    const parts = rest.split(delimiter);
    const negatives = findNegatives(parts);
    if (negatives.length > 0) {
        throw new Error('negative numbers not allowed ' + negatives.join(','));
    }
    const validNumbers = filterValidNumbers(parts);
    return sumNumbers(validNumbers);
}

module.exports = Add;