const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');//handlebars to do
const routes = require('./controllers');//routes to do
const sequelize = require('./config/connection');
const session = require('express-session');
const { strict } = require('assert');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();

const PORT = process.env.PORT || 3001;

const sess={
    secret:'Super secret secret',
    cookie:{
        maxAge:1000*60*60*2,
        httpOnly:true,
        secure:false,
        sameSite:'strict',
    },
    resave:false,
    saveUninitialized:true,
    store: new SequelizeStore({
        db:sequelize,
    }),
};

 app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));//todo public

app.use(routes);//todo routes

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT,()=>console.log('Now listening'));
});