const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const adminRouter = require('./routers/home.router');
const userRouter = require('./routers/user.router');

//body parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/admin/',adminRouter);
app.use('/user/',userRouter);

//database connection
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Database Connected");
}).catch(error=>{
    console.log(error);
    process.exit(1);
});

//server connection
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Server Connected at port',PORT);
})