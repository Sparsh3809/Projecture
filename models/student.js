const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : String,
    Username : String,
    mail: String ,
    DOB : Date,
    skills:[String],
    projects:[
        {
            type:Schema.Types.ObjectId,
            ref:"Projects"
        }
    ]
});

module.exports = mongoose.model('Student',studentSchema);