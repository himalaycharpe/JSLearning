console.log("---------------------------------------");
var vowelString = function (str) {
    var count = 0;

    for (let i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (char == "a" || char == "e" || char == "o" || char == "i" || char == "u" || char == "A" || char == "E" || char == "O" || char == "I" || char == "U") {
            count = count + 1;
        }

    }
    return count;
}

var result = vowelString("JavaScript is the language Of Internet");
console.log(`Total Number of Vowels Present in The String is: ${result}`);

var result = vowelString("I am Angular Developer");
console.log(`Total Number of Vowels Present in The String is: ${result}`);

var result = vowelString(" Hard work and commitment is the key of success");
console.log(`Total Number of Vowels Present in The String is: ${result}`);

console.log("-----------------------------------------------------------------");


function lastWordCharCount(str) {
    var count = "";
    for (let index = str.length; index >= 0; index--) {
        var char = str.charAt(index);
        if (char == " ") {
            break;
        }
        count = count + char;

    }
    return count;

}
var result = lastWordCharCount("JavaScript is the language Of Internet");
console.log(`Last Word count Of String- "JavaScript is the language Of Internet" is: ${result.length}`);

var result = lastWordCharCount("I am Angular Developer");
console.log(`Last Word count Of String- "I am Angular Developer " is: ${result.length}`);

var result = lastWordCharCount("Hard work and commitment is the key of success");
console.log(`Last Word count Of String- "Hard work and commitment is the key of success" is: ${result.length}`)