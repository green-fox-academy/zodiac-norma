'use strict'

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

// db.run("INSERT into user(col1,col2,col3) VALUES (val1,val2,val3)");
db.all("SELECT * FROM user", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row);
        })
    });
db.close();
