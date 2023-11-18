const express = require('express');
const path = require('path');
const session = require('express-session');//session to do
const exphbs = require('express-handlebars');//handlebars to do
const routes = require('./controllers');//routes to do
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

const sess={
    secret:'Super secret secret',
    resave:false,
    saveUninitialized:true,
};

 app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));//todo public

app.use(routes);//todo routes

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>console.log('Now listening'));
});