const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumbers);

console.log("-1---------------------------------------------------------");
arrayNumbers.forEach((element, index) => {
    console.log(index,"__", element);
});

console.log("-2---------------------------------------------------------");
console.log("positive elements");
arrayNumbers.forEach((element) => {
    if(element > 0){
        console.log(element);
    }
}); 

console.log("-3---------------------------------------------------------");
console.log("Negative elements");
let array = [];
arrayNumbers.forEach((element) => {
    if(element < 0){
        array.push(element)
    }
}); 
console.log(array); 


console.log("-4---------------------------------------------------------");
console.log("Even  elements");
arrayNumbers.forEach((element) =>{
    if (element%2 == 0) {
        console.log(element);
    }
});


console.log("-5---------------------------------------------------------");
console.log("sum the element from arrayNumbers.....");
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(sum);

console.log("-5---------------------------------------------------------");
console.log("even index element in the array");
arrayNumbers.forEach((element, index) => {
    if (index%2 == 0) {
        console.log(element);
    }
});


