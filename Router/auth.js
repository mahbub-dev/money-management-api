const router = require("express").Router();
const { registerUser, loginUser } = require("../Controller/authController.js");

// register user
router.post("/register", registerUser);

// login user
router.get("/login/:email/:password", loginUser);
module.exports = router;
