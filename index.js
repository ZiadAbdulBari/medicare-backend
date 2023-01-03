const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const adminPannel = require('./controllers/admin.comtroller');
const adminauth = require('./routers/admin/adminauth.router');
const adminDashboard = require('./routers/admin/adminDashboard.router');
const clienthome = require('./routers/admin/clienthome.router');
const doctor = require('./routers/admin/doctor.router');
const appointment = require('./routers/admin/appointment.router');

const userauth = require('./routers/client/userauth.router');
const homepage = require('./routers/client/homepage.router');
const appointmentByClient = require('./routers/client/appointment.router');
const aboutus = require('./routers/aboutus.router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
//admin panel route
app.use('/admin', adminPannel);
app.use('/admin/adminauth/', adminauth);
app.use('/admin/dashboard/',adminDashboard);
app.use('/admin/clienthome', clienthome);
app.use('/admin/doctor/', doctor);
app.use('/admin/appointment',appointment);

// api
app.use('/api/user/', userauth);
app.use('/api/homepage/', homepage);
app.use('/api/doctor/appointment/', appointmentByClient);

app.use('/aboutus/', aboutus);

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
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log('Server Connected at port',PORT);
})