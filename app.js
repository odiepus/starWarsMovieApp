var express = require("express"); //object to use express features

var app = express(); //object for use in app with express features

//Routes
//this app serves the web side with whatever it requests.
//order matters!!! if the not found is top route then it take precedence

//home
app.get('/', function(req, res) {         // '/' get the req'ed file from root folder and res's 
  res.send("This is a server response");  //this app.get is for a specific req; the '/' req
});

//star wars episode server
app.get('/star_wars_episode/:episode_number?', function(req, res){   //this get responds only to request for '/darth' requests
  var episode_number = req.params.episode_number; //the episode number is saved to this variable from the incoming request
  res.send("This is the page for ep. " + episode_number);
});

//not found
//express uses this to respond to all not found requests so that 
//we dont have to make one for each possible not found request
app.get("*", function(req, res){
  res.send("This is not the page your are looking for..."); 
})

app.listen(3000, function() {
  console.log("Server is responding to request");
});