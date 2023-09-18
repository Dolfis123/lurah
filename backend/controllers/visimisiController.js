const db = require("../config/database"); // Ganti dengan path sesuai dengan struktur folder Anda

// Fungsi untuk menambahkan data visi dan misi ke database
const tambahVisiMisi = (req, res) => {
  const { visi, misi } = req.body;

  const query = "INSERT INTO visimisi (visi, misi) VALUES (?, ?)";
  db.query(query, [visi, misi], (err, result) => {
    if (err) {
      console.error("Gagal menyimpan data visi dan misi:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menyimpan data visi dan misi." });
    }

    console.log("Data visi dan misi berhasil disimpan:", result);
    return res
      .status(200)
      .json({ message: "Data visi dan misi berhasil disimpan." });
  });
};

// Fungsi untuk mendapatkan semua data visi dan misi
const getAllVisiMisi = (req, res) => {
  const query = "SELECT * FROM visimisi";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data visi dan misi:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data visi dan misi." });
    }

    console.log("Data visi dan misi berhasil didapatkan:", result);
    return res.status(200).json(result);
  });
};

// Get by Id
// Fungsi untuk mendapatkan data visi-misi berdasarkan ID
const getVisiMisiById = (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM visimisi WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data visi-misi:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data visi-misi" });
    }

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "Data visi-misi tidak ditemukan." });
    }

    console.log("Data visi-misi berhasil didapatkan:", result[0]);
    return res.status(200).json(result[0]);
  });
};

//Method Delete
// Fungsi untuk menghapus data visi dan misi berdasarkan ID
const deleteVisiMisiById = (req, res) => {
  const id = req.params.id;

  const query = "DELETE FROM visimisi WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus data visi dan misi:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menghapus data visi dan misi." });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data visi dan misi tidak ditemukan." });
    }

    console.log("Data visi dan misi berhasil dihapus:", result);
    return res
      .status(200)
      .json({ message: "Data visi dan misi berhasil dihapus." });
  });
};

//Method Update
// Fungsi untuk memperbarui data visi dan misi berdasarkan ID
const updateVisiMisiById = (req, res) => {
  const id = req.params.id;
  const { visi, misi } = req.body;

  const query = "UPDATE visimisi SET visi = ?, misi = ? WHERE id = ?";
  db.query(query, [visi, misi, id], (err, result) => {
    if (err) {
      console.error("Gagal memperbarui data visi dan misi:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal memperbarui data visi dan misi." });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data visi dan misi tidak ditemukan." });
    }

    console.log("Data visi dan misi berhasil diperbarui:", result);
    return res
      .status(200)
      .json({ message: "Data visi dan misi berhasil diperbarui." });
  });
};

module.exports = {
  tambahVisiMisi,
  getAllVisiMisi,
  getVisiMisiById,
  deleteVisiMisiById,
  updateVisiMisiById,
};
