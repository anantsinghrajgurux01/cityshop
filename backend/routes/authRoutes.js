const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controllers/aurthcontroller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/user", logoutUser);


module.exports = router;