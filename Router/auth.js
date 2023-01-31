const router = require("express").Router();
const { registerUser, loginUser } = require("../Controllers/authController.js");

// register user
router.post("/register", registerUser);

// login user
router.get("/login/:email/:password", loginUser);
module.exports = router;
