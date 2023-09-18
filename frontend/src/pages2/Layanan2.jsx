import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

function Layanan2() {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [tempat_tanggal_lahir, setTempatTanggalLahir] = useState("");
  const [agama, setAgama] = useState("");
  const [status_perkawinan, setStatusPerkawinan] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [alamat, setAlamat] = useState("");

  const generatePDF = async () => {
    try {
      console.log("Generating PDF...");
      const response = await axios.post(
        "http://localhost:3030/buat-surat-skck",
        {
          nik,
          nama,
          jenis_kelamin,
          tempat_tanggal_lahir,
          agama,
          status_perkawinan,
          kewarganegaraan,
          pekerjaan,
          alamat,
        },
        {
          responseType: "arraybuffer",
          timeout: 6000,
        }
      );
      console.log("Response from backend:", response);

      // Create a Blob from the response data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      console.log("PDF Blob:", pdfBlob);

      // Create a URL for the Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);
      console.log("PDF URL:", pdfUrl);

      // Open PDF in a new tab
      window.open(pdfUrl, "_blank");

      // Log success message
      console.log("PDF opened in a new tab");
    } catch (error) {
      console.error("Error generating PDF:", error);
      if (error.response) {
        console.log("Error response:", error.response);
        console.log("Error data:", error.response.data);
      }
    }
  };

  const handleNikChange = (event) => {
    setNik(event.target.value); // Mengupdate state NIK saat input berubah
  };

  const handleNamaLengkapChange = (event) => {
    setNama(event.target.value);
  };

  const handleJenisKelaminChange = (event) => {
    setJenisKelamin(event.target.value);
  };
  const handleTempatTangalLahir = (event) => {
    setTempatTanggalLahir(event.target.value);
  };
  const handleAgama = (event) => {
    setAgama(event.target.value);
  };

  const handleStatusPerkawinan = (event) => {
    setStatusPerkawinan(event.target.value);
  };
  const handleKewarganegaraan = (event) => {
    setKewarganegaraan(event.target.value);
  };
  const handlePekerjaan = (event) => {
    setPekerjaan(event.target.value);
  };
  const handleAlamat = (event) => {
    setAlamat(event.target.value);
  };

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelection = (event) => {
    setSelectedService(event.target.value);
  };

  // Berdasarkan layanan yang dipilih, tampilkan formulir yang sesuai
  const renderServiceForm = () => {
    if (selectedService === "surat_skck") {
      return (
        <div
          style={{
            marginLeft: "20px",
            marginRight: "900px",
            fontSize: "1rem",
            color: "#000000",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <br />
          {/* Komponen-komponen input yang sesuai dengan persyaratan SKCK */}
          <p>
            Sebelum membuat surat (SKCK), silakan mengisi formulir ini terlebih
            dahulu
          </p>
          <br />
          <form action="">
            <table style={{ width: "500px" }}>
              <tbody>
                <tr>
                  <td>NIK </td>
                  <td>
                    <div className="control">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan NIK"
                        value={nik}
                        onChange={handleNikChange}
                      />
                    </div>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Nama Lengkap</td>
                  <td>
                    <div className="control">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nama Lengkap"
                        value={nama}
                        onChange={handleNamaLengkapChange}
                      />
                    </div>
                  </td>
                </tr>
                <br />
                <tr>
                  <td>Jenis Kelamin </td>
                  <td>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={jenis_kelamin}
                          onChange={handleJenisKelaminChange}
                        >
                          <option value=""></option>
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>

                <br />
                <tr>
                  <td>Tempat/Tanggal Lahir</td>
                  <td>
                    <div className="control">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Tempat/Tanggal Lahir"
                        value={tempat_tanggal_lahir}
                        onChange={handleTempatTangalLahir}
                      />
                    </div>
                  </td>
                </tr>
                <br />

                <tr>
                  <td>Agama</td>
                  <td>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select value={agama} onChange={handleAgama}>
                          <option value=""></option>
                          <option value="Kristen">Kristen</option>
                          <option value="Islam">Islam</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <br />

                <tr>
                  <td>Status Perkawinan</td>
                  <td>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={status_perkawinan}
                          onChange={handleStatusPerkawinan}
                        >
                          <option value=""></option>
                          <option value="Kawin">Kawin</option>
                          <option value="Belum Kawin">Belum Kawin</option>
                          <option value="Janda">Janda</option>
                          <option value="Duda">Duda</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <br />

                <tr>
                  <td>Kewarganegaraan</td>
                  <td>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          value={kewarganegaraan}
                          onChange={handleKewarganegaraan}
                        >
                          <option value=""></option>
                          <option value="WNI">WNI</option>
                          <option value="WNA">WNA</option>
                          <option value="Tidak Ada">Tidak Ada</option>
                        </select>
                      </div>
                    </div>
                  </td>
                </tr>
                <br />

                <tr>
                  <td>Pekerjaan</td>
                  <td>
                    <div className="control">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Pekerjaan"
                        value={pekerjaan}
                        onChange={handlePekerjaan}
                      />
                    </div>
                  </td>
                </tr>
                <br />

                <tr>
                  <td>Alamat</td>
                  <td>
                    <div className="control">
                      <textarea
                        className="form-control"
                        placeholder="Masukkan Alamat Lengkap"
                        rows={4} // Menentukan jumlah baris
                        value={alamat}
                        onChange={handleAlamat}
                      />
                    </div>
                  </td>
                </tr>

                <br />
                <tr>
                  <td></td>
                  <td>
                    <button className="btn btn-primary" onClick={generatePDF}>
                      Buat Surat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <br />
        </div>
      );
    }
  };

  return (
    <div>
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-3 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <pre>
              <h1 className="m-0">
                <img
                  style={{ justifyContent: "center", marginTop: "15px" }}
                  width="58px"
                  height="63px"
                  src="./public/img/logo mkw 2.png"
                  alt="logo"
                />
                <span> Lurah Amban</span>
              </h1>
            </pre>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link ">
                Beranda
              </a>
              <a href="/prfil12" className="nav-item nav-link">
                Profil
              </a>
              <a href="/berita2" className="nav-item nav-link">
                Informasi
              </a>
              <a href="/penduduk2" className="nav-item nav-link">
                Penduduk
              </a>
              <a href="/layanan2" className="nav-item nav-link active">
                Layanan
              </a>
              <a href="/kontak" className="nav-item nav-link ">
                Kontak
              </a>
            </div>
            <div className="navbar-nav">
              <a href="/login" className="nav-item nav-link">
                <span
                  className=""
                  style={{
                    // textDecoration: "none",
                    display: "inline-block",
                    fontSize: "21px",
                    border: "2px solid #FFED00",
                    padding: "4px 30px",
                    borderRadius: "50px",
                    marginRight: "10px",
                    marginLeft: "60px",
                  }}
                >
                  Masuk
                </span>
              </a>
            </div>
          </div>
        </nav>

        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "50px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Layanan</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}
      <div style={{ marginTop: "50px", marginLeft: "50px" }}>
        {/* ...Kode lainnya... */}
        <h2>Daftar Layanan Online Yang Tersedia</h2>
        {/* Daftar layanan */}
        <br />
        <div>
          <h4>Pilih Layanan:</h4>
          <select value={selectedService} onChange={handleServiceSelection}>
            <option value="">Pilih Layanan</option>
            <option value="surat_skck">Surat SKCK</option>
            <option value="surat_domisili">Surat Domisili</option>
            {/* Tambahkan layanan lain */}
          </select>
          <br />
        </div>
        {/* Formulir sesuai dengan layanan yang dipilih */}
        {selectedService && renderServiceForm()}
        {/* ...Kode lainnya... */}
      </div>
      {/* Footer Start */}
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      Amban Kabupaten Manokwari Papua Barat
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">kdolfis.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+081220499241</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Services
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Meet The Team
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="/">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="/prfil12">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Profil
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Informasi
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      layanan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default Layanan2;
