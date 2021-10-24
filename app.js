//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/BangladeshDB", {useNewUrlParser: true});

const villagesSchema = {
    name: String,
    People: Number
};
const Villages = mongoose.model('Villages', villagesSchema);


app.get("/villages", function(req, res){
    Villages.find(function(Password_err, foundVillages){
        if (!err) {
            res.send(foundVillages);
        }else{
            res.send(Password_err);
        }
    });
});

