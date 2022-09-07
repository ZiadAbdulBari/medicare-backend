const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const adminRouter = require('./routers/home.router');
const userRouter = require('./routers/user.router');
const appointmentRouter = require('./routers/appointment.router');
const adminPannel = require('./controllers/admin.comtroller');


//body parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/admin',adminPannel);
app.use('/home/',adminRouter);
app.use('/user/',userRouter);
app.use('/doctor/',appointmentRouter);

//404 page
app.use(function(req, res, next){
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
      res.render('pages/404', { url: req.url });
      return;
    }
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

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