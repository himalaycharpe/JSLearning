console.log("------------------1---------------------------------------------------------------------");

function voteEligibility(age) {
    if (age <= 0 || age > 110 || (typeof age != "number") || age == null || age == undefined) {
        console.log(`Please provide the valid Age  - ${age}`);
    }
    if (age >= 18 && age<=110) {
        console.log(`As per yor Age ${age}: Your are Eligible for Vote`);
    }
    else {
        console.log(`As per your Age ${age}: Your are Not Eligible.`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("-----2-------------");
/*
function gradeCalculation(marks){
    // if marks is 0 or less than 0 or greater than 100 or not in valid number format 
    // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks
    if(marks<=0 || marks > 100 || (typeof marks!= "number")){
        console.log(`Please provide the valid marks - ${marks}`);
    }
    
    }
    gradeCalculation(0);
    gradeCalculation(150);
    gradeCalculation(-7);
    gradeCalculation("91");
    gradeCalculation("Seventy One");
    gradeCalculation(NaN);// 
    gradeCalculation(undefined);//
    gradeCalculation(null);//  */