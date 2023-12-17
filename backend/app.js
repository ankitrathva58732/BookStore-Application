const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.use("/books",router);

app.use("/", (req,res,next) =>{
    res.send("This is our starting application");
});

mongoose
.connect(
    "mongodb://127.0.0.1:27017/BookStore"
)
.then(() => console.log("Connected to database"))
 .then(() =>{
    app.listen(5019);
 }).catch((err) => console.log(err)); 


