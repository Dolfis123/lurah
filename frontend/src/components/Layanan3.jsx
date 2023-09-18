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
          timeout: 60000,
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
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      {/* ...Kode lainnya... */}
      <h2>Daftar Layanan Online</h2>
      {/* Daftar layanan */}
      <div>
        <h4>Pilih Layanan:</h4>
        <select value={selectedService} onChange={handleServiceSelection}>
          <option value="">Pilih Layanan</option>
          <option value="surat_skck">Surat SKCK</option>
          <option value="surat_domisili">Surat Domisi</option>
          {/* Tambahkan layanan lain */}
        </select>
      </div>
      {/* Formulir sesuai dengan layanan yang dipilih */}
      {selectedService && renderServiceForm()}
      {/* ...Kode lainnya... */}
    </div>
  );
}

export default Layanan2;
