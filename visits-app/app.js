const express = require("express");
const redis = require("redis");

var app = express();
var client = redis.createClient({
    // host: 'https://www.redisexample.com' -how to create redis client without docker
    host: 'redis-server',        // Connects to container declared 'redis-server'
    port: 6379                   // Without explicit declaration, port is set to 6379 anyways
});
client.set("visits", 0);

app.get("/", function(req, res){
    client.get("visits", function(error, visits){
        client.set("visits", parseInt(visits) + 1);
        res.send("You are the " + visits + " visit");
    })
});

app.listen(8081, function(){
    console.log("Listening on 8081");
});
