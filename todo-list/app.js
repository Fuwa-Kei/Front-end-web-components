const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log("Error: current day doesnt exist");
    }

    // if (currentDay === 6) {
    //     day = "Saturday";
    // } else if (currentDay === 5) {
    //     day = "Friday";
    // } else if (currentDay === 4) {
    //     day = "Thursday";
    // } else if (currentDay === 3) {
    //     day = "Wednesday";
    // } else if (currentDay === 2) {
    //     day = "Tuesday";
    // } else if (currentDay === 1) {
    //     day = "Monday";
    // } else {
    //     day = "sunday";
    // }
        // set marker to replace in ejs file
        res.render("list", {kindOfDay: day});
});

app.listen(3000, function() {
    console.log("Server started on PORT 3000");
});