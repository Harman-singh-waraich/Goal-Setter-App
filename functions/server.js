const path = require('path');
const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/db');
const serverless = require("serverless-http");
const port = process.env.PORT || 5000;

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/server/goals", require("./routes/goalRoutes"));
app.use("/api/server/users", require("./routes/userRoutes"));

app.use(errorHandler)
module.exports.handler = serverless(app)
// app.listen(port, () => console.log(`Server started on port ${port}`));
