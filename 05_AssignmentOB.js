function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are Eligible for marriage` 
    : "No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log("Status: ",result);

  var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
  console.log("Status: ",result);

  console.log("---------------------------------");

  function femaleMariiageEligibility(gender, age, girlName){

    var result = (gender= "Female" && age>=18) 
    ? `Hey ${girlName} you are eligible for marriage` 
    : "Not Eligible" ;
    return result ;

  }
  console.log(`${femaleMariiageEligibility("Female", 16, "Jenifer")}`);
  console.log(`${femaleMariiageEligibility("Female", 27, "Malinda Gates")}`);