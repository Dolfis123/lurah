const db = require("../config/database");

// CREATE - Menyimpan gambar ke database
exports.createImage = (req, res) => {
  const { filename } = req.body;
  if (!filename) {
    return res.status(400).json({ error: "Nama file gambar diperlukan." });
  }

  const sqlQuery = "INSERT INTO images (filename) VALUES (?)";
  db.query(sqlQuery, [filename], (err, result) => {
    if (err) {
      console.error("Gagal menyimpan gambar:", err);
      return res.status(500).json({ error: "Gagal menyimpan gambar" });
    }

    return res.status(201).json({ message: "Gambar berhasil disimpan." });
  });
};

// READ - Mengambil daftar semua gambar
exports.getAllImages = (req, res) => {
  const sqlQuery = "SELECT * FROM images";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error("Gagal mengambil gambar:", err);
      return res.status(500).json({ error: "Gagal mengambil gambar" });
    }

    return res.json(result);
  });
};

// UPDATE - Mengupdate gambar
exports.updateImage = (req, res) => {
  const { id } = req.params;
  const { filename } = req.body;
  if (!filename) {
    return res.status(400).json({ error: "Nama file gambar diperlukan." });
  }

  const sqlQuery = "UPDATE images SET filename = ? WHERE id = ?";
  db.query(sqlQuery, [filename, id], (err, result) => {
    if (err) {
      console.error("Gagal mengupdate gambar:", err);
      return res.status(500).json({ error: "Gagal mengupdate gambar" });
    }

    return res.json({ message: "Gambar berhasil diupdate." });
  });
};

// DELETE - Menghapus gambar berdasarkan ID
exports.deleteImage = (req, res) => {
  const { id } = req.params;

  const sqlQuery = "DELETE FROM images WHERE id = ?";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus gambar:", err);
      return res.status(500).json({ error: "Gagal menghapus gambar" });
    }

    return res.json({ message: "Gambar berhasil dihapus." });
  });
};
