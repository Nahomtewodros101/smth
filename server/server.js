import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); // Ensure this is before using process.en

const port = process.env.PORT; // Fallback to 5000 if PORT is undefined

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
