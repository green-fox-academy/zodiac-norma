var express = require('express');
var app = express();

var port = process.env.PORT || 8080

// app.use(express.static());

app.get('/', function(req, res){
    res.sendfile(__dirname + '/first-heroku-app/src/index.html');
})

app.listen(port, function(){
    console.log('server is running')
})