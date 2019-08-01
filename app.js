var express = require("express"),
	app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES

// Landing page
app.get("/", function(req, res){
	res.render("landing");
});

// Test Profile Page
app.get("/soarwithbarbie", function(req, res){
	var username = "soarwithbarbie";
	res.render("test-profile", {titleAddon: username});
});

// SERVICES PATH
app.get("/services", function(req, res){
	res.render("services", {titleAddon: "Services"});
});





// EXTRA STUFF

// Color Pallet Page
app.get("/colors", function(req, res){
	res.render("color-pallet");
});

app.get("/*", function(req, res){
	res.redirect("/");
});

app.listen(3000, function(){
	console.log("Server running, port 3000");
});