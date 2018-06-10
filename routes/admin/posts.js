const express = require("express");
const router = express.Router();

// override default home layout with admin layout
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// index route
router.get("/", (req, res) => {
  res.send("admin/index");
});


module.exports = router;