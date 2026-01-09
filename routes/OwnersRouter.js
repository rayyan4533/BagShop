import express from "express";
const router=express.Router();

import OwnerModel from "../models/OwnerModel.js";

router.get("/",(req,res)=>{
    res.send("Owner router working")
})


console.log("the node environment is:-"+process.env.NODE_ENV);

if(process.env.NODE_ENV==="development"){
    router.post("/create",(req,res)=>{
        res.send("the createOwner is working")
    })

}

export default router;