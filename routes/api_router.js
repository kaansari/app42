var express = require("express");

var api = express.Router();



api.get("/users", function (req, res){

    res.send("get users get");
});
api.post("/user", function (req, res){


    res.send("posted user get");
});


api.get("/messages", function (req, res){});
api.post("/message", function (req, res){});

module.exports = api;
