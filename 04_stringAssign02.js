String = "   Hey you are doing good, keep it up  ";
var line = "  i am doing well  ";

function stringHandsOn() {
    console.log("---1-------------------------");
    console.log(String);

    console.log("---2-------------------------");
    console.log("Length of string is:  ", String.length);

    console.log("---3-------------------------");
    var lengthTrim = String.trim();               // after trimming of string -----lengthTrim
    console.log("Length of string after trim: ", lengthTrim.length);


    console.log("---4---------------------------");
    console.log("Removing extra start and end spaces using trim: "
        , lengthTrim, String.length, lengthTrim.length);
    var remainCount = String.length - lengthTrim.length;
    console.log("total no. extra spaces count:  ", remainCount);

    console.log("---5---------------------------");
    //console.log("first and last character on same line after trim: ");
    var charFirst = lengthTrim.charAt(0);
    console.log("the first character after trim is: ",charFirst);
    var charLast = lengthTrim.charAt(lengthTrim.length-1);
    console.log("the last character after trim is: ",charLast);
    // String = "   Hey you are doing good, keep it up  ";

    console.log("---6---------------------------");
    var wordTotal = lengthTrim.split(" ");
    console.log("total word after step 3 : ",wordTotal.length);

    console.log("---7---------------------------");
    var indexOf = String.indexOf("good");
    console.log("index of good : ", indexOf);

    console.log("---8---------------------------");
    var subStr = String.substring(22);
    console.log("substring is: ",subStr);   // substring index of 22

    // String = "   Hey you are doing good, keep it up  ";
    console.log("---9---------------------------");
    var s = String.slice(22);
    console.log("slice: ",s);   //slice index of 22   // ood, keep it up  


    console.log("---10---------------------------");
    var e = lengthTrim.endsWith('up');
    console.log("string ends with : ",e);

    var s = lengthTrim.startsWith('Hey');
    console.log("string starts with : ",s);
}
stringHandsOn();

/* console.log("**Step1**");                      // for better understanding abhishek code
function stringHandsOn(){
var a = " Hey you are doing good,  keep it up";
console.log(a);
console.log("**Step2**");
  console.log(a.length);// length.
  console.log("**Step3**");
  var b = a.trim();//trim.
  console.log(b);
  console.log("After removing space: ",b.length);
  console.log("**Step4**");
  var count = a.length-b.length; //count.
  console.log(count);
  console.log("**Step5**");
  var firstChar = b.charAt(0);
  console.log("The first Character After Trim is:  ",firstChar);//print_first_char.
  
  var lastChar = b.charAt(b.length-1);
  console.log("The Last Character After Trim is:  ",lastChar);//Print_last_char.
  console.log("**Step6**");
   var d = b.split(" ");
   console.log("Totalwords are after step 3 is:  ",d.length);//totalWords avil_after_step3.
  
   console.log("**Step7**");
   var e = a.indexOf('good')
   console.log("The index of good are:"   ,e);//index word of string good.
  
   console.log("**Step8**");
    var f = a .substring(22);
    console.log("Using Substring:"  ,f);//substring index of 22.
  
    console.log("**Step9**");
 var g = a.slice(22);
 console.log("Using Slice:"  ,g);// slice index of 22.


 console.log("**Step10**");
   var h = b.endsWith('up');
   console.log(" ends with up is:  "  ,h);// ends with 'up'.
   console.log("**Step11**");
   var i = b.startsWith('Hey');
   console.log("Start with Hey:  "  ,i);// start with hey.
}stringHandsOn();
  */ 