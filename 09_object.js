let student = {
    firstName: "Himslsy", //keys and values
    lastName: "Charpe",
    isWorking: true,
    age: 26,
    collegeName: "SBJITMR",       // key is always string
    id: 1011234,
    address: {
        street: "ABC",
        city: "pune",
        PIN: 431204
    },
    school: "podar school",
    friends: ["bill", "stew", "elon"],            //array
    show: function () {                           // func expr
        console.log("i am show() function");
    },
    addressDetails: function () {           ////this is a reference variable which point to the current object
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
    }
};

let resultAddress = student.addressDetails();
console.log(resultAddress);

student.show();

console.log(student.friends);
console.log(student.friends[student.friends.length - 1]);
console.log(student.address.city);


student.marks = {        //adding property in student object
    math: 80,
    physics: 60,
    drawing: 70
}
student.address.PIN = 440030;
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
