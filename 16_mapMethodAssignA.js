const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Array: `,arrayNumbers);

const newArray = [];
    const arrayNew = arrayNumbers.map((element) =>{
     return element+10;
    });
console.log(`Array after adding 10: `, arrayNew);
console.log(`---------------------------------------------------------------------------`);

const squareArray = arrayNumbers.map((element)=>{
    return element**2;                                 // elemrnt*element 
} )
console.log(`Square of Array Numbers : `, squareArray);

console.log(`----------------------------------------------------------------------------------------`);

const indexValue = arrayNumbers.map((element, index)=>{
    return element + index;
})
console.log(`Add index Value: `,indexValue);