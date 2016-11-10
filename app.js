var express = require("express");
var path = require("path");
var fs = require("fs");
var morgan = require("morgan");

//custom require

var apiRouter = require("./routes/api_router");

var app = express();



// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));




var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api", apiRouter);
    
   
app.use(function (req,res){
    
    res.status(404);
    res.send("File Not found");
});

app.use(function(err, req, res, next){
    
    console.log(err);
    next(err);
    
});


// Send 500 to the client
app.use(function (err, req, res, next) {
    
    
    res.status(500);
    res.send("Internal server error");
    
});


app.listen(3000, function () { console.log("App Started at port 3000"); });
