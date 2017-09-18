"US Phone number validator"

Language: JavaScript 


        ECMAScript 2015 (ES6) is used in this library, which is not fully supported in the old browsers, Please use Babel to transpile the code to ES5.

Time:
        20 Minutes to solve the problem
        2 hours to test, debug and optimize the code 

validation rules
        Phone number must be 10 digits 
        The 1st and the 4th digits must not be 0 or 1
        The key code could be either ‘+1’ or ‘1’  
        Spaces are allowed 
        Expected formats:
        (xxx) xxx xxxx
        (xxx)-xxx-xxxx
        xxx-xxx-xxxx
        10 digits without hyphens and parentheses 
 
Other preferred ways to solve the problem:
        Jquery validation plugin ( https://jqueryvalidation.org/phoneUS-method/ ) 
        NPM phone package ( https://www.npmjs.com/package/phone ) 

References:
         MDN 
         Stack Overflow
	

Code description: 
	
 validatePhoneNumber function takes in String as an argument,
	    It makes a copy of the input after removing the spaces and the key code 
	    by calling ‘removeSpacesAndKeyCode’ function (see 2).
	    After creating an array of the new string characters I declare 
        2 constants that hold boolean values based on the parentheses certain positions.
        If “openParentheses” and “closeParentheses” variables are truthy the parentheses will be removed.
		The hyphens will be removed if exist by calling removeHyphenFormat function
        (see 3) which won’t be invoked if there are no hyphens. 
        And then validatePhoneNumber returns validateDigits (see 4) function’s returned 
        value     


removeSpacesAndKeyCode: 
        The purpose of writing this function is to remove spaces and valid key codes if exist, to make the validation process easier.
        First it coerces its only argument to be a String and replaces spaces globally  with empty Strings. 
        second, it checks if the phone number starts with “+1” or “1” if so, it will be removed.
        And then it returns the String.

removeHyphenFormat:
		It has an array of hyphens expected positions (indexes) 
        Based on the correct format,
        The function loops throw it and remove hyphens if exist and returns an array.

        The reason behind having an array of indexes is to make the function more 
        dynamic to any changes in the format. 

validateDigits:
		This function has two arrays “numbers” & “indexes”, if one of the numbers is
        located at one of the indexes it will return false.
        It also checks if one of the digits is not a number, and the length of the string.

        “Array.prototype.some() method tests whether at-least one element in the array    
        passes the test implemented by the provided function” - MDN
		
		some() method is used here, to prevent the loop from being executed if one of 
        the elements fells the test

