const Add = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(Add('')).toBe(0);
    });

    test('should return a number for a single number input', () => {
        expect(Add('1')).toBe(1);
    });

    test('should return the sum for two numbers', () => {
        expect(Add('1,2')).toBe(3); // Failing test case
    });
});