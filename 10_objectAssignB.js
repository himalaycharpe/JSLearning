const bankSbi = {
    bankName: "State Bank",
    accountNo: 98765678967,
    ifscCode: "SBI654545",
    Branch: "State Bank Main Branch",
    
}
const bankLocation ={
    street:"mahal Road Nagpur",
    city:"Bhandara",
    pinCode:441905,
}

const rateOfInterest = {
    homeLoanInterest:12,
    personalLoanInterest:10,
    dueInterest:5,
}
 
// const cloned_bankSbi = Object.assign({},bankSbi);
// console.log(cloned_bankSbi);

const cloned_bankSbi = Object.assign({},bankSbi);
console.log(`Clone Object1 & Object2 Using Object.assign:step3----------------------------------------------------`);
console.table(cloned_bankSbi);

const bankDetail = {...bankSbi};
console.log(`Clone Object1 & Object2 Using Spread Operator:step3--------------------------------------------------`);
console.log(bankSbi, bankLocation);


const sbiDetails = Object.assign({},bankSbi, bankLocation, rateOfInterest);
console.log(`Merged Objects step1,step2,step4 in New Object:step5-------------------------------------------------`);
console.table(sbiDetails);

  console.log(`Traverse Merged object step6-----------------------------------------------------------------------`);
  for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
        
    }
  }