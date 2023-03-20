console.log("----------------------------------------------Create Object using Class Bank---------------------------------------------------------");
class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
const axis_bank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axis_bank);
const sbi_bank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598", 10.75);
console.log(sbi_bank);
const icici_bank = new Bank("ICICI Bank", "CA Road", "32454567554", "ICICI34543", 11.5);
console.log(icici_bank);
const kotak_bank = new Bank("KOTAK Bank", "Hingna Road", "98098909867", "KOTAK234432", 13.5);
console.log(kotak_bank);
const hdfc_bank = new Bank("HDFC Bank", "Surat", "62514812345", "HDFC0004598", 9.75);
console.log(hdfc_bank);
const panjab_bank = new Bank("PANJAB Bank", "Mumbai", "5676548976", "PANJA0004598", 14.75);
console.log(panjab_bank);

console.log("--------------------------------------------------Add Object element in Set----------------------------------------------------");
const setOfBank = new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(icici_bank);
setOfBank.add(kotak_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(panjab_bank);

console.log(setOfBank);

console.log("-------------------------------------------------Traverse Set Using for Of Loop---------------------------------------------");

for (const bank of setOfBank) {
    console.log("Bank name:", bank.bank_name, ",", "location:", bank.location);
}