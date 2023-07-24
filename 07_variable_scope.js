//var      //redeclare that
//let       cant redeclare,  block scope
//const    pie , constatnt ,fix for all  ,update modify dont allow,block scop, cant redeclair

//var keyword---having function scope means  access witin function not outside

//let keyword --- having block scope..    not outside

var firstName;  //Variable Declaration
firstName = "Virat";  //Variable Initialization

var lastName = "Kohli";  //Variable declaration and initialization
firstName = "King Kohli"; //Variable update

var firstName;  //Variable re-declaration
console.log(firstName);

let city;  //Variable declaration
city = "Delhi";  //Variable Initialization

//let city = "Mumbai"; //Not allowed Variable Re-declaration

const PI = 3.14;
//PI = 3.56;  // Update or modify not allowed
console.log(PI);
//const PI = 3.1412;  // Re-declaration of const variable is not allowed

var num = 10;
if(num==10){
    var greet = "success";
}
console.log(greet);