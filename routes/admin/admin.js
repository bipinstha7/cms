const express = require("express");
const router = express.Router();

// override default home layout with admin layout
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// index route
router.get("/", (req, res) => {
  res.render("admin/index");
});

router.get("/posts", (req, res) => {
  res.render("admin/posts");
});

// dashboard route
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});

module.exports = router;