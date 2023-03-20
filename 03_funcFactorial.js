
function factorialOfNum(num){
    var factorial = 1;
    if(num == 0 || num == null || num == undefined ){
        return `Please enter valid value`
    }
    for (let index = num; index >=1; index--) {
         var number =(index) ;
        factorial = factorial * number;  
    }
    return factorial;
 }
 var result = factorialOfNum(5);
 console.log(`The Factorial Of "5" is :${result}`);
 var result = factorialOfNum(3);
 console.log(`The Factorial Of "3" is :${result}`);
 var result = factorialOfNum(null);
 console.log(`The Factorial Of "null" is :${result}`);
 var result = factorialOfNum(8);
 console.log(`The Factorial Of "8" is :${result}`);
 var result = factorialOfNum(undefined);
 console.log(`The Factorial Of "undefined" is :${result}`);
 var result = factorialOfNum(9);
 console.log(`The Factorial Of "9" is :${result}`);
 var result = factorialOfNum(0);
 console.log(`The Factorial Of "0" is :${result}`);



 console.log("-----------------------------------------------------------------------------");


 function factorialofWordsCount(str) {
    if (str == 0 || str == null || str == "") {
        return `Please enter valid value`;
    }

    var stringLength = str.split(" ");            
    console.log(`Total number of word available in given string is : ${stringLength.length}`);

    var factorial = 1;
    for (let index = stringLength.length; index >= 1; index--) {
        var stringLength = index;
        factorial = factorial * stringLength;
    }
    return factorial;
}
var result = factorialofWordsCount("Revision is the mother of Success");
console.log(`The factorial of 6 is: ${result}`);

var result = factorialofWordsCount("We never fail, We always learn");
console.log(`The factorial of 6 is: ${result}`);

var result = factorialofWordsCount("Akhil Bhaje");
console.log(`The factorial of 2 is:${result}`);

var result = factorialofWordsCount("");
console.log(`The factorial of "" is:${result}`);

var result = factorialofWordsCount(null);
console.log(`The factorial of null is: ${result}`);