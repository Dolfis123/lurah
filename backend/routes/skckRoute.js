const express = require("express");
const router = express.Router();
const skckController = require("../controllers/skckController");

router.post("/buat-surat-skck", skckController.createSKCK);

module.exports = router;
