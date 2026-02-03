import { error } from "console";
import EventEmitter from "events";
/*
// create a event Emitter
const emitter = new EventEmitter();
//register an event
emitter.on("userRegistred",(username)=>{
    console.log("user registered",username);
    
})
emitter.once("userRegistered",(username)=>{
    console.log("user registered",username);
    
})
emitter.off("userRegistered",(username)=>{
    console.log("user registered",username);
    
})
emitter.emit("userRegistred", "Ravi")
emitter.emit("userRegistred", "Ravi")

const emitter2 = new EventEmitter()

emitter2.on("sentNotif",()=>{
    console.log("Push has been Sent")
  
})
emitter2.on("sentNotif",()=>{
    console.log("Email has been Sent")
  
})
emitter2.on("sentNotif",()=>{
    console.log("Whatsapp has been Sent")
  
})
function login(){
    console.log("Login Done");
    emitter2.emit("SetNotif")
    
}
login()
*/
/*
const emitter3 = new EventEmitter()

emitter3.on("order", (order)=>{
    console.log(`Notification: Order Placed ${order.status}`);
    
})
emitter3.on("orderPlaced", (order)=>{
    console.log(`Notification: Order are ${order.status2}`);
    
})
emitter3.on("confirm", (order)=>{
    console.log(`Notification: Order Confirm by restro ${order.id}` );
    
})

emitter3.on("assign", (order)=>{
    console.log(`Notification: order assign to delivery partner ${order.id}`);
    
})
emitter3.on("onWay", (order)=>{
    console.log(`Notification: order on the way ${order.id}`);
    
})
emitter3.on("delivered", (order)=>{
    console.log(`Notification: order delivered ${order.id}`);
    
})


function order(){
    const orderDetails = {id:"231", status:"pending", status2: "Placed"}
    console.log(`processing Swiggy order....`);
    
    emitter3.emit("order",orderDetails)
    emitter3.emit("orderPlaced",orderDetails)
    emitter3.emit("confirm",orderDetails)
    emitter3.emit("assign",orderDetails)
    emitter3.emit("onWay",orderDetails)
    emitter3.emit("delivered",orderDetails)
    emitter3.emit("new")
    
}
order()
*/



//Handle Error
const emitter4 = new EventEmitter()

emitter4.on("loginSuccess", ()=>{
    console.log(`Notification: login Success`);
    
})

emitter4.on("loginSuccess",()=>{
    throw new Error("Email Service down")
})

emitter4.on("loginSuccess", ()=>{
    console.log(`Notification: Whatsapp login Success`);
    
})
emitter4.on("error", (err)=>{
    console.log(`handle error ${err.message}`);
    
})

function login(islogin){
    
    try{
        if(islogin){
        console.log("login done");
        emitter4.emit("loginSuccess")
    }else{
        console.log("login failed");
        
    }
    }catch(err){
        console.log(`Handle error ${err}`);    
    }
    
    
}
login(true)


