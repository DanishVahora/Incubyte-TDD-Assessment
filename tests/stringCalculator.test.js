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

    // Step-4: Test cases for custom delimiters 
    test('should support various custom delimiters', () => {

        expect(Add('//;\n1;2')).toBe(3); //Single-character custom delimiter

        expect(Add('//|\n4|5|6')).toBe(15); //Single-character custom delimiter with more numbers

        expect(Add('//sep\n7sep8sep9')).toBe(24); //Multi-character custom delimiter

        expect(Add('//x\n10')).toBe(10); //Custom delimiter with only one number

        expect(Add('//-\n-1-2-3')).toBe(6); //Custom delimiter with negative numbers

        expect(Add('//a\n0a1a2a3')).toBe(6); //Custom delimiter with numbers and zero

        expect(Add('// \n1 2 3')).toBe(6);//Custom delimiter with numbers and spaces as delimiter
    });


    // Step-5: Test cases for negative numbers (should throw exceptions)
    test('should throw for various negative number scenarios', () => {

        expect(() => Add('1,-2,3')).toThrow('negative numbers not allowed -2'); // Single negative number

        expect(() => Add('1,-2,-3,4')).toThrow('negative numbers not allowed -2,-3'); // Multiple negative numbers

        expect(() => Add('-1,-2,-3')).toThrow('negative numbers not allowed -1,-2,-3'); // All numbers negative

        expect(() => Add('//;\n1;-2;3')).toThrow('negative numbers not allowed -2'); // Negative number with custom delimiter

        expect(() => Add('//|\n-1|2|-3')).toThrow('negative numbers not allowed -1,-3'); // Multiple negative numbers with custom delimiter

        expect(() => Add('-5')).toThrow('negative numbers not allowed -5'); // Negative number as only input
    });


    // Step-6: Test cases for ignoring numbers bigger than 1000
    test('should ignore numbers greater than 1000 in various scenarios', () => {
        
        expect(Add('1001')).toBe(0); // Single number greater than 1000
        
        expect(Add('2,1000')).toBe(1002); // Numbers less than or equal to 1000
        
        expect(Add('2,1001,3')).toBe(5); // Mix of valid and ignored numbers
        
        expect(Add('1001,2000,3000')).toBe(0); // All numbers greater than 1000
        
        expect(Add('1000,1')).toBe(1001); // Number exactly 1000 (should be included)
       
        expect(Add('//;\n1;1001;2')).toBe(3); // Custom delimiter with numbers over 1000
        
        expect(Add('//|\n1001|2002|3003')).toBe(0); // Custom delimiter, all numbers over 1000
        
        expect(Add('//sep\n7sep1001sep9')).toBe(16); // Custom delimiter, mix
    });
    
    
    // Step-7: Failing test cases for multi-character delimiters (should fail until feature is implemented)
    test('should support single multi-character custom delimiter', () => {
        expect(Add('//[***]\n1***2***3')).toBe(6);
        expect(Add('//[abc]\n4abc5abc6')).toBe(15);
        expect(Add('//[xyz]\n7xyz8xyz9')).toBe(24);
    });

    // Step-7: Failing test cases for multi-character delimiter edge cases (Red phase)
    test('should fail for multi-character delimiter edge cases (Red phase)', () => {
        
        expect(Add('//[.*]\n1.*2.*3')).toBe(6); // Delimiter with special regex characters
        
        expect(Add('//[123]\n11231123')).toBe(2); // Delimiter with numbers
        
        expect(Add('//[   ]\n1   2   3')).toBe(6); // Delimiter with spaces
        
        expect(Add('//[;]\n1;2')).toBe(3); // Delimiter with only one character in brackets
    });

    // Step-7: Additional edge case tests for multi-character delimiters
    test('should handle more edge cases for multi-character delimiters', () => {
        
        expect(Add('//[ ]\n4 5 6')).toBe(15); // Delimiter is a single space
        
        expect(Add('//[\t]\n7\t8\t9')).toBe(24); //// Delimiter is a tab character
        
        expect(Add('//[+]\n1+2+3')).toBe(6); // Delimiter is a special regex char
        
        expect(Add('//[***!!!***]\n1***!!!***2***!!!***3')).toBe(6); // Delimiter is a long string of special chars
        
        expect(Add('//[1]\n2112')).toBe(4); // Delimiter is a number in brackets
        
        expect(Add('//[-1*2]\n3-1*24-1*25')).toBe(12); // Delimiter is a mix of numbers and special chars
        
        expect(() => Add('//[***]\n-1***2***-3')).toThrow('negative numbers not allowed -1,-3'); // Negative numbers with long delimiter
        
        expect(Add('//[***]\n1001***2***1002***3')).toBe(5); // Numbers > 1000 with long delimiter
    });


    // Step-8 & 9: Multiple single-character delimiters
    test('should support multiple single-character delimiters', () => {
        expect(Add('//[*][%]\n1*2%3')).toBe(6);
        expect(Add('//[;][,]\n4;5,6')).toBe(15);
    });
});
