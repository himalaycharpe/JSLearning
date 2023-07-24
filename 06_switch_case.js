
function weekDay(day) {
    switch (day) {
        case 1:
            console.log(`Day of the week is ${day}: Monday`);
            console.log("Monday is the start day of the week");
            break;
        case 2: console.log(`Day of the week is ${day}: Tuesday`);
            break;
        case 3: console.log(`Day of the week is ${day}: Wed`);
            break;
        case 4: console.log(`Day of the week is ${day}: Thursday`);
            break;
        case 5: console.log(`Day of the week is ${day}: Friday`);
            break;
        case 6: console.log(`Day of the week is ${day}: Saturday`);
            break;
        case 7: console.log(`Day of the week is ${day}: Sunday`);
            break;
        default: console.log(`Invalid day : ${day}`);
            break;
    }
   // console.log(`End of Switch case for ${day}`);  //use this code for stepwise debugging
}
weekDay(3); // 1 to 7, invalid weekDay(7); 
weekDay(0);
weekDay(-2);
weekDay(100);
weekDay(null);
weekDay(undefined);