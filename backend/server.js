const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database"); // Sesuaikan dengan konfigurasi database Anda
const pegawaiController = require("./Controllers/pegawaiController"); // Import controller

const sejarahRoutes = require("./routes/sejarahRoute");
const visimisRoutes = require("./routes/visimisiRoute");
const loginRoutes = require("./routes/loginRoute");
const pegawaiRoutes = require("./routes/pegawaiRoute");
const suratRoutes = require("./routes/FormSuratRoute");
const skckRoute = require("./routes/skckRoute");
const ucapanRoute = require("./routes/ucapanRoute");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(pegawaiRoutes);
app.use(sejarahRoutes);
app.use(visimisRoutes);
app.use(loginRoutes);
app.use(suratRoutes);
app.use(skckRoute);
app.use(ucapanRoute);

// Rute untuk mengambil data struktur organisasi
app.get("/struktur-organisasi", (req, res) => {
  // Query SQL untuk mengambil data pegawai dari database
  const sqlQuery = "SELECT * FROM pegawai"; // Sesuaikan dengan nama tabel Anda

  // Eksekusi query SQL
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Error executing SQL query" });
    }

    // Transformasi data ke struktur hierarkis menggunakan controller
    const strukturOrganisasi =
      pegawaiController.transformDataToHierarchy(result);

    // Kirim struktur organisasi sebagai respons JSON
    res.json(strukturOrganisasi);
  });
});

//method get logout
app.use(
  cors({
    origin: "http://localhost:5173", // Ganti dengan asal yang sesuai
    credentials: true, // Izinkan mode kredensial
  })
);

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

const port = 3040;
app.listen(port, () => console.log(`Server berjalan di port ${port}`));
