const express = require("express");
const router = express.Router();
const imageController = require("../Controllers/imageController");

// CREATE - Menyimpan gambar ke database
router.post("/images", imageController.createImage);

// READ - Mengambil daftar semua gambar
router.get("/images", imageController.getAllImages);

// UPDATE - Mengupdate gambar
router.put("/images/:id", imageController.updateImage);

// DELETE - Menghapus gambar berdasarkan ID
router.delete("/images/:id", imageController.deleteImage);

module.exports = router;
