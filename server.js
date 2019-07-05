var express = require("express");
var  mongoose =require("mongoose");
var expressHandelbars = require("express-handlebars");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();


app.use(express.static(__dirname + "/public"));


app.engine("hanslebars",expressHandlebars({
    defaultLayout:"main"
}));

app.use(bodyParser.urlencoded({ 
    extended: false
}));


app.use(router);

var db= process.env.MONGODB_URI || 