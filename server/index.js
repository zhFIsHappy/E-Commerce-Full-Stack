// Already done?
const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');

const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const PORT = 3000;
const app = express();



const DB1 = 'mongodb+srv://AnnaF2022:cocoiscute@cluster0.t2heder.mongodb.net/?retryWrites=true&w=majority';

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose.connect(DB1).then(()=>{
    console.log('Connected to DB');
}).catch((e) =>{
    console.log(e);
});

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`connected at port${PORT}`);
});