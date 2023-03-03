console.log("1. WAP to print numbers from 5 to 15 by incrementing 1");

for (let i = 5; i <= 15; i++) {
    console.log(" ", i);
}
console.log("2. WAP to print numbers from 50 to 40 by decrementing by 1");
for (let i = 50; i >= 40; i--) {
    console.log("  ", i);
}
console.log("3. WAP to find first 15 odd numbers");
for (let index = 1; index <= 30; index = index + 2) {
    console.log("   ", index);
}
console.log("4. WAP to find first 10 even numbers");
for (let index = 0; index <= 20; index = index + 2) {
    console.log("    ", index);
}
console.log("5. WAP to print table of 5 like → 5 10 15 20 25 …… 50");
for (let i=5; i<=50; i=i+5) {
    console.log("     ", i);
}
console.log("6. WAP to print table of 10 like 10 20 30 40 …… 100");
for(let i=10; i<=100; i=i+10){
    console.log("      ",i);
}
console.log("7. WAP to print table of 10 in reverse order like → 100 90 80 70 …… 10");

for(let i=100; i>=10; i=i-10){
    console.log("       ",i);
}


/*
function abhi(tableOf, lastLimit){

    for (let i=tableOf; i<=lastLimit; i=i+2) {
        console.log(`table of ${tableOf} : ${i}`);
    }
}
abhi(2, 20);
abhi(7, 70);
*/

