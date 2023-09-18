const express = require("express");
const router = express.Router();
const suratController = require("../controllers/formSuratController");

router.post("/ajukan-surat-tidak-mampu", suratController.ajukanSuratTidakMampu);

module.exports = router;
