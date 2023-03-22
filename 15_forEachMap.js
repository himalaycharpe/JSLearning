const mapOfNumbers = new Map();
mapOfNumbers.set("One", 1);
mapOfNumbers.set("Two", 2);
mapOfNumbers.set("Three", 3);
mapOfNumbers.set("One", 11);
mapOfNumbers.set("Five", 5);
mapOfNumbers.set("Six", 6);

mapOfNumbers.forEach((key, value) => {
    console.log(key, value);
});


const array = [3, 4, 5, 6, 1];
           // [5, 6, 7, 8, 3];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+2)
} );
console.log(arrayTransformed);

console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element + 2;
} )
console.log(arrayNew);



const arrayOfNames = [ "Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNamesTransforned = arrayOfNames.map((element) => {
    return element.length;
});
console.log(arrayNamesTransforned);