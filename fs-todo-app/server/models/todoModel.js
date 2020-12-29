const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})

const TodoModel = mongoose.model('TodoModel',todoSchema);
module.exports =TodoModel;