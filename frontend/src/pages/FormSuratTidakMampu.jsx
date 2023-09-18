import React, { useState } from "react";
import axios from "axios";

function FormSuratTidakMampu() {
  const [formData, setFormData] = useState({
    nama: "",
    ktp: "",
    kk: "",
    noHp: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3040/ajukan-surat-tidak-mampu",
        formData
      );
      console.log(response.data); // Handle success or error response
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Ajukan Surat Tidak Mampu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No KTP:</label>
          <input
            type="text"
            name="ktp"
            value={formData.ktp}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No KK:</label>
          <input
            type="text"
            name="kk"
            value={formData.kk}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No HP:</label>
          <input
            type="text"
            name="noHp"
            value={formData.noHp}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Ajukan Surat</button>
      </form>
    </div>
  );
}

export default FormSuratTidakMampu;
