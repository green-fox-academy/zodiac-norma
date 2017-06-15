var express = require('express');
var app = express();

var port = process.env.PORT || 8080 || 9876

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/src/app/slider/pics'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/dist/index.html');
})

app.listen(port, function(){
    console.log('server is running')
})
