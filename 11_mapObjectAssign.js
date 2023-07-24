
console.log("---------------------------Create Object using class Bank--------------------------------------------------");
class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}
const axisbank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisbank);
const sbibank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
console.log(sbibank);
const icici_bank = new Bank("ICICI Bank", "CA Road", "32454567554", "ICICI34543", 11.5);
console.log(icici_bank);
const kotak_bank = new Bank("KOTAK Bank", "Hingna Road", "98098909867", "KOTAK234432", 13.5);
console.log(kotak_bank);
const hdfc_bank = new Bank("HDFC Bank", "Surat", "62514812345", "HDFC0004598", 9.75 );
console.log(hdfc_bank);
const panjab_bank = new Bank("PANJAB Bank", "Mumbai", "5676548976", "PANJA0004598", 14.75 );
console.log(panjab_bank);


console.log("------------------------------------------------Creating Map----------------------------------------------------------------------");
const mapOfBank = new Map();
mapOfBank.set("4597863258", axisbank);
mapOfBank.set("62514897564", sbibank);
mapOfBank.set("32454567554", icici_bank);
mapOfBank.set("98098909867", kotak_bank);
mapOfBank.set("62514812345", hdfc_bank );
mapOfBank.set("56765489763", panjab_bank);
console.log(mapOfBank);


console.log("-----------------------------------------------Traverse Map using for of loop------------------------------------------------------");
const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) {
    const element = mapOfBank.get(key)
    console.log("Bank Name:",element.bankName,", Account No:",element.account,",Interest Rate:",element.interestRate);
    
}