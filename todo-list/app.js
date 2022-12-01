const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

// need to define items first to use in get method
let items = ["buy food", "cook food", "eat food"];

app.get("/", function(req, res) {
    let today = new Date();

    //  get current day in gb format
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-GB", options);

    
        // set marker to replace in ejs file
        res.render("list", {kindOfDay: day, newListItems: items});
});

    app.post("/", function(req, res) {
        let item = req.body.newItem;
        items.push(item);
        // redirect to home to render
        res.redirect("/");

    });

app.listen(3000, function() {
    console.log("Server started on PORT 3000");
});