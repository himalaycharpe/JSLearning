var sweety = "Sweety";
var cutie = "Cutie";

console.log("before swap:");
console.log(sweety,cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;

console.log("after swap:");
console.log(sweety,cutie);

console.log("------------------------------");

var num1 = 100;
var num2 = 200;
var num3 = 300;

console.log("before swap:");
console.log("values =" ,num1,num2,num3);

var temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;

console.log("after swap:");
console.log("values =",num1,num2,num3);
