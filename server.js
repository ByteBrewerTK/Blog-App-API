const express = require('express');
const server = express();

require('dotenv').config();

server.use(express.json());

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>{
    console.log(`Server created successfully at port ${PORT}`);
})

const blogRouter = require('./routes/blogs');
server.use('/api/v1', blogRouter);

server.get('/',(req, res)=>{
    res.send('<h1>This is homepage</h1>');
})

const connectDB = require('./config/database');
connectDB();