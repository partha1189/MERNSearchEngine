import express, { Express } from "express";
// import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import searchRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(json());
app.use(searchRoutes);

app.listen(PORT, () => {
  console.log("Listening on Port 4000");
});
