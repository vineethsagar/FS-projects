const mongoose = require('mongoose');

const connectDB =()=>{

        mongoose.connect('mongodb://localhost:27017/todoApp',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(()=>{console.log("connected DB")})
        .catch((error)=>console.log(error));
}

module.exports = connectDB;