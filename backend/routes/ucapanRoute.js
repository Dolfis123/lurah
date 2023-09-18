const express = require("express");
const router = express.Router();

const ucapanController = require("../controllers/ucapanController");

router.get("/lihat-ucapan", ucapanController.getAllUcapan);
router.post("/ucapan", ucapanController.createUcapan);
router.put("/edit-ucapan/:id", ucapanController.updateUcapan);
router.delete("/delete-ucapan/:id", ucapanController.deleteUcapan);
router.get("/ucapan/:id", ucapanController.getById);
module.exports = router;
