//create simple web server 
//run on port 8080
//use express to handle requests
//use body-parser to parse request body
//use mongoose to interact with mongodb
//use comments.js to handle comments
//use comments.html as the default page
//use comments.css for styling
//use comments.js for client side scripting
//use comment.js as the model for comments
//use comments as the collection in mongodb

/*
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./comment');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/comments');

app.get('/comments', function(req, res) {
    Comment.find(function(err, comments) {
        res.send(comments);
    });
});

app.post('/comments', function(req, res) {
    var comment = new Comment(req.body);
    comment.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send(200);
        }
    });
});

app.listen(8080);
console.log('Server running on port 8080');
*/

console.log('Create web server');