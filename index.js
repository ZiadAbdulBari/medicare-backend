const express = require('express');
const app = express();
require('dotenv').config();
const router = require('./routers/home.router');

app.use('/admin/',router);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Server Connected at port',PORT);
})