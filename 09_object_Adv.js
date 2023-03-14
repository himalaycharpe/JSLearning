const employee = {
    id: 124567,
    name: "Elon Musk",
    country: "US",
    city: "Silicon Valley"
}

console.log("-------im oerator------------");
const isIdAvailable = "id" in employee;
console.log(isIdAvailable);

console.log("-------object traversing------------");
for (const key in employee) {      //by using for in loop we traverse valuesb in a object 
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
    }
}
const keysOfEmployee = Object.keys(employee);     //array form   output 
console.log(keysOfEmployee);

const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);

const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);
console.log(entriesOfEmployee[0][0]);
console.log(entriesOfEmployee[0][1]);

console.log("-------------------");

const player = {
    fullName: "Virat Kohli",
    totalCenturies: 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed 
delete player.totalCenturies;// deleting property - Not allowed as object is freezed 
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed 
console.table(player);

const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
}
const address = {
    country: "US",
    city: "Silicon Valley",
    PIN: "QA2345"
}
 // First way 
 const mergedObject = Object.assign({}, student, address); 
 console.table(mergedObject); 
 
 // Second way 
 const newObject = {}; 
 Object.assign(newObject, student, address); 
 console.table(newObject); 
 
 // Third way 
 Object.assign(student, address); 
 console.table(student); 
 
 // Fourth way 
 Object.assign(address, student); 
 console.table(address);