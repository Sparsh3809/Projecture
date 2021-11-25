const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:String,
    people:Number,
    skills:[String],
    language:[String],
    user
})