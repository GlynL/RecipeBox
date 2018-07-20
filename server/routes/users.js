const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");

router.post("/new", userControllers.createUser);

module.exports = router;
