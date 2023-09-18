const PDFDocument = require("pdfkit");
const fs = require("fs");
const db = require("../config/database");

const createSKCK = (req, res) => {
  const {
    nik,
    nama,
    jenis_kelamin,
    tempat_tanggal_lahir,
    agama,
    status_perkawinan,
    kewarganegaraan,
    pekerjaan,
    alamat,
  } = req.body;

  // Membuat instance PDFDocument
  const doc = new PDFDocument();

  // Membuat nama file PDF
  // const pdfPath = `path/to/save/${nik}-skck.pdf`;
  const pdfPath = `pdfs/${nik}-skck.pdf`;

  // Mengalihkan output PDF ke file
  doc.pipe(fs.createWriteStream(pdfPath));

  // Menambahkan konten ke PDF
  doc
    .fontSize(20)
    .text("Surat Keterangan Catatan Kepolisian", { align: "center" });
  doc.fontSize(12).text(`NIK               : ${nik}`);
  doc.fontSize(12).text(`Nama              : ${nama}`);
  doc.fontSize(12).text(`Jenis Kelamin     : ${jenis_kelamin}`);
  doc.fontSize(12).text(`TTL               : ${tempat_tanggal_lahir}`);
  doc.fontSize(12).text(`Agama             : ${agama}`);
  doc.fontSize(12).text(`Status Perkawinan : ${status_perkawinan}`);
  doc.fontSize(12).text(`Kewarganegaraan   : ${kewarganegaraan}`);
  doc.fontSize(12).text(`Pekerjaan         : ${pekerjaan}`);
  doc.fontSize(12).text(`Alamat            : ${alamat}`);

  // Tambahkan informasi lainnya sesuai kebutuhan

  // Mengakhiri PDF
  doc.end();

  // Menyimpan path PDF ke database
  const sqlQuery = `
    INSERT INTO surat_skck
    (nik, nama, jenis_kelamin, tempat_tanggal_lahir, agama, status_perkawinan, kewarganegaraan, pekerjaan, alamat, pdf_path)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    nik,
    nama,
    jenis_kelamin,
    tempat_tanggal_lahir,
    agama,
    status_perkawinan,
    kewarganegaraan,
    pekerjaan,
    alamat,
    pdfPath,
  ];
  db.query(sqlQuery, values, (err, result) => {
    if (err) {
      console.error("Error running query:", err);
      return res.status(500).json({ error: "Error in running query" });
    }
    console.log("PDF saved:", pdfPath);
    return res.json({ message: "SKCK created successfully", pdfPath });
  });
};

module.exports = {
  createSKCK,
};
