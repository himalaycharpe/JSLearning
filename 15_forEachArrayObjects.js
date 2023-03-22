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

const setOfEmployee = new Set();

setOfEmployee.add(emp_anil);
setOfEmployee.add(emp_radha);
setOfEmployee.add(emp_rishi);
setOfEmployee.add(emp_sonali);
setOfEmployee.add(emp_monika);
setOfEmployee.add(emp_vinay);
setOfEmployee.add(emp_mahi);

setOfEmployee.forEach(employee => {
    console.log(employee);
})

console.log("------------------------------------------------------------------------------------------");

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

console.log(" find employee whos name start with R ");
arrayEmployee.forEach((employee => {
    let emp_name = employee.emp_name;
    if(emp_name.startsWith("R")){
       console.log(employee);
    }
}))

console.log("--------------------------------------------------------");
let totalSallary = 0;
arrayEmployee.forEach(employee => {
    if (employee.emp_company == "Infy") {
        totalSallary = totalSallary + employee.emp_salary;
    }
})
console.log(totalSallary);
