
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company; 
    }
}
const emp_anil = new Employee(22,"Anil", "IT", 5000, "TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000, "Wipto");
const emp_rishi = new Employee(55,"Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66,"Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77,"Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88,"Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(75,"Mahesh", "HR", 85000, "Infy");


const array_employess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];


console.log("1. Find all the employees working in ‘TCS’ and log only employee names and company name on console");
for (const Employee of array_employess) {
    if(Employee.emp_company == "TCS"){
        console.log(`Emp Name: ${Employee.emp_name}, Company: ${Employee.emp_company}`);
    }
}

console.log("------------------------------------------------------------------------------------------------------");
console.log("2. Find the ‘Finance’ department employees, log only department and employee name on console");

for (const Employee of array_employess) {
    if ((Employee.emp_dept== "Finance")) {
        console.log(`Emp Name: ${Employee.emp_name}, ${Employee.emp_dept}`);
    }
}
console.log("---------------------------------------------------------------------------------------------------------------------------");
console.log("3. Find the employees whose name starts with ‘R’ and complete employee details on console [ hint –> startsWith(“R“) ]");

for (const Employee of array_employess) {
    if(Employee.emp_name.startsWith('R')){
        console.log(`Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Dept Name: ${Employee.emp_dept},  Sallary: ${Employee.emp_salary}, Company: ${Employee.emp_company}`);
    }
}

console.log("---------------------------------------------------------------------------------------------------------------------------------");
console.log("4. Find the employees whose salary is greater than 75000, and emp name, company and salary on console");

for (const Employee of array_employess) {
    if ((Employee.emp_salary>= 75000)) {
        console.log(`Emp Name: ${Employee.emp_name},Sallary: ${Employee.emp_salary} ${Employee.emp_company}`);
    }
    
}
console.log("--------------------------------------------------------------------------------------------------------------");
console.log("5. Find the emp’s whose salary greater than or equal 50000 and from ‘IT’ department, log complete emp details on");
for (const Employee of array_employess) {
    if(Employee.emp_salary>=50000 && Employee.emp_dept=="IT"){
        console.log(`Emp id: ${Employee.emp_id}, Emp Name: ${Employee.emp_name}, Dept Name: ${Employee.emp_dept},  Sallary: ${Employee.emp_salary}, Company: ${Employee.emp_company}`);
    }
}
// [ Hint → if(emp.emp_salary>=50000 && emp.emp_dept==’IT’) inside for loop ]
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(" 6. find out all emp from INFY ");
for (const Employee of array_employess){
    const element = Employee;
    if(element.emp_company=="Infy")
    {
        console.log(`Emp Id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
    }
}