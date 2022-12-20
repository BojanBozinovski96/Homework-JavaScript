

let firstName = ["Bob", "Jill","Gele"];

let lastName = ["Gregoty","Wurtz","Gelco"];

let fullName = [];


for(let i = 0;i < firstName.length;i++){
    let result = `${i + 1}. ${firstName[i]} ${lastName[i]}`;
    console.log(result);
    fullName.push(result);
}