
import express, { Application } from "express";
import * as dotenv from "dotenv";
import "./config/db.config";

dotenv.config();
const app: Application = express.application;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.info(`🚀: App Running in port: ${port}`);
});