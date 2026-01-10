import express from "express";
const router = express.Router();

import OwnerModel from "../models/OwnerModel.js";

router.get("/", async (req, res) => {
  try {
    const owners = await OwnerModel.find();

    res.status(200).json({
      success: true,
      count: owners.length,
      data: owners
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


router.post("/create", async (req, res) => {
  try {
    let {fullanme,email,password} =req.body;
    const owner = await OwnerModel.create({
      fullname: "Rayyan Ansari",
      email: "rayyan@gmail.com",
      password: "gsdfg2",
      gstin,
    });

    res.status(201).json({
      success: true,
      data: owner
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

console.log("Node environment:", process.env.NODE_ENV);

export default router;
