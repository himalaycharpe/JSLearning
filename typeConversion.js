 //implicit conversion to string

var result;    //numeric string used with + given string


result = '3' + 2;
console.log(result);  //"32"

result = '3' + true ;
console.log(result);  //"3true"

result = '3' + undefined;
console.log(result);    //"3undefined"

result = '3' + null;
console.log(result);   //"3null"
console.log("------------");

//implicit boolean conversion to number
   
var result;      // if boolean is used, true -- 1, false -- 0 

result = '4' - true;
console.log(result);  //3

result = 4 + true;
console.log(result);   // 5

result = 4 + false;
console.log(result);   // 4
console.log("---------------");

//implcite atring conversion to number 

var result;      // numeric string used with -  /    *  results number type 

result = '4' - '2';    // 2
console.log(result);  

result = '4' - 2 ;   // 2
console.log(result);

result = '4' * 2;
console.log(result);  //8

result = '4' / 2 ;    //2
console.log(result);
console.log("---------------------");

//undefined used with number, boolean , numm  given NaN

var result;   //Arithmatic operation of undefined with number, boolean or null given NaN

result = 4 - undefined;    // NaN
console.log(result);  

result = 4 - undefined ;   // NaN
console.log(result);

result = true + undefined;
console.log(result);        // NaN

result = null / undefined ;    // NaN
console.log(result);
console.log("---------------------");

//explicit conversion : convert numbers ,srings & boolean value to number
// in that case we use number();

// string to number 
result = Number('324');
console.log(result);

result = Number(324e-1);
console.log(result);

//boolean to number
result = Number(true);
console.log(result);

result = Number(false);
console.log(result);


