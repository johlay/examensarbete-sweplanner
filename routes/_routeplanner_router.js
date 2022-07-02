const routeplannerController = require("../controllers/_routeplanner_controller");

const express = require("express");
const router = express.Router();

router.get("/stop-lookup", routeplannerController.routeplanner_stop_lookup_get);
router.get("/routes", routeplannerController.routeplanner_routes_get);

module.exports = router;
