

class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");

let arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi];

console.log(`Employees from TCS:`);
var empCompany = arrayEmployee.filter((employee) => {
    return employee.empCompany == "TCS";
});
empCompany.forEach((employee) => {
    console.log(`Employee Name: ${employee.empName}  and Company Name: ${employee.empCompany}`);
});


console.log(`------------------------------------------------------------`);
const empSalary = arrayEmployee.filter((employee) => {
    return employee.empCompany == "Wipro"
});

let totalSalary = 0;
empSalary.forEach((element) => {
    totalSalary = totalSalary + element.empSalary;
});
const avg = totalSalary / empSalary.length
console.log(`Average salary of Employees from "Wipro" : ${avg}`);


console.log(`------------------------------------------------------------`);
const empSalarys = arrayEmployee.filter((employee) => {
    return (employee.empCompany == "Wipro" || employee.empCompany == "Infosys")
});
let totalSalarys = 0;
empSalarys.forEach((element) => {
    totalSalarys = totalSalarys + element.empSalary;
});
const avgs = totalSalarys / empSalarys.length
console.log(`Average salary of Employees from "Wipro" and "Infosys : ${avgs}`);

// const a = array_employess.sort((emp1, emp2) =>{
//      return emp1.emp_id > emp2.emp_id ?  -1 : 1 ;
// });
// console.log(a);
