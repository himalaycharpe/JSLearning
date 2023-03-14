
const sbiBank = {
    bankName: "State Bank",
    location: "Chhindwara",
    accountNo: 4245367425,
    ifscCode: 'SBI3045',
    interestRate: 11.50,
    showDetails: function () {
        console.log(sbiBank);
    }
}

const axisBank = {
    bankName: "Axis Bank",
    location: "Nagpur",
    accountNo: 3245363454,
    ifscCode: 'AXI3223',
    interestRate: 12,
    showDetails: function () {
        console.log(axisBank);
    }
}

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Mumbai",
    accountNo: 22453679876,
    ifscCode: 'HDFC3279',
    interestRate: 10,
    showDetails: function () {
        console.log(hdfcBank);
    }
}

const bobBank = {
    bankName: "BOB Bank",
    location: "Indore",
    accountNo: 75353674986,
    ifscCode: 'BOB20923',
    interestRate: 14,
    showDetails: function () {
        console.log(bobBank);
    }
};
console.log("----------------------------------------------------------------------------------------");
sbiBank.showDetails();
console.log("-------------------------------------------------------------------------------------------");
axisBank.showDetails();
console.log("----------------------------------------------------------------------------------------------");
hdfcBank.showDetails();
console.log("-------------------------------------------------------------------------------------------------");
bobBank.showDetails();