const Add = require('../src/stringCalculator');




describe('String Calculator', () => {


    // Step-0: Test case for empty string
    test('should return 0 for an empty string', () => {
        expect(Add('')).toBe(0);
    });


    // Step-1: Test case for single number input
    test('should return the same number for another single number input', () => {
        expect(Add('1')).toBe(1);
        expect(Add('42')).toBe(42);
    });

    // Step-1: Test case for two numbers
    test('should return the sum for two numbers', () => {
        expect(Add('1,2')).toBe(3);
        expect(Add('10,20')).toBe(30);
    });


    // Step-2: Test case for multiple numbers
    test('should return the sum for multiple numbers', () => {
        expect(Add('1,2,3,4,5')).toBe(15);
        expect(Add('6,7,8,9,10')).toBe(40);
    });


    // Step-3: Failing test case for new lines between numbers
    test('should handle new lines between numbers', () => {
        expect(Add('1\n2,3')).toBe(6); // Failing test case
    });
});







