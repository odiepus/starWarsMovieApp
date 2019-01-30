var express = require("express"); //object to use express features

var app = express(); //object for use in app with express features

app.set('view engine', 'ejs');  //using express we set the view eng to ejs

var routes = require('./routes'); //tell app.js where to get routes from

//Routes
//this app serves the web side with whatever it requests.
//order matters!!! if the not found is top route then it take precedence

//home
//with express we can pass info to a template, to override a setting or fill in a var
//by default it knows to look in views and it also knows its and ejs view
app.get('/', routes.home);

//star wars episode server
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//not found
//express uses this to respond to all not found requests so that 
//we dont have to make one for each possible not found request
app.get("*", routes.notFound);

app.listen(3000, function() {
  console.log("Server is responding to request");
});
