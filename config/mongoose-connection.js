import mongoose from "mongoose"; 

mongoose.connect("mongodb://127.0.0.1:27017/WatchEcomm")
.then(()=>{
    console.log("connected to Mongo");
})
.catch((err)=>{
    console.log(err)
})

mongoose.exports=mongoose.connection;