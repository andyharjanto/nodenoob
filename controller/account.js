

exports.addToGuestBook = function(req, res) {
    return new addToGuestBook(req,res);
    }

exports.getUsers = function(res ) { 
    return new getUsers(res);
    }

exports.reset = function() {
    return new reset();
    }

var Guests = [];

/// Simply just user to the guest book
function addToGuestBook(req, res) {
      var userName = req.body.userName;
      if (!userName) {
          res.send("Missing parameter: userName");
          return;
         };

     var user = {};
     user.userName = userName;
     user.visited = Date.now();
     Guests.unshift(user); // add user at the beginning of the array
     res.send(user);
    };


/// Getting all the guests, sorted by most recently visited
function getUsers(res) {
    return res.send(Guests);
    }


function reset() {
    Guests = [];
    };






