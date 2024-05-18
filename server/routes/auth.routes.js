const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/api/users/signup", AuthController.signUp);

router.post("/api/users/signin", AuthController.signIn);

module.exports = router;
