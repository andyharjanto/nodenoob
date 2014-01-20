/// Andy Harjanto
/// January 19,2014
/// We're going to implement a simple REST service with JSON as the data exchange
/// With MVC pattern
/// You can use CURL or other HTTP utility as a client. 
/// We'll do the simplest form first. 

// use express to route request and http communication
/// you can do many different ways of routing with express
var express = require('express');

var account = require('./controller/account.js'); // this is our own module

// setup app to parse Json and encode URL
app = express();
app.use(express.json());
app.use(express.urlencoded());

var port = process.env.port || 1337;

// Root API
app.get('/', function(req, res){
  res.send('Put some API usage here if you like');
});

//////////////////////////////
/// Simple Get
/// Example what it returns
/*
[
  {
    "userName": "mgray",
    "visited": 1390252064656
  },
  {
    "userName": "johnsmith",
    "visited": 1390252040618
  }
]
*/
app.get('/account', function(req, res) {
    account.getUsers(res);
    });

/////////////////////
// Simple Post 
/// Example of the body POST (note, the client must set Content-Type: application/json)
/*
   { 
    "userName":"mgray"
   }
*/

app.post('/account', function(req, res) {
    account.addToGuestBook(req, res);
    });


///////////////////
/// HTTP DELETE
/// This just reset the account

app.delete('/account', function(req,res) {
    account.reset();
    });

app.listen(port);
