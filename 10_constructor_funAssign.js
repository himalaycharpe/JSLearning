console.log("---------------------------------------------------step-1---------------------------------------------------------------");

function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.show = function(){
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, ifscCode: ${this.ifscCode}, BranchCode: ${this.branchCode}`);
    }
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

const yesBank =new Bank("yesBank Main Branch Nagpur","Nagpur","yes645786",65789);
yesBank.show();
const sbiBank =new Bank("sbiBank Main Branch Bhandara","Bhandara","sbiBank",91234);
sbiBank.show();
const mahBank =new Bank("mahBank Main Branch Pune","Pune","mahBank",65474);
mahBank.show();
const axisBank =new Bank("axisBank Main Branch Mumbai","Mumbai","axisBank",09876);
axisBank.show();
console.log("---------------------------------------------------step-2----------------------------------------------------------------------");

console.log(`Open Time Of sbiBank: ${sbiBank.openTime} And Close Time Of sbiBank: ${sbiBank.closeTime}`);

console.log(`Bank Name: ${axisBank.bankName} And Close Time: ${yesBank.closeTime}`);

console.log(`Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);