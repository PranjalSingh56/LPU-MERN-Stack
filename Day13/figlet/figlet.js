import figlet from "figlet";
figlet("My App", (err,data)=>{
    if (err) {
        console.log(err);       
    }
    console.log(data);
    
})

console.log(figlet.textSync("Hello  World"));
