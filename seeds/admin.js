const mongoose = require('mongoose');
const User=require('../models/user');


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
    const email = "admin1234567@gmail.com"
    const username="admin1234567";
    const type="Admin"
    const password="admin1234567";
    const newadmin=new User({email,type,username});
    const registeredAdmin=await User.register(newadmin,password);
    console.log('Successfull Registration');
    console.log(registeredAdmin);
    const admin = await User.find({});
    console.log(admin);
}

seedDB().then(() => {
    mongoose.connection.close();
})