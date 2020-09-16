const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//setup express app
const app = express();


app.use(cors());

//connect to mongo db
mongoose.connect('mongodb://localhost/mystudents', { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: 1, });
mongoose.Promise = global.Promise;

app.use(express.json());

//Initialized Routes
app.use('/api/students',require('./routes/api'));

//error handling middleware
app.use((err,req,res,next)=>{
    res.send(err.message);
});


//starting server
app.listen(process.env.port || 4000,()=>{
    console.log('server started');
});