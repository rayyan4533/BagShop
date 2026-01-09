import mongoose from "mongoose"; 
import debug from "debug"; 
import config from "./development.json" with {type:'json'};

//idhar khudka name likh sakte
const dbgr=debug("development:mongoose"); 
()=>

mongoose
.connect(`${config.get(MONGODBURI)}/WatchEcomm`)
.then(()=>{
    dbgr("connected to Mongo");
})
.catch((err)=>{
    dbgr(err)
})

export default mongoose.connection;