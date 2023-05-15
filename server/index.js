//cookie parser to parse ( fetch ) cookie data from req
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require('cors');

require("dotenv").config();

//importing connections & routes
const dbConnection = require("./config/DB");
const router  = require("./routes/routes");

const app = express();

//setting up middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your client application
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed request headers
    credentials: true,
  }));

//router middleware
app.use("/api/v1" , router);

//port
const PORT = process.env.PORT || 4001;

//base route
app.get("/", (req,res)=>{
    res.send("Server is up!");
})

//server listener
app.listen(PORT , ()=>{
    console.log(`Server is up at ${PORT}`);
    dbConnection();
})

