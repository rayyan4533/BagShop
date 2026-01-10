import mongoose from "mongoose"



const ownerSchema=mongoose.Schema({


fullname :{
    type:String,
    minLenth:3,
    trim:true,
},

email:    String ,
password: String,
// products:{
//     type:Array,
//     default:[]
// },
gstin:String,
// picture:String,
    
})  



// In models/OwnerModel.js
const ownerModel = mongoose.model("owner", ownerSchema);
export default ownerModel;