
function squareOfWordLength(args){

    console.log(`The Word is: ${args}`);
    console.log(`The length of word: ${args.length} `);

    var squareL = args.length**2
    return squareL;
}
var a = squareOfWordLength("javaScript");
console.log(`square of length is: ${a}`);

var b = squareOfWordLength("Google Chrome");
console.log(`square of length is: ${b}`);

var c = squareOfWordLength("Developer Smart");
console.log(`square of length is: ${c}`);

console.log("-------------------------------------------------------------------------");

function assignstack(){
    string = "i am Angular Developer"
    console.log(`given string: ${string}`);
    console.log("string length",string.length);
    console.log("total words in string: ",string.split(" "));
    console.log("string length devided by no. of word",string.length/4);
    console.log("string length nultiplyied by no. of word",string.length*4);
}
assignstack();
