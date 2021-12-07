const express = require("express");
const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const routes = require("./routes")
const app = express();
const port = process.env.PORT || 4200;
require("dotenv").config()

const mongo_uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority` 

mongoose.connect(mongo_uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// middlewares
app.use(express.json());
app.use(xss());
app.use(mongoSanitize());


// routes
app.use('/api',routes);

// server
app.listen(port,()=>{
    console.log("server is listening on port: ",port);
})