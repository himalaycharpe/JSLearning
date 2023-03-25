const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("Numbers which greater than 50 ");
const greaterNum = arrayNumbers.filter((element) => {
    return element > 50;
});
console.log(greaterNum);

console.log("Even Numbers ");
const evenNum = arrayNumbers.filter((element) => {
    return element%2 == 0;
});
console.log(evenNum);

console.log("Odd Numbers ");
const oddNum = arrayNumbers.filter((element) => {
    return element%2 != 0;
});
console.log(oddNum);

console.log("Numbers which are multiple of 5 ");
const multiplePfFive = arrayNumbers.filter((element) =>  element%5==0);
console.log(multiplePfFive);

console.log("Numbers in between 20 and 50 ");
const range = arrayNumbers.filter((element) => {
    return element > 20 && element <50;;
});
console.log(range);
