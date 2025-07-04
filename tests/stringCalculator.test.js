const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    // Test case: Verify that an empty string returns 0
    test('should return 0 for an empty string', () => {
        expect(Add('')).toBe(0); 
    });
});