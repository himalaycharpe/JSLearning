var num = 10;

console.log("Start");
if (num > 0) {
    console.log("value is positive", num);
}
console.log("End");
console.log("--------------------");

var ageForVote = 18;
if (ageForVote >= 18) {

    console.log("you are eligible for voting ");
    console.log(`Age is: ${ageForVote}`);
}
console.log("End of next if block");
console.log("---------------------");

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "EVEN";
    }
    if (num % 2 != 0) {
        return "ODD";
    }

}
var result = checkEvenOdd(45);
console.log(`given number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`given number 70 is ${result}`);
console.log("--------------------------");

var num1 = 5;
if (num > 0) {
    console.log(`the number ${num1} is positive`);
}
else {
    console.log(`the number ${num1} is negative`);
}
console.log("-----------------------------");
/*
function maleMarriageEligibility(gender, age, boyName) {
    if (gender == "Male" && age >= 21) {                            // AND operator
        var str = `Hey ${boyName} you are eligible for marriage..............`;
        return str;
    } else {
        var str = `${boyName} you are not eligible for marriage............`;
        return str;
    }
}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);
console.log("-----------------------------");  */

function maleMarriageEligibility(gender, age, boyName) {
    if (age < 0 || age == undefined) {
        return `Hey ${boyName} your age ${age} is not valid`;
    }
    if (gender == "Male" && age >= 21) {
        var str = `Hey ${boyName} you are eligible for marriage`;
        return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }
}
var result = maleMarriageEligibility("Male", 21, "Billgates");
console.log(result);

var result = maleMarriageEligibility("Male", -30, "Shivam");
console.log(result);
var result = maleMarriageEligibility("Male", undefined, "Raju");
console.log(result);