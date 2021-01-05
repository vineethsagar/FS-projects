const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');
const app = express();



// runs every time there is hit
app.use(bodyParser.json())
app.use(cors())
// import from posts 
// middleware
const postRouter = require('./routes/posts')
app.use('/posts',postRouter);

// connect to db 
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true,useUnifiedTopology:true},
()=>console.log("connected to db"))
app.listen(5000);