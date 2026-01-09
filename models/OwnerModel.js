const mongoose  = require("mongoose")

const owner=mongoose.Schema({


fullname :{
    type:String,
    minLenth:3,
    trim:true,
},

email:    String ,
password: String,
products:{
    type:Array,
    default:[]
},
gstin:String,
picture:String,
    
})



module.exports=mongoose.model("user",userSchema)
