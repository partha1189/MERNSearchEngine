import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { json } from "body-parser";
import searchRoutes from "./routes";
import { error } from "console";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(json());
app.use(searchRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.o038r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

// const options = { newUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Listening on Port 4000");
    })
  )
  .catch((error) => {
    throw error;
  });
