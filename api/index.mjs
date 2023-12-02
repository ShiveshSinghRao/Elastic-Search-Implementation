import express from "express";
import dotenv from "dotenv";

import cors from "cors";

import { Client } from "@elastic/elasticsearch";
import bodyParser from "body-parser";
import "express-async-errors";
import routing from "./routes/message.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const elasticClient = new Client({
  node: "http://elastic:_zh4BSZfNCCUTXibBlHm@localhost:9200",
});

app.use("/api", routing);

app.listen(3000, () => {
  console.log("Connected to backend.");
});
