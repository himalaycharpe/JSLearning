
var greet = "Good Morning";

console.log(typeof greet);
console.log("------------------------------------");

console.log("total no. of character avaialable in string - greet ");
var greetLength = greet.length;
console.log("length of string: ",greetLength);
console.log("-----------------------------------");

console.log("find the character by index value: ");
var charAtIndex3 = greet.charAt(3);
console.log("character available at index 3: ",charAtIndex3);
console.log("------------------------------------");

console.log("find the last character");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("last character is: ",charAtLastIndex);
console.log("----------------------------------");

console.log("find the index by character value");
var indeOfM = greet.indexOf('M');
console.log("index of M is: ",indeOfM);

console.log("index of character which is not available in string ",greet.indexOf('z'));
console.log("index of o char: ",greet.indexOf('o'));
console.log("index of o char using lastIndex(): ",greet.lastIndexOf('o'));
console.log("------------------------------------------------------------------------------");

var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);
console.log("----------------------------------------------------------------------------------");

console.log("UPPER Case: ",replaceResult.toUpperCase());
console.log("lower Case: ",replaceResult.toLowerCase());

var myName = "  Mohit Sharma  "; 
var myNameAfterTrim = myName.trim(); 
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length)

//find the total extra spacs removed from string - myName
var count = myName.length - myNameAfterTrim.length;
console.log(count);
console.log("----------------------------------------------------------------------------------------");

console.log("includes()"); 
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor")); 
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon")); 
console.log("Is substring o  includes in the greet or not: ", greet.includes("o"))
console.log("---------------------------------------");

console.log("slice() method"); 
var sliceResult = greet.slice(5, 12); 
console.log(sliceResult); 
console.log(greet.slice(2, 5))
console.log("----------------------------------------");

var greet = "Good Morning";

console.log("split() method"); 
var greet = "Good Morning"; 
var splitResult = greet.split(" "); 
console.log(typeof splitResult);
console.log(splitResult);
console.log("------------------------------------------");

console.log("split() method");              
var greet = "Good Morning my dear friend"; 
var splitResult = greet.split(" "); 
console.log(splitResult); 
console.log("Total words: ",splitResult.length);      // question--How to find out no. of words from string

//write a rogram to find out my no. of friends
var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var splitFriend = myFriendList.split(",");
console.log(splitFriend);
console.log("total friends: ",splitFriend.length);
console.log("---------------------------");

