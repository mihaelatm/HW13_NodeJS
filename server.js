import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3333;
const dbURI = process.env.MONGODB_URI;

app.use(express.json());

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Succesfully connected to the MongoDB");
  })
  .catch(() => {
    console.log("Could not connect to the MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
