// Required NPM Packages for Dependencies
var express = require("express");
var path = require("path");

// Set up of the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Set up of the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

// Routing Info
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});