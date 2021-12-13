const routeplannerController = require("../controllers/routeplanner_controller");

const express = require("express");
const router = express.Router();

router.get("/stop-lookup", routeplannerController.routeplanner_stop_lookup_get);

module.exports = router;
