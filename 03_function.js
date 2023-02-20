
var num1 = 100;
var num2 = 200;

var str1 = "sweety";
var str2 = "cutie";

function swapvalues(value1, value2) {  // var value1 = num1 ,var value2 = num2    // function defination
    console.log("before swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("after  swap: ", value1, value2);
    return "swapping variable succesfuly completed";
}
var swapResult = swapvalues(num1, num2);   // function call or function invoke
console.log(swapResult);

var swapResult = swapvalues(str1, str2)
console.log(swapResult);

console.log("---------------------------------------------------------------");

function display(num) {
    console.log(num);        //100
    var result = typeof num;  //number
    return result;
}
var displayResult = display(100);
console.log(displayResult);

console.log("-------------------------------------------------------------------");

//function with no argument and no return value
function showFullName() {
    console.log("my fullname is: Himalay Charpe");
}
showFullName();  // function call or invite


//function with argument and no return value
function showAge(age) {
    console.log("my age is: ", age);
}
showAge(27);

//function with no argument and return value
function fullName() {
    var name = "Himalay Charpe"
    return name;
}
var fName = fullName();
console.log(fName);

//function with argument and return value
function sumOfNumbers(num1, num2, num3, ) {
    var sum = num1 + num2 + num3;
    return sum;
}
var SumResult = sumOfNumbers(10, 45, 79.56);
console.log(SumResult);
