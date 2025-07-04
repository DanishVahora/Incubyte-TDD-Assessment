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


});

