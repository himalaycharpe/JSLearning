class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipto");
const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(75,"Mahesh", "HR", 85000, "Infy");


const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

console.log("-----------TCS Emloyee Details ------------------------");
array_employess.forEach(element => {
    if(element.emp_company == "TCS"){
       console.log(`Emp Name: ${element.emp_name}, Company: ${element.emp_company}`);
    }
});

console.log("----------Employees Sallary greater than 50000 ------------------------");
array_employess.forEach(element => {
    if(element.emp_salary > 50000){
        console.log(`Emp Id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);

    }
});

console.log("----------------------------------------------------------------------------------------------");
let sum = 0;
array_employess.forEach((element) => {
        sum = sum + element.emp_salary;
});
console.log("sum of all employees sallary: ",sum);
console.log("-------------------------------------------------------------------------------------------------");

const avg = sum/7
console.log("AVG Sallary ",avg);
console.log("-------------------------------------------------------------------------------------------------");

console.log("----------Employees Sallary greater than 75000 from IT || HR------------------------");
array_employess.forEach(element => {
    if (element.emp_dept == "IT" || "HR") {
        if(element.emp_salary >= 75000){
            console.log(`Emp Id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);

        }
    }
   
});