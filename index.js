var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
app.set("view engine", "hbs");
mongoose.connect("mongodb://localhost/");

app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log('listening on port 3000');
});

app.get("/", function(res, req){
  console.log("helllo");
});
