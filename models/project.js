const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:String,
    people:Number,
    domain:String,
    description:String,
    user:{type:Schema.Types.ObjectId,ref:'User'}
});

module.exports = mongoose.model('Projects',projectSchema);