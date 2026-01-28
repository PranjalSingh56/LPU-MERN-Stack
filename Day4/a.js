/**
 * In JavaScript, the behavior of `var` and `let`/`const` is different due to their scoping and hoisting mechanisms:
 * 
 * - **`var` Declaration**:
 *   - Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
 *   - This means you can access the variable before its declaration, but its value will be `undefined` until the assignment is encountered.
 *   - Example:
 *     ```javascript
 *     console.log(a); // undefined
 *     var a = 10;
 *     ```
 * 
 * - **`let` and `const` Declaration**:
 *   - Variables declared with `let` and `const` are also hoisted, but they are not initialized.
 *   - They remain in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered.
 *   - Accessing them before their declaration results in a `ReferenceError`.
 *   - Example:
 *     ```javascript
 *     console.log(b); // ReferenceError: Cannot access 'b' before initialization
 *     let b = 20;
 *     ```
 * 
 * In the provided code:
 * - The `var a;` declaration is hoisted and initialized with `undefined`, so `console.log(a);` outputs `undefined`.
 * - If `let` or `const` were used instead of `var`, accessing the variable before its declaration would throw a `ReferenceError`.
 */


// var name= "Rajsv Mahendra"
// let age= "20"
// const state = "Punjab"

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);

// console.log(typeof(age))

// const name = "RAJSV";
// let age = 20;
// let isStudent = true;
// let x;
// let y = null;

// console.log(name);
// console.log(age);
// console.log(isStudent);

// console.log(typeof(y));

// let num1 = 4
// let num2 = 4
// let char = "ab"
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)

//Number  Conversion
// let s = "123";
// let n = Number(s); 
// console.log(n);
// console.log(typeof(n))
// let n = 1223;
// let s = String(n);
// console.log(typeof(n))


//Concatination
// let x = "ab";
// let y = "cd";
// let z = "ef"
// console.log(x+y+z)

// var a = "Hey!";
// var b = "How";
// var c = "are";
// var d = "you?";
// console.log(Concat())

// function Concat(){return a+b+c+d;}

// var a = "raj"
// var b = "RAJ"
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())
// console.log(a.includes("raj"))

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
// console.log(fruits.slice(1,3))
// fruits.splice(2,0,'Guava')
// console.log(fruits)

// let firstName = "Rajsv";
// let lastName = "Mahendra";
// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)

//Scope
// let z = 10;
// function test()
// {
//     let f = 7;
//     console.log(z);
//     console.log(f);
// }
//test( )
//  console.log(z);
//  console.log(f);

// if(true)
// {
//     let a = 1;
//     var d = 2;
// }
// console.log(d);

// console.log(a);
// var a;
// a =10;

//   In the provided code:
//   - The `var a;` declaration is hoisted and initialized with `undefined`, so `console.log(a);` outputs `undefined`.
//   - If `let` or `const` were used instead of `var`, accessing the variable before its declaration would throw a `ReferenceError`.
//  var is Global scope (so i.e; it's undefined)

// CSS visibility property can be used to make an element visible or hidden.
// - `visibility: visible;` makes the element visible.
// - `visibility: hidden;` hides the element but it still takes up space in the layout.

// CSS `display: none;` and `visibility: hidden;` differences:

// - `display: none;` removes the element from the document flow, so it does not take up any space.
// - `visibility: hidden;` hides the element, but it still occupies space in the layout.

// == checks and compare whereas === checks datatypes


// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// let i = 0;


// while (i < 10) {
//     if (i % 2 == 0){
//         console.log(i)
//     }
//     i++
// }

//for in 
// let arr=[10,20,30,40,50]
// for(let value of arr){
//     console.log(value)
// }


// for off
// let obj = {key:value}

// for(let key in obj){
//     console.log(key)
// }

console.log("hello");

