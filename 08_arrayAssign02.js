const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);

console.log("1. Find the total elements available or length and log on console");
console.log("total no. of element available: ", arrayNumbers.length);

console.log("2. Log the first element and last element in arrayNumbers and log on console");
console.log("first element:", arrayNumbers[0]);
console.log("last element:", arrayNumbers.length - 1);

console.log("3. Log the thirst last element using length property and log on console");
const arrayThirdLast = arrayNumbers[arrayNumbers.length - 3];
console.log("last third number:", arrayThirdLast);


console.log("4. Find the all even numbers and log on console");
array = [];
for (let i = 0; i < arrayNumbers.length; i++) {
    const num = arrayNumbers[i];
    if (num % 2 == 0) {
        array.push(num);
    }
}console.log(`${array}`);



console.log("5. Find the odd numbers and log on console");
array = [];
for (let i = 0; i < arrayNumbers.length; i++) {
    const num = arrayNumbers[i];
    if (num % 2 != 0) {      //not equals
        array.push(num);
    }
}console.log(`${array}`);



console.log("6. Find all the even positioned elements from arrayNumbers, sum it and log on console ");
//const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
array = [];
let add = 0;
for (let i = 0; i < arrayNumbers.length; i = i + 2) {
    const numEven = arrayNumbers[i];
    array.push(numEven);
    add = add + numEven;
} console.log(array);
console.log(`sum of Even position element: ${add}`);



console.log("7. Find all the odd positioned elements from arrayNumbers, sum it and log on console");
array = [];
let sunOfOdd = 0;
for (let i = 1; i < arrayNumbers.length; i = i + 2) {   // index is 1 for odd no.
    const element = arrayNumbers[i]
    array.push(element);
    sunOfOdd = sunOfOdd + element;
} console.log(array);
console.log(`sum of Odd position element: ${sunOfOdd}`);



console.log("8. Find the sum of all elements from arrayNumbers, log on console");
let sumOfElements = 0
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  sumOfElements = sumOfElements + element
}
console.log(`Sum of All elements is : ${sumOfElements}`)



console.log("9. Find the numbers which are multiple of 5");
array = []
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index]
  if (element % 5 == 0) {
    array.push(element)
  }
}
console.log(array);

console.log("10. Is number 115 available in arrayNumbers ?");
console.log(`The result is  : ${arrayNumbers.includes(115)}`);

console.log("11. Is number 23 available in arrayNumbers ?");
console.log(`The result is  : ${arrayNumbers.includes(23)}`);

console.log("12. Insert numbers → 55, 66 before index 3 and log array on console");
arrayNumbers.splice(3, 0, 55, 66)
console.log(arrayNumbers);

console.log("13. Delete 3 elements starting from index 4 and log arrayNumbers on console");
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);