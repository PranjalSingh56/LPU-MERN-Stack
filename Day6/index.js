/*//for each loop
array.forEach((currentValue, index, array) => {
    // code to execute
});



const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit) => {
    console.log(`I like ${fruit}`);
});

*/
/*
//traditional Function
function add(a,b){
    return a+b
}
    */

/*
// Asyncronous function expression
let result = add(2,4)
console.log(result);

let SayHello = function test(){
    console.log("Hello EveryOne");
    
}

SayHello()
*/

/*
// anonymous function
let test = function (){
    console.log("Hello Every");
    
}
test()
*/
/*
//Arrow function

let multiply = ( a,b)=>{
    return a*b

}

console.log(multiply(6,4))
*/

// IIEF = function that runs immeditely after creating or it runs automatic
/*
// (function(){
//     console.log("IIEF Executed");
    
// })()

(function(name){
    console.log(`IIEF Executed ${name}` );
    
})("raj") 
*/
/*
// push and pop and splice

let arr = [10,20,30,40]
arr.push(50)
console.log(arr.length);

let student = [ "Rohit", "Ravi", "Manish", "Akash", "Raj"]

console.log(student[0]);
student.push("Mohit")
console.log(student);
student[4] = "Arya"

console.log(student);
student.splice(3,3, "Anya")
console.log(student);

*/
/*
//object
let obj = {
    name: "Ravi Kumar",
    age: 24,
}

console.log(obj.age);


// array of object
let user = [
    {name: "a", age:12},
     {name: "b", age:37},
      {name: "c", age:27},

]

console.log(user[1].age);
*/
/*
let fruit = ["Apple", "Kiwi", "Banana", "Mango"]

for(let i=0; i<fruit.length; i++){
    console.log(fruit[i]);
    
}

fruit.forEach((x)=>{
console.log(x);

})
fruit.map((key)=>{
    console.log(key);
})
*/
/*
// Stack memory allocation -  primative - call by Value
let a =10
let b =a
console.log(a,b); // 10,10

b= 20
console.log(a,b); // 10, 20

// Heap  memory allocation - non primative - call by reference
let obj1 = {name : "Ravi"}

let obj2 = obj1
console.log(obj1.name); // Ravi
console.log(obj2.name); // ravi

obj2.name = "Raj"
console.log(obj1.name); // Raj
console.log(obj2.name); // Raj

*/

/*
// Shallow Copy -  it create copy  and point to same copy using spread operator and  Deep Copy - it create copy of each object inside the class

let arr1 =[1,2,[3,4]]
let arr2 = [...arr1]

console.log("before", arr2);

arr2[2][0] = 99;
console.log("after", arr2);

*/



let btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    alert("you are hired")
})
btn.addEventListener("click",()=>{
    let newdiv = document.createElement("div")
    let para = document.createElement('p');
    para.textContent = " Some text"
    //newdiv.append("Some more text", para)
    document.body.append(para)
    

})

let title = document.getElementById("title")
title.innerText ="Hii there !"

let papra = document.querySelector(".para")
papra.textContent = "What happened"
 
let p = document.getElementsByClassName("para")
p[0].style.color ="Blue"
p[1].style.color = "Red"








