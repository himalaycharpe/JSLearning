let fun = () =>   console.log("Good Morning, Today is Monday ");
fun();

console.log("------------------------------------------------------");

let show = (num1, num2, num3=1) => {
        console.log("multilication = ",num1*num2*num3);
}
show(5, 5, 2);
show(10, 4);

console.log("--------------------------------------------------------");

const res = (arg1, arg2, arg3, arg4, arg5) => {
    let add = arg1+ arg2+ arg3+ arg4+ arg5;
    return add;
}
const store = res(100, 100, 200, 349, 756);
console.log("Addition : ",store);
const result = res("I am ", " learning ", " ES6 "," feature "," in depth ");
console.log("Output : ",result);
console.log("--------------------------------------------------------");