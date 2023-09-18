const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginControlle");

router.post("/login", loginController.loginPilih);
router.post("/regis", loginController.register);
// router.post("/loginn", loginController.loginAdd);

module.exports = router;
