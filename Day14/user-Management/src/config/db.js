import mongoose from "mongoose";

export  const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO URI:", process.env.MONGO_URI);
        console.log("mongodb connected");
        
        
    }catch(err){
        console.error("mongodb connection failed", err);
        process.exit(1);
        
    }
};