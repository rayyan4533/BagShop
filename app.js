import express from "express";
const app=express()

import cookieParser from "cookie-parser";
//path wala 
import path from "path";
import { fileURLToPath } from "url";

//db ka import
import db from "./config/mongoose-connection.js";


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


//to handle either json or urlencode data
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(cookieParser());

//to find static files
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");


import UsersRouter from "./routes/UsersRouter.js"
import ProductsRouter from "./routes/ProductsRouter.js"
import OwnersRouter from "./routes/OwnersRouter.js"


//Routes mere
app.use("/owners",OwnersRouter);
app.use("/users",UsersRouter);
app.use("/products",ProductsRouter);



app.listen(3000,()=>{
    console.log("running on port 3000")
})