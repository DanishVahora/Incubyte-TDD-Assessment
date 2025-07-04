// String Calculator supporting custom delimiters

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

function sumNumbers(numbers) {
    // Find all negative numbers
    const negatives = numbers.filter(n => Number(n) < 0);
    if (negatives.length > 0) {
        throw new Error('negative numbers not allowed ' + negatives.join(','));
    }
    return numbers.map(Number).reduce((sum, num) => sum + num, 0);
}

function Add(input) {
    if (!input) return 0;
    const { delimiter, rest } = parseDelimiter(input);
    return sumNumbers(rest.split(delimiter));
}

module.exports = Add;