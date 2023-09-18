const db = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Handler untuk endpoint login
const loginPilih = (req, res) => {
  const { email, password } = req.body;

  // Cari pengguna berdasarkan email di tabel "login" di database
  const sqlQuery = "SELECT * FROM login WHERE email = ?";
  db.query(sqlQuery, [email], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res
        .status(500)
        .json({ Status: "Error", Error: "Error in server" });
    }

    if (result.length === 0) {
      return res.json({ Status: "Error", Error: "Wrong Email or Password" });
    }

    const user = result[0];

    // Bandingkan kata sandi yang dikirim dengan kata sandi yang disimpan di database
    bcrypt.compare(password, user.password, (err, passwordMatches) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res
          .status(500)
          .json({ Status: "Error", Error: "Error in server" });
      }

      if (passwordMatches) {
        // Generate token JWT untuk otentikasi
        const token = jwt.sign({ userId: user.id }, "secretKey");
        return res.json({ Status: "Success", Token: token });
      } else {
        return res.json({ Status: "Error", Error: "Wrong Email or Password" });
      }
    });
  });
};

const register = (req, res) => {
  const { email, password } = req.body;

  // Hash kata sandi sebelum menyimpannya dalam database
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res
        .status(500)
        .json({ Status: "Error", Error: "Error in server" });
    }

    // Simpan data pengguna baru ke dalam database
    const insertUserQuery = "INSERT INTO login (email, password) VALUES (?, ?)";
    db.query(insertUserQuery, [email, hashedPassword], (err) => {
      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ Status: "Error", Error: "Error in server" });
      }

      return res.json({ Status: "Success", Message: "User registered" });
    });
  });
};

module.exports = {
  loginPilih,
  register,
};
