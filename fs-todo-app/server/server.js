const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const connectDB = require('./dbConnect');
const transaction = require('./routes/transaction');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();


app.get('/',(req,res)=>{
    res.status(200).send('TODO API');
})

app.use('/api/v1',transaction)


app.listen(8000,()=>{
    console.log('Listening at 8k port ');
})