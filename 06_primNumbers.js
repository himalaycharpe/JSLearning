

function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);

console.log("----------------------------------------");

let i,j;
let count =0;

for(i=2;i<=100;i++){
    for(j=1;j<=i;j++){
           if(i%j==0){
            count++
           }
    }
    if(count ==2)
     console.log(i);
     count=0;
}
