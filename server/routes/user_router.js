const userController = require("../controllers/user_controller");

const express = require("express");
const router = express.Router();

router.post("/register", userController.register);

module.exports = router;
