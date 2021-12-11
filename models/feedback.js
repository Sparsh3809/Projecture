const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User=require('./user');

const feedbackSchema = new Schema({
    email:String,
    description:String,
    user:{type:Schema.Types.ObjectId,ref:'User'}
});

module.exports = mongoose.model('Feedback',feedbackSchema);