const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

// need to define items first to use in get method
let items = [];
let workItems = [];

app.get("/", function(req, res) {

// date is in date module (date.js)
    let day = date.getDate();
        // set marker to replace in ejs file
        res.render("list", {listTitle: day, newListItems: items});
});

 app.get("/work", function(req, res) {
        res.render("list", {listTitle: "Work List", newListItems: workItems});
    });

    app.post("/", function(req, res) {
        let item = req.body.newItem;

        if (req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work");
        } else {
            items.push(item);
            // redirect to home to render
            res.redirect("/");
        }
    });

   app.get("/about", function(req, res) {
        res.render("about");
   })

app.listen(3000, function() {
    console.log("Server started on PORT 3000");
});