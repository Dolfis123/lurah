const db = require("../config/database");

const ajukanSuratTidakMampu = (req, res) => {
  const { nama, ktp, kk, noHp } = req.body;

  // Lakukan validasi data di sini jika diperlukan

  // Simpan data permohonan ke basis data
  // Misalnya, menggunakan model SuratTidakMampu di sini

  // Kirim respon sukses atau error ke klien
  res.json({ message: "Permohonan surat berhasil diajukan." });
};

module.exports = {
  ajukanSuratTidakMampu,
};
