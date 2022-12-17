let userInput = prompt("Enter your age: ");
humanAgeCalculator(userInput);
dogAgeCalculator(userInput);









// Functions
function humanAgeCalculator(age) {
     let result = age * 7;
     console.log("Your human age is : " + result);
     return result;   
}



function dogAgeCalculator(age) {
    let result = age / 7;
    console.log("Your dog age is: " + result);
    return result; 
}



