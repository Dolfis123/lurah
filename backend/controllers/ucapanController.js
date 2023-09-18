const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");
const db = require("../config/database");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const createUcapan = (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: "Error uploading file" });
    }
    const { pesan } = req.body;

    const sqlQuery = "INSERT INTO ucapanlurah (pesan, image) VALUES (?,?)";
    const values = [pesan, req.file.filename];

    db.query(sqlQuery, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Error in running query" });
      }
      return res.json({ Status: "Successful" });
    });
  });
};

const getAllUcapan = (req, res) => {
  const sqlQuery = "SELECT * FROM ucapanlurah";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      return res.json({ Error: "Get Ucapan error in sql" });
    }
    return res.json({ Status: "Success", Result: result });
  });
};
const deleteUcapan = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM ucapanlurah WHERE id = ?";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ Status: "Error", Error: "Error deleting Ucapan", err });
    }
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ Status: "Error", Error: "Pegawai not found" });
    }
    return res.json({ Status: "Success" });
  });
};

const updateUcapan = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "update ucapanlurah set pesan = ? where id = ?";
  db.query(sqlQuery, [req.body.pesan, id], (err, result) => {
    if (err) return res.json({ Error: "update Ucapan error in sql" });
    return res.json({ Status: "Successful" });
  });
};

const getById = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "SELECT * FROM ucapanlurah WHERE id = ?";
  db.query(sqlQuery, [id], (err, result) => {
    if (err) return res.json({ Error: "Get Ucapan Error" });
    return res.json({ Status: "Success", Result: result });
  });
};

module.exports = {
  createUcapan,
  getAllUcapan,
  deleteUcapan,
  updateUcapan,
  getById,
};
