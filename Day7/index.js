/*
//DOM
let btn1 = document.getElementById("btnId")
let btn2 = document.getElementById("btnClassName")
let btn3 = document.getElementById("btnTagName")
let btn4 = document.getElementById("btnquerySelector")
let btn5 = document.getElementById("btnquerySelectorAll")

btn1.addEventListener("click",()=>{
    let el = document.getElementById("header")
    el.style.color ="Red"
    el.innerText = "Hii There !"

})

btn2.addEventListener("click",()=>{
    let els = document.getElementsByClassName("text")
    for(let i =0; i<els.length; i++){
        els[i].style.backgroundColor = "Red"
    }
})

btn3.addEventListener("click",()=>{
    let els = document.getElementsByTagName("p")  
    els[0].style.border = "2px solid blue"

})

btn4.addEventListener("click",()=>{
    let els = document.querySelector(".text")
    
    els[0].style.backgroundColor ="yellow"

})

btn5.addEventListener("click",()=>{
    let els = document.querySelectorAll(".text") 
    for(let i =0; i<els.length; i++)
        els[i].classList.toggle("highlight")

})

*/
/*
// form
let input = document.getElementById("inputbox")
let button = document.getElementById("btn")
let output = document.getElementById("output")

button.addEventListener("click", (e)=>{
    e.preventDefault();
    output.innerText = `Hello ${input.value}`
    
})
input.addEventListener("input",()=>{
        console.log("Typing" , input.value)
    })
input.addEventListener("focus",()=>{
    input.style.border ="5px solid green"

    })

input.addEventListener("blur",()=>{
        input.style.border ="2px solid red"
    })

    */
/*
let theme = document.getElementById("btn1")

theme.addEventListener("click",()=>{
    if(document.body.style.backgroundColor =="white"){
        document.body.style.backgroundColor ="black"
        document.body.style.color ="white"
    }
    else{
        document.body.style.backgroundColor ="white"
        document.body.style.color ="black"
    }
        
})

let shows = document.getElementById("btn1")
let input = document.getElementById("psd")


shows.addEventListener("click",()=>{
    if(input.type =="Password"){
        input.type = "text"

    }
    else{
        password.type = "text"
    }
})

// event Deligation- event bubbling
buttons = document.getElementById("parent")

parent.addEventListener("click", (event)=>{
    if (event.target.tagName =="BUTTON"){
        console.log("Button Clicked", event.target.innerText);
        
    }

})

// callback function

function welcome( name){
    console.log(name);
    

}
function processUser(){
    let name = "Raj"
    useCallback(name)
}
processUser(welcome)

// SettimeOut
setTimeout(function(){
    console.log(helloo)
},3000);

setTimeout(function(){
    console.log("Executed after 2 seconds")
},3000)

// HOF
function calc (a,b, operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log(calc(10,20,add));
console.log(calc(10,20,sub));
console.log(calc(10,20,mul));
console.log(calc(10,20,div));

//const calcu = (a,b,op) => op(a,b);

function outer() {
    return function inner() {
        console.log("Callback hell");
           
    }
}
outer()
*/
/*
//forEach
let num = [1,32,3,4,5]
num.forEach((value,index, arr)=>{
    console.log(value, index, arr);
})

//map
num.map((val)=>{
console.log(val*2);
})
*/
/*
//fillter
let num = [1,32,3,4,5]
num.filter((val)=>{
    if(val%2 == 0){
        console.log(val);
    }
})

//reduce - a fn that takes input values , combine them and produce a single output value

let a = num.reduce((val, acc)=>{
    return val +acc

})
console.log(a);
*/

// promises - , asysc-await- task that take time but do not block the code

let val = async()=>{
    try{
        const setHeader = {
            headers:{
                 Accept: "application/json"
            }
           
        }
    let res = await fetch("https://incahazdadJoke.com",setHeader)
    const data = await res.json()
    console.log(data);
    
    } catch(err){
        console.log(err);
        
    }
    


}
console.log(val);
