const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();



const DB1 = 'mongodb+srv://AnnaF2022:cocoiscute@cluster0.t2heder.mongodb.net/?retryWrites=true&w=majority';
app.use(authRouter);

mongoose.connect(DB1).then(()=>{
    console.log('Connected to DB');
}).catch((e) =>{
    console.log(e);
});
app.listen(PORT, ()=>{
    console.log(`connected at port${PORT}`);
});