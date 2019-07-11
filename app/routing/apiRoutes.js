
// Require the data from the friends.js file
var friends = require("../data/friends");

// Set up routes, but first start with export
module.exports = function(app) {
    // This route displays the JSON format of the friends data in the friends.js file
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // This route will calculate and display the best match when the survey submit button is clicked
    app.post("/api/friends", function(req, res) {
        var userData = [];
        var closestScore = 100;
        var differenceTotal = 0;
        var quizLength = 10;
        var matchedFriend;
        var matchedFriendPic;

        // Push user responses to the userData array
        for (i=0; i < quizLength; i++) {
            userData.push(req.body.scores[i]);
        }

        for (i=0; i < friends.length; i++) {
            differenceTotal = 0;
            for (j=0; j < quizLength; j++) {
                differenceTotal += Math.abs(userData[j] - friends[i].scores[j]);
            }
            if (differenceTotal < closestScore) {
                closestScore = differenceTotal;
                matchedFriend = friends[i].name;
                matchedFriendPic = friends[i].photo;
            }
        }

        var theMatch = [
            {
                name: matchedFriend,
                photo: matchedFriendPic
            }
        ];


        // Return matched friend's data as JSON to be interpreted on the modal on the survey page
        console.log("Your FRIENDS character match is: " + matchedFriend + "!")
        res.json(theMatch);
    });

};