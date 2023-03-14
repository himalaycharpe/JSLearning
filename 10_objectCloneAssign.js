console.log("-------------------------------------------step-1--------------------------------------------");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Given Array: ${arrayNums}`);
 const newArray = arrayNums;
 newArray.push(55, 66);
 console.log(`Shallow Clone: ${newArray}`);

 console.log("-------------------------------------------step-2-----------------------------------------");
  const cloneArray = [...arrayNums]
  cloneArray.push(10, 25);
  console.log(`Deep clone using spread operator: ${cloneArray}`);

  const arrayEven = [,2, 30, 14, 8];
  const clonedArray = [...arrayEven]
  console.log("-------------Merging an array----------------step-3------------------------------------------------------");
  const mergedArray = arrayNums + arrayEven
  console.log(mergedArray);
  

  const employee_info ={
    emp_id: 27,
    emp_name: "John Doe",
    Salary: {
        july_month: "40,0000INR",
        aug_month:"50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        Locality:{
            colony: "OM Vrindhavan Society",
            street: "Kanch Pokli, 431202",
        },
        city:"Nagpur",
        state:"maharashtra",
        country:"India",
    },
    mobiles: ["91 8600 3456 88", "1800-4567 32", "+91-90965678 77"]
  }
  console.log("-----------------------------------------------step-5------------------------------------------------");
  console.log(employee_info.address);
  console.log("--------------------------------------------------------------------------------------------------");
  console.log(employee_info.mobiles);
  
  console.log("------------------------------------------------step-6------------------------------------------------");
  
  const newSalary = JSON.parse(JSON.stringify(employee_info));
  newSalary.Salary.july_month = "80k";
  console.log(`Original Value: ${employee_info.Salary.july_month}`);
  console.log(`Updated Value: ${newSalary.Salary.july_month}`);

  const newCountry = JSON.parse(JSON.stringify(employee_info));
  newCountry.address.country = "United Kingdom";
  console.log(`Original value: ${employee_info.address.country}`);
  console.log(`Updated value: ${newCountry.address.country}`)