
var check_leap_year = function (leap_year) {

    if ((typeof leap_year != "number") || (typeof leap_year != "number")|| leap_year == null  || leap_year == undefined || isNaN(leap_year)) {
        console.log(`${leap_year} : please enter valid year number`);
    }

    else if (leap_year % 4 == 0) {
        console.log(`given year, ${leap_year} is a leap year`);
    } 
    else if (leap_year % 4 != 0) {
        console.log(`given year, ${leap_year} is not a leap year `);
    }
    // else{
    //     console.log(`invalid data: ${leap_year}`);
    // }
}
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(1750); 
check_leap_year(null);
check_leap_year("twenty twenty");
check_leap_year(undefined);
check_leap_year(NaN);


