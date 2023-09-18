import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TambahUcapan() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    pesan: "",
    image: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pesan", data.pesan);
    formData.append("image", data.image);
    axios
      .post("http://localhost:3040/ucapan", formData)
      .then((res) => {
        console.log("Data berhasil di tambahkan: ", res.data);
        navigate("/beranda1");
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Apakah Anda yakin ingin keluar dari halaman ini?"
    );

    if (confirmLogout) {
      axios
        .get("http://localhost:3040/logout", { withCredentials: true })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center pt-4 text-white">
        <h2>
          <span className="text-white">Tambah Penduduk</span>
        </h2>
        <form className="row g-3 w-50" onSubmit={handleSubmit}>
          <div className="col-12">
            <label For="inputEmail4" className="form-label text-white">
              Pesan
            </label>
            <input
              type="text"
              className="form-control text-black"
              id="imputNama"
              placeholder="Masukan Pesan"
              value={data.pesan}
              onChange={(e) => setData({ ...data, pesan: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label For="inputAddress4" className="form-label text-white">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={(e) => setData({ ...data, image: e.target.files[0] })}
            />
          </div>
          <div className="col-15 text-white">
            <br />
            <div className="col-15 d-flex justify-content-between">
              <button type="submit" className="btn btn-primary order-1">
                Buat
              </button>
              <button
                type="submit"
                className="btn btn-success rounded btn-center order-2"
                onClick={(e) => navigate("/beranda1")}
              >
                Kembali
              </button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
}

export default TambahUcapan;
