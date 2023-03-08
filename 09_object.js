let student = {
    firstName: "Himslsy", //keys and values
    lastName: "Charpe",
    isWorking: true,
    age: 26,
    collegeName: "SBJITMR",       // key is always string
    id: 1011234
};

console.log(student);
console.table(student);
console.log(typeof student);
//. dot notation
console.log(student.firstName);
// []  notation
console.log(student["lastName"]);

//update property 
student.collegeName = "COEP PUNE";

//add new property city ="mumbai"
student.city = "Mumbai";
student.country = "India";
//delete property
delete student.isWorking;
console.table(student);

//Empty object
let teacher = {};
//add to empty 
teacher.name = "hey yo ";
console.table(teacher);

const array = [];
array[0] = 12;
console.log(array);
