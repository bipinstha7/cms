const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// set static folder
app.use(express.static(__dirname + "/public"));

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// index route
app.get("/", (req, res) => {
  res.render("home/index");
});

// about route
app.get("/about", (req, res) => {
  res.render("home/about");
});

// login route
app.get("/login", (req, res) => {
  res.render("home/login");
});

// register route
app.get("/register", (req, res) => {
  res.render("home/register");
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});