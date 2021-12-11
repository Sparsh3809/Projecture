const mongoose = require('mongoose');
const campground = require('../../BootCamp_Udemy/YelpCamp/models/campground');
const Project=require('../models/project');


mongoose.connect('mongodb://localhost:27017/projecture', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected');
});
const seedDB = async()=>{
    await Project.deleteMany({});
}

seedDB().then(() => {
    mongoose.connection.close();
})