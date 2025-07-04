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
        expect(Add('1\n2,3')).toBe(6); 
        expect(Add('4\n5\n6')).toBe(15);
        expect(Add('7,8\n9')).toBe(24);
        expect(Add('10\n11,12')).toBe(33);
    });
    
    // Step-4: Failing test cases for custom delimiters (should fail until feature is implemented)
    test('should support single-character custom delimiter ;', () => {
        expect(Add('//;\n1;2')).toBe(3);
    });
    test('should support single-character custom delimiter |', () => {
        expect(Add('//|\n4|5|6')).toBe(15);
    });
    test('should support multi-character custom delimiter sep', () => {
        expect(Add('//sep\n7sep8sep9')).toBe(24);
    });
});