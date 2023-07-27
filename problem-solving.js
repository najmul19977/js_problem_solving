//1.Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString (str){
    let newString = '';
    for (let i = str.length - 1; i>= 0; i--){
        newString += str[i];

    }
    return newString;
}
const string = "Hello World";
const result = reverseString(string);
//console.log(result);

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function addNumber (number){
    let newSum = 0;
    for (i =0; i<= number.length;i++){
        if(number[i]>=0){
            newSum += number[i];
            
        }
        
    }
    return newSum;
    
}
const number = [2, -5, 10, -3, 7];
const result1 = addNumber(number);
//console.log(result1);
//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator (num1,num2,operator){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;

    }
    else if(operator === "*"){
        return num1 * num2;
    }
    else if(operator ==="/"){
        return num1 / num2;

    }
}
const num1 = 16;
const num2 = 8;
const operator = "/";
const result3 = calculator(num1,num2,operator);
//console.log(result3); 


//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

  function generateRandomPassword (length){
    const uppercaseL= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseL = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const spacialCharacter = "!@#$%^&*()_+-=[]{}?/<>|";
    const allCharacters = uppercaseL +lowercaseL+number+spacialCharacter;
    let password = "";
    for(i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
  }
  const Length = 8;
  const randomPassword = generateRandomPassword(Length);
  //console.log(randomPassword);

 
//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondLowest(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    
    const differentArray = arr.filter((value, index, self) => self.indexOf(value) === index);
    //console.log(differentArray);
    const leng = arr.length;
    //console.log(leng-1);
  
    
    return differentArray[1];
  }
  
  const numbers = [10, 12,15, 8, 6, 4, 7,7,5, 5];
  const result4 = secondLowest(numbers);
  console.log(result4);
  
  