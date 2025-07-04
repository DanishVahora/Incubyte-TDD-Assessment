const Add = require('../src/stringCalculator');

describe('String Calculator', () => {

    test('should return 0 for an empty string', () => {
        expect(Add('')).toBe(0); // Test case passes now
    });

    test('should return a number for a single number input', () => {
        expect(Add('1')).toBe(1); // Failing test case
    });
});