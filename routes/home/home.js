const express = require("express");
const router = express.Router();

// specific route preventing to access from admin
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

// index route
router.get("/", (req, res) => {
  res.render("home/index");
});

// about route
router.get("/about", (req, res) => {
  res.render("home/about");
});

// login route
router.get("/login", (req, res) => {
  res.render("home/login");
});

// register route
router.get("/register", (req, res) => {
  res.render("home/register");
});

module.exports = router;