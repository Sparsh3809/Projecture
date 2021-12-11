const mongoose = require('mongoose');
const Projects = require('./project');
const Schema = mongoose.Schema;
const passportLocalMongoose=require('passport-local-mongoose');

const userSchema = new Schema({
    name : String,
    email: {
        type : String ,
        unique:true,
        required:true
    },
    phone:Number,
    DOB : Date,
    skills:String,
    type : {
        type: String ,
        enum:['Student','Mentor','Admin']
    },
    projects:[
        {
            type:Schema.Types.ObjectId,
            ref:"Projects"
        }
    ]
});
userSchema.plugin(passportLocalMongoose,{
    selectFields: 'name email phone DOB skills type '
});
module.exports = mongoose.model('User',userSchema);