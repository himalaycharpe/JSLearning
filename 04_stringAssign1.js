// var hobby1 = "Sweaming";
// var hobby2 = "Bike Riding";
// var hobby3 = "Playing Cricket";

// function stringBasics() {
//     console.log("My Dream Company name:  Emerson Innovation Center");
//     console.log("-------------------------------------------");

//     console.log("My Hobbies: ",hobby1,",",hobby2,",",hobby3);
//     console.log("total sum of hobby1 char: ",hobby1.length);
//     console.log("total sum of hobby1 char: ",hobby2.length);
//     console.log("total sum of hobby1 char: ",hobby3.length);

//     var sum = hobby1.length + hobby2.length + hobby3.length;
//     console.log("total sum of character available is: ",sum);
// }
// stringBasics();



// function stringBasics() {
//     console.log("My Dream Company name:  Emerson Innovation Center");
//     console.log("-------------------------------------------");

//     var hobby = "Sweaming, Bike Riding, Playing Cricket";
//     var splitResult = hobby.split("");
//     console.log(splitResult);
//     console.log("Total words: ", splitResult.length);
// }
// stringBasics();

let str = " hello sir";

 var reverse='';
for(let i=str.length-1; i>=0; i--){
       let element = str.charAt(i);
       reverse = reverse + element;
       
}console.log(reverse)

const reversestr = str.split('').reverse().join('');
console.log(reversestr);

const  obj1 = {
    name: 'Ram'
}

const obj2 = {
    age: 27
}
const combineObject = { ...obj1, ...obj2}
console.log(combineObject);


//   const summ = obj1.assign({}, obj2)
//   console.log(summ);

const array1 = [ 1,2,3]
const array2 = [5,6]

const newArray = [...array1, ...array2];
console.log(newArray);  














