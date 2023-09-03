const mongoose = require('mongoose');

require('dotenv').config();


const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(console.log('Database connected successfully'))
    .catch(error=>{
        console.log('DB not connected');
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = connectDB;