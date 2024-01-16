const express = require('express');
const app = express();
const statics = __dirname.replace("app","public");
const session = require('express-session');
const routers = require('../routes/index.router')();
const cors = require('cors');
app.set("port",process.env.PORT||8000);

app.use(express.json());
app.use(express.static(statics));
app.use(cors());
app.use(session({
  secret: 'aguante programar',
  resave: false,
  saveUninitialized: true
}))

for(let index in routers){
  app.use(routers[index]);
};

module.exports = app;