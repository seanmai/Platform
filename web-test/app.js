const express = require("express");

var app = express();

app.get("/", (req, res) => { // same as function(req, res){   }
    res.send('Hello world');
});

app.listen(8080, function(){
    console.log("Listening on 8080");
});
