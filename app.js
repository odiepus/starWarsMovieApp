var express = require("express"); //object to use express features

var app = express(); //object for use in app with express features

app.set('view engine', 'ejs');  //using express we set the view eng to ejs

//Routes
//this app serves the web side with whatever it requests.
//order matters!!! if the not found is top route then it take precedence

//home
//with express we can pass info to a template, to override a setting or fill in a var
//by default it knows to look in views and it also knows its and ejs view
app.get('/', function(req, res) {         //when a req comes in for '/' then this app.get() will respond
  res.render('home', {
    title : "Star Wars Movies"   //pass in the test for title tag to template
  }); 
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