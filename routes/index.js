//from app.js we moved the routes to here.
//then we made the app.gets into just the functions 
//the functions are now 'pointed at by the exports object with respective names to identify
//each function. From app.js we can call these functions. This makes it modular for 
//ease of maintenance.

//home
//with express we can pass info to a template, to override a setting or fill in a var
//by default it knows to look in views and it also knows its and ejs view
exports.home = function(req, res) {         //when a req comes in for '/' then this app.get() will respond
  res.render('home', {
    title : "Star Wars Movies"   //pass in the test for title tag to template
  }); 
};

//star wars episode server
exports.movie_single =  function(req, res){   //this get responds only to request for '/darth' requests
  var episode_number = req.params.episode_number; //the episode number is saved to this variable from the incoming request
  res.send("This is the page for ep. " + episode_number);
};

//not found
//express uses this to respond to all not found requests so that 
//we dont have to make one for each possible not found request
exports.notFound = function(req, res){
  res.send("This is not the page your are looking for..."); 
};