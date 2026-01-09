import path from "path";


import express from "express";
import { fileURLToPath } from "url";
const app=express()



app.use(express.json());
app.use(express.urlencoded);

const __filename =fileURLToPath(import.meta.url)
app.use(express.static(Path.join()))