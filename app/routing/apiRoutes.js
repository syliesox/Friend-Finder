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
        // Hold matched friend's data here
        var matchedFriend = {
            name: "",
            photo: "",
            differenceScore: ""
        };

        // Grab user's responses from the survey
        var userResponses = req.body;
        var userScores = userResponses.scores;
        // This variable will store the differences between the user's scores and each of the friends' scores
        var calculatedDifference;

        // Must loop through each of the friends to get their scores and calculate differences
        for (var i = 0; i < matchFriends.length; i++) {
            var friendsData = matchFriends[i];
            calculatedDifference = 0;

            // console.log(friendsData.name);

            // Now we need to loop through and get the scores of the friends
            for (var j = 0; j < friendsData.scores.length; j++) {

                var friendScore = friendsData.scores[i];
                var userScore = userScores[j];

                // Calculation of the differences of each respective score
                calculatedDifference += Math.abs(parseInt(userScore) - parseInt(friendScore));
            }

            if (calculatedDifference <= matchedFriend.differenceScore) {
                matchedFriend.name = friendScore.name;
                matchedFriend.photo = friendScore.photo;
                matchedFriend.differenceScore = calculatedDifference; 
            }
        }
        // Push user data to the matchFriends array on the friends.js file
        matchFriends.push(userResponses);

        // Return matched friend's data as JSON to be interpreted on the modal on the survey page
        res.json(matchedFriend);
    });

};