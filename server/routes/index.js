const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.sendStatus(200));

router.use("/user", require("./user_router"));

module.exports = router;
