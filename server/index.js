import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//File imports

import connection from "./database/connection.js";
import router from "./routes/routes.js";

// app initilize

const app = express();

dotenv.config();

// app config

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app routes

app.use("/", router);

//server start

const PORT = 8000;
const URL = process.env.MONGO_URL;

connection(URL);

app.listen(PORT, () =>
  console.log(`Server started successfully on PORT : ${PORT}`)
);
