import express, { Express } from "express";
// import mongoose from "mongoose";
import cors from "cors";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());

app.listen(PORT, () => {
  console.log("Listening on Port 4000");
});
