const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.get("/", (req, res) => {
    res.send("CityShop Backend is working properly"); 
    
})
const PORT = process.env.port || 5000;
app.listen(port, () => {
    console.log("Server is running on port ${PORT}");
    
})
