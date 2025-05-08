//Packages
const express = require("express");
const router = express.Router();
const path = require("path");

//Routes for pages
router.get("/", (req, res) => {
  res.send("Initial Page");
});

//Exporting pages
module.exports = router;
