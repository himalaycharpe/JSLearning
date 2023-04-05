
console.log(`===== Arithmetic Operator =====`);
var num1 = 10;
var num2 = 2;

var result = num1 + num2;  
console.log(`Addition is:  ${result}`);

result = num1 - num2; 
console.log(`Subtraction is ${result}`);

result = num1 * num2; 
console.log(`Multiplication is ${result}`);

result = num1 ** num2; 
console.log(`Exponential is ${result}`);

//     10**2 = 10 * 10 * 10;
//     10**3 = 10 * 10 * 10* 10;

result = num1 / 3; 
console.log(` Division is ${result} `); 

result = num1 % 3; // Modulus 
console.log(` Reminder is ${result} `);

var num = 10;  // Compound  addition +=
num+=20;  // num = num + 20 
console.log(`Compound addition += ${num}`);

console.log(`Caparison operators `); 
var num3 = "10"; 
var num4 = 10; 
console.log(num3==num4); // 10==10     //implicit conversion /string convert to number and compare
console.log(num3===num4);       //false       //  strict comparision

var marks = 35;
console.log(marks >= 35);  // 

var marks = 70;           //ternery operator 
var result = marks>= 60 ? "allow him for interview" : "dont allow ";
console.log(result);

var age = 20;
var r = age>=20 ? true : false;
console.log(r);

console.log("even or odd");
var myNumber = 7;
var result = myNumber%2==0 ? "EVEN" : "ODD";
console.log(result);



function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);