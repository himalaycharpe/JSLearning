// WAP to print numbers from 0 to 10
var index=0; // initialization
while (index<=10) { // condition
    console.log(index);
    index++; // Update Expression
}
///////////////////
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0;
while (index<arrayOfNumbers.length) {
    const element = arrayOfNumbers[index];
    console.log(element);
    index++;
}
console.log("Even numbers");
const arrayOfNumber = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumber.length) { // condition
    const element = arrayOfNumber[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}