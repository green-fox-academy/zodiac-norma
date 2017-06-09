var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/booking-frontend-ng/dist/index.html');
})

app.listen(port, function(){
    console.log('server is running')
})