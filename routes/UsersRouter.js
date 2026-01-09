import express from "express";
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("USER router working")
})




export default router;
