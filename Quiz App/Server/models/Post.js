const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    qId:Number,
    qText:String,
 /*    qOptions:Array,
    qCategory:String,
    qDifficulty:String,
    qHint:String,
    qCreator:Object,
    qDate:Date.now */
})
// add image , keywords later

module.exports = mongoose.model("Question",questionSchema);