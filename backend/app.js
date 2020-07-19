require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();


//Import routes from outer
const authRoutes = require("./routes/auth");
const AskQestionsRoutes = require("./routes/AskQestions");
const userRoutes = require("./routes/user");



//middleware requie
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");




//Middleware use
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());




//DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connect DB");
  });



// my routes
app.use("/api" , authRoutes);
app.use("/api" , AskQestionsRoutes);
app.use("/api" , userRoutes); 




app.get('/', (req, res) => res.send('Hello World!'))



//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
  console.log("sever is running on port 8000");
});