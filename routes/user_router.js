const userController = require("../controllers/user_controller");
const { verifyJwtAccessToken } = require("../middlewares/");

const express = require("express");
const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.put(
  "/search-history",
  [verifyJwtAccessToken],
  userController.user_search_update_put
);

module.exports = router;
