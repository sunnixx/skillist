const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

require('dotenv').config();

//Connect Database
mongoose.connect(process.env.DB_HOST,{useNewUrlParser: true},(err) => {
    if(err) {throw new Error(err)}
    console.log(`Database connected`);
})

const app = express();

require('./config/passport')

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname.split('/config')[0] + '/Client'));

const mainRoutes = require('./config/routes');
app.use(mainRoutes);

app.listen(process.env.PORT || 3000,(err) => {
    if(err) {throw new Error(err)}
    console.log(`Server connected to http://localhost:3000`);
})