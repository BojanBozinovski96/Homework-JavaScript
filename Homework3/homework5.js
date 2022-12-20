let myArray = [2, 5, 6, 12, 56, 88];

let sumOfMax = maxNum(myArray);
console.log(sumOfMax);
let sumOfMin = minNum(myArray);
console.log(sumOfMin);



function maxNum(){
    let max = myArray[0];
    for(let i = 0;i < myArray.length;i++ ){
        if(myArray[i] > max){
            max = myArray[i];
        }
    }
    return max;
}

function minNum(){
    let min = myArray[0];
    for(let i = 0;i < myArray.length;i++ ){
        if(myArray[i] < min){
            min = myArray[i];
        }
    }
    return min;
}
