

let myArray = [
    "Hello ",
    " there",
    " students",
    " of",
    " SEDC",
    "!"
];
let sum = myArrayOfStrings(myArray);
console.log(sum);




function myArrayOfStrings(input){
    
    let result = ""
    for(let i = 0;i < input.length;i++){
        result += input[i];
        
    }
    
    return result;
    
}

