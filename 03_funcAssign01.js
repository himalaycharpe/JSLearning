console.log("no arguments and no return type");

function detail() {
    console.log("my name: Himalay Charpe");
    console.log("my full name: Himalay Chandrashekhar Charpe");
}
detail();

console.log("------------------------------------");

function personalDetails(firstName, lastName, collegeName){
    console.log("personal details:",firstName,lastName,collegeName);
}
personalDetails("Himalay", "Charpe", "SBJITMR");

console.log("------------------------------------");

var num1;
var num2;

function swapValueDude(name1, name2){
    console.log("before swap: ",name1,name2);
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log("after swap: ",name1,name2);
}
swapValueDude("Virat", "Anushka");
swapValueDude(1000, 2000);

console.log("-----------------------------------------");

function addThreeValue(num1, num2, num3){
    var sum = num1 + num2 + num3;
    return sum;
}
var add = addThreeValue(10, 23, 600, 40);
var add1 = addThreeValue("Hello"," Good"," Morning");
console.log(add);
console.log(add1);
