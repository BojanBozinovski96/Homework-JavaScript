let year = prompt("Enter your birth year:");

let parsedInput = parseInt(year);

if(!Number.isNaN(parsedInput)){
    if ((year - 4) % 12 === 0) {
        alert("Rat")
        
    } else if  ((year - 4) % 12 === 1){
        console.log("Ox") 
    } else if  ((year - 4) % 12 === 2){
        console.log("Tiger") 
    } else if  ((year - 4) % 12 === 3){
        console.log("Rabbit") 
    } else if  ((year - 4) % 12 === 4){
        console.log("Dragon") 
    } else if  ((year - 4) % 12 === 5){
        console.log("Snake") 
    } else if  ((year - 4) % 12 === 6){
        console.log("Horse") 
    } else if  ((year - 4) % 12 === 7){
        console.log("Goat") 
    } else if  ((year - 4) % 12 === 8){
        console.log("Monkey") 
    } else if  ((year - 4) % 12 === 9){
        console.log("Rooster") 
    } else if  ((year - 4) % 12 === 10){
        console.log("Dog") 
    } else if  ((year - 4) % 12 === 11){
        console.log("Pig") 
} 
    

}

 else {console.log("Not valid input")

 }
