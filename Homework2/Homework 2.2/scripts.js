let amount = prompt("Enter your amount: ");
let bankAccount = 200;

atmMachine(bankAccount, amount);



// Function for atmMachine 
function atmMachine(bankAccount,withdrawalAmount) {
    withdrawalAmount = parseInt(withdrawalAmount);
    if(Number.isNaN(withdrawalAmount)){
        console.log("Invalid amount input!");
        return;
    }
    if(bankAccount >= withdrawalAmount){
        let amountLeft = bankAccount - withdrawalAmount;
        console.log("Amount withdrawed: " + withdrawalAmount);
        console.log("The amount left: " + amountLeft)
    
    }else{
        console.log("Insuffincent funds!");
    }
}

