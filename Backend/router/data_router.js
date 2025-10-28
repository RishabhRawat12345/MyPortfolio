const express = require("express");
const router = express.Router();

const User_Controllers = require("../Contollers/data_Controllers");

// POST route
router.post("/data", User_Controllers);

module.exports = router;
