// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Require the data from the friends.js file
var friends = require("../data/friends.js");

// Set up routes, but first start with export
module.exports = function(app) {
    // This route displays the JSON format of the friends data in the friends.js file
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // This route will calculate and display the best match when the survey submit button is clicked
    app.post("/api/friends", function(req, res) {
        
    });

};