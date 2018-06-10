const express = require("express");
const router = express.Router();

// index route
router.get("/", (req, res) => {
  res.render("admin/index");
});

// about route
router.get("/about", (req, res) => {
  res.render("admin/about");
});

// login route
router.get("/login", (req, res) => {
  res.render("admin/login");
});

// register route
router.get("/register", (req, res) => {
  res.render("admin/register");
});

module.exports = router;