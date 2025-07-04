// String Calculator supporting custom delimiters and negative number validation

function parseDelimiter(input) {
    if (input.startsWith('//')) {
        const match = input.match(/^\/\/(.+)\n/);
        if (match) {
            // Escape regex special characters in delimiter
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

function sumNumbers(numbers) {
    return numbers.map(Number).reduce((sum, num) => sum + num, 0);
}

function Add(input) {
    if (!input) return 0;
    const { delimiter, rest } = parseDelimiter(input);
    const parts = rest.split(delimiter);
    const negatives = findNegatives(parts);
    if (negatives.length > 0) {
        throw new Error('negative numbers not allowed ' + negatives.join(','));
    }
    return sumNumbers(parts);
}

module.exports = Add;