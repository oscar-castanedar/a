const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require('cookie-parser')
var fs=require('fs');
var https=require('https');
https.createServer({
  cert: fs.readFileSync('server.crt'),
  key: fs.readFileSync('server.key')
}, app).listen(8080, () => {
  console.log("Servidor express corriendo en el puerto 8080");
});

var app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(bodyparser.json());
app.use(cookieParser());

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname);

const createViewRoute = require('./Routes/create-view');

app.use('/', createViewRoute);

const updateDeleteRoute = require('./Routes/update-delete');

app.use('/:id', updateDeleteRoute);
