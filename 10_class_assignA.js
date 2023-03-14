console.log("------------------1-----------------------------------");

class Vehicle {
    carName
    carColor
    carMileage
    carengine
    carPrice

    constructor(carName, carColor, carMileage, carengine, carPrice) {
        this.carName = carName;
        this.carColor = carColor;
        this.carMileage = carMileage;
        this.carengine = carengine;
        this.carPrice = carPrice;
    }
}
const tata = new Vehicle("Nexon", "Black", "15", "diesel", 1800800);
console.log(tata);
const maruti = new Vehicle("Kawasaki", "Green", "24", "diesel", 1505000);
console.log(maruti);
const kia = new Vehicle("Seltos", "Black", "20", "Petrol", 1052000);
console.log(kia);
const honda = new Vehicle("Hondacity", "white", "17", "Petrol", 1500000);
console.log(honda);
const mahindra = new Vehicle("Fortuner", "white", "15", "diesel", 1705000);
console.log(mahindra);
console.log("-----------------------------------------------------------------------");

const arrayOfVehicle = [tata, maruti, kia, honda, mahindra];

for (let index = 0; index < arrayOfVehicle.length; index++) {
    const result = arrayOfVehicle[index];
    //console.log(result);
    console.log(`Vehicle-Details: ${result.carName}, ${result.carColor}, ${result.carMileage}, ${result.carengine}, ${result.carPrice}`);
}

console.log("------------------2---------------------------------------------------");

class College {
    constructor(Name, city, id, course) {
        this.Name = Name;
        this.city = city;
        this.id = id;
        this.course = course;
    }
}
const engineering = new College("SBJITMR", "Fetri", 1234, "BE");
console.log(engineering);
const medical = new College("YCC", "NAGPUR", 8769, "BTech");
console.log(medical);
const architect = new College("Jhulelal", "NAGPUR", 5643, "ARCHITECT");
console.log(architect);
const law = new College("Anjuman", "NAGPUR", 9087, "Diploma");
console.log(law);

console.log("----------------------3-------------------------------------------------");

function traverseObject(CollegeDetails) {
    //console.log(College);

    for (const key in CollegeDetails) {

        if (Object.hasOwnProperty.call(CollegeDetails, key)) {
            const element = CollegeDetails[key];
            console.log(`College-${key}: ${element}`);
            //console.log(`${element.name}, ${element.city}, ${element.id}, ${element.course}`);
        }
    }
}
traverseObject(engineering);
console.log("----------------------------------------------------------------------");
traverseObject(medical);
console.log("------------------------------------------------------------------------------");
traverseObject(architect);
console.log("----------------------------------------------------------------------------------------");
traverseObject(law);


console.log("------------------4--------------------------------------------------");
const number = 11;
console.log(`The Given Number Is:${number}`);
if (number % 2 == 0) {
    console.log(`${number}`);
    console.log(`The Number Is Not Prime`);
} else {
    console.log(`The Given Number Is Prime`);
}
console.log("----------------------------------------------------------");