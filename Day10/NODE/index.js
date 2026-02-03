// const calc = require("./math.js")
// console.log(calc.add(7,4));
// console.log(calc.sub(5,1));

// import {add, sub,greet} from "./math.js"

// console.log(add(2,4));
// console.log(sub(5,2));
// console.log(greet("Rajiv"));
/*
//Read File - Block and Non block
 import fs from  "fs";
 import { performance } from "perf_hooks";

 console.log("Start");
const data = fs.readFileSync("data.txt", "utf-8")
console.log(data);
console.log("end");
// console.timeEnd("File read time");
// console.time("Async file Read");
const start = performance.now()
fs.readFile("data.txt", "utf-8", (err, data)=>{
    if(err) return console.log(err);
    console.log("File read Done");
    
    const end = performance.now()
    console.log(`time taken: ${(end-start).toFixed(2)}ms`);
})
console.log("end");

*/
import os from "os";
console.log("os Type", os.type());
console.log("os Type", os.platform());
console.log("os Type", os.arch());
console.log("os Type", os.cpus());





