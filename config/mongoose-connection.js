// import mongoose from "mongoose"; 
// import debug from "debug"; 
// import config from "./development.json" with {type:'json'};

// //idhar khudka name likh sakte
// const dbgr=debug("development:mongoose"); 
// ()=>

// mongoose.connect(`${config.MONGODBURI}/WatchEcomm`)
// .then(()=>{
//     console.log("connected to Mongo");
// })
// .catch((err)=>{
//     console.log("error conecting")
// })

// export default mongoose.connection;



import mongoose from "mongoose";
import debug from "debug";
import config from "./development.json" with { type: "json" };

const dbgr = debug("development:mongoose");

mongoose
  .connect(`${config.MONGODBURI}/WatchEcomm`)
  .then(() => {
    dbgr("✅ MongoDB connected");
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

export default mongoose;
