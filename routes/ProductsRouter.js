import express from "express";
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Product router working")
})




export default router;
