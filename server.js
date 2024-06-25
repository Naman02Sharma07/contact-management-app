const express = require("express");
const errorHandler = require("./middleware/errorHandler");
// const connectDB = require("./config/dbConnection");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()//this is importatnt because here the brackets after the config are important
// console.log("I am in express")
const port = process.env.PORT || 5000;
connectDb()
const app = express();


app.use(express.json())
app.use(errorHandler)///this isll be used to handle the error before the other request would send directly to the server 

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.listen(port,() => {
    console.log(`server running on port ${port}`);
})

