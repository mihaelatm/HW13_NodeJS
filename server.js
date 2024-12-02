import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
