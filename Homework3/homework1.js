// Homework 3/1
let myArray = [
"Bojan"
,"good"
,"playing foodball"];
let sum = tellStory(myArray);
console.log(sum);


function tellStory(input){
   
    let result = `This is ${input[0]}, I am feeling ${input[1]} and im going to ${input[2]}`;
    return result;
}


