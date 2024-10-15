import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT; 

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
