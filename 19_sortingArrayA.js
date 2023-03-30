console.log(`----------------------------------Step-1----------------------------------------------------`);
const arrayrollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]

console.log(`Original Array:`,arrayrollNumbers);

const newArray = arrayrollNumbers.reverse();
console.log(`Reverse The Array:`,newArray);

console.log(`----------------------------------Step-2-----------------------------------------------------`);

newArray.sort();
console.log(`Sort The Array:`,newArray);

console.log(`----------------------------------Step-3-------------------------------------------------------`);

arrayrollNumbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(`Sort The Array in Ascending Order:`,arrayrollNumbers);

console.log(`----------------------------------Step-4-------------------------------------------------------`);

console.log(`Greatest Number From The Array:`,Math.max(...arrayrollNumbers));

console.log(`----------------------------------Step-5-------------------------------------------------------`);

console.log(`Smallest Number From The array:`,Math.min(...arrayrollNumbers));

console.log(`----------------------------------Step-6--------------------------------------------------------`);

const uniqueArray = new Set(newArray);
console.log(`Remove Duplicate From Array:`,uniqueArray)