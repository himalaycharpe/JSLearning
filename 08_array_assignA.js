
var arraySeasonalFruits = ["Banana","Orang","Apple","Mango","Water Melon"];
console.log(arraySeasonalFruits);

const valueAtIndex = arraySeasonalFruits[0];

console.log("----1---------");
console.log(`Value at index 0 is: ${valueAtIndex}`);
const valueAtIndexLast = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`Value at Last index  is: ${valueAtIndexLast}`);

console.log("----2---------");
console.log("Before adding element: ",arraySeasonalFruits);
arraySeasonalFruits.push("Papaya");
console.log("After Element Added at Last :",arraySeasonalFruits);

console.log("----3---------");
console.log("Array is: ",arraySeasonalFruits);
arraySeasonalFruits.splice(3,1)
console.log("After Removing Mango from Array",arraySeasonalFruits);

console.log("-----4--------");
console.log("Array is: ",arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple")
console.log("Element added at Last in Array",arraySeasonalFruits);

console.log("-----5--------");
console.log("Array is: ",arraySeasonalFruits);
arraySeasonalFruits.splice(3, 0,"Dragon fruit")
console.log("Insert Element before Water Melon",arraySeasonalFruits);

console.log("-----6--------");
console.log("Array is: ",arraySeasonalFruits);
arraySeasonalFruits.splice(1, 1,"Kiwi")
console.log("Replace element Orange with Kiwi",arraySeasonalFruits);

console.log("----7---------");
console.log("Array is: ",arraySeasonalFruits);
const subArray = arraySeasonalFruits.slice(1,4)
console.log("Element from 1 to 4th index",subArray);

console.log("----8---------");
console.log("Array is: ",arraySeasonalFruits);
const last = arraySeasonalFruits.slice(4,7)
console.log(" last 3 element ",last);

//console.log(arraySeasonalFruits.length-3);


