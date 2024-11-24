const express = require("express");
const router = express.Router();

// Define routes here
router.get("/", (req, res) => {
  res.send("Welcome to the Contacts API!");
});

module.exports = router;
