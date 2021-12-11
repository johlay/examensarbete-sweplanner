const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.sendStatus(200));

router.get("/user", require("./user_router"));

module.exports = router;
