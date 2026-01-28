/*//for each loop
array.forEach((currentValue, index, array) => {
    // code to execute
});

*/

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
    console.log(`I like ${fruit}`);
});

function add(a,b){
    return a+b
}

let result = add(2,4)
console.log(result);

let SayHello = function test(){
    console.log("Hello EveryOne");
    
}

SayHello()

// anonymous function
let test = function (){
    console.log("Hello Every");
    
}

test()

//Arrow function

let multiply = ( a,b)=>{
    return a*b

}

console.log(multiply(6,4))