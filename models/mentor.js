const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    name : String,
    mail: String ,
    skills:[String],
    projects:[
        {
            type:Schema.Types.ObjectId,
            ref:"Projects"
        }
    ]
});

module.exports = mongoose.model('Mentor',mentorSchema);