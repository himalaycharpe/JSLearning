
function monthOfYear(monthNum) {
    switch (monthNum) {
        case 1:
            console.log(`The 1st Month is ${monthNum}: january`);
            break;
        case 2: console.log(`The 2nd Month is ${monthNum}: February`);
            break;
        case 3: console.log(`The 3rd Month is ${monthNum}: March`);
            break;
        case 4: console.log(`The 4th Month is ${monthNum}: April`);
            break;
        case 5: console.log(`The 5th Month is ${monthNum}: May`);
            break;
        case 6: console.log(`The 6th Month is ${monthNum}: June`);
            break;
        case 7: console.log(`The 7th Month is ${monthNum}: Jully`);
            break;
        case 8: console.log(`The 8th Month is ${monthNum}: August`);
            break;
        case 9: console.log(`The 9th Month is ${monthNum}: September`);
            break;
        case 10: console.log(`The 10th Month is ${monthNum}: October`);
            break;
        case 11: console.log(`The 11th Month is ${monthNum}: November`);
            break;
        case 12: console.log(`The 12th Month is ${monthNum}: December`);
            break;
        default: console.log(`Invalid Month : ${monthNum}`);
            break;
    }
    // console.log(`End of Switch case for ${day}`);  //use this code for stepwise debugging
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

