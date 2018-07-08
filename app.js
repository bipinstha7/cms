const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require('path');

// load routes
const home = require("./routes/home/home");
const admin = require('./routes/admin/admin');
const posts = require('./routes/admin/posts');

// set static folder
// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'public');

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// use routes
app.use("/",home);
app.use("/admin",admin);
app.use("/admin/posts",posts);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
