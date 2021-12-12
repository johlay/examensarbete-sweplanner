const userController = require("../controllers/user_controller");
const { verifyJwtAccessToken } = require("../middlewares/");

const express = require("express");
const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.put(
  "/search-results",
  [verifyJwtAccessToken],
  userController.user_search_update
);

module.exports = router;
