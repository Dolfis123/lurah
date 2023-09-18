import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function DataTest() {
  const navigate = useNavigate();
  const quillRefVisi = useRef();
  const quillRefMisi = useRef();

  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");

  useEffect(() => {
    const visiMisiId = window.location.pathname.split("/").pop();

    axios
      .get(`http://localhost:3040/visi-misi/${visiMisiId}`)
      .then((response) => {
        setVisi(response.data.visi);
        setMisi(response.data.misi);
      })
      .catch((error) => {
        console.error("Gagal mengambil data visi-misi:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const visiContent = quillRefVisi.current.getEditorContents();
    const misiContent = quillRefMisi.current.getEditorContents();

    const visiList = visiContent
      .split("\n")
      .filter((item) => item.trim() !== "");
    const misiList = misiContent
      .split("\n")
      .filter((item) => item.trim() !== "");

    const data = {
      visi: visiList,
      misi: misiList,
    };

    const visiMisiId = window.location.pathname.split("/").pop();

    axios
      .put(`http://localhost:3040/visi-misi/${visiMisiId}`, data)
      .then((response) => {
        console.log("Data visi dan misi berhasil diupdate:", response.data);
      })
      .catch((error) => {
        console.error("Gagal mengupdate data visi dan misi:", error);
      });
  };
  const [visiMisi, setVisiMisi] = useState([]);

  useEffect(() => {
    // Panggil fungsi untuk mengambil data sejarah dari backend

    // Panggil fungsi untuk mengambil data visi dan misi dari backend
    fetchDataVisiMisi();
  }, []);

  const fetchDataVisiMisi = () => {
    axios
      .get("http://localhost:3040/visi-misi") // Ganti URL dengan endpoint yang benar di backend Anda
      .then((response) => {
        setVisiMisi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching visi dan misi data:", error);
      });
  };
  const getTest = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="bg-white">
      <div
        className="d-flex flex-column pt-4 text-black"
        style={{ marginLeft: "20px" }}
      >
        <h3>Edit Visi & Misi</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="visi"
              className="d-flex flex-column align-items-left pt-4 text-black"
            >
              <b>VISI</b>
            </label>
            <ReactQuill
              ref={quillRefVisi}
              value={visi}
              onChange={(content) => setVisi(content)}
              style={{ width: "65%", height: "280px" }}
            />
          </div>
          <div>
            <label
              htmlFor="misi"
              className="d-flex flex-column align-items-left pt-4 text-black"
            >
              <b>MISI</b>
            </label>
            <ReactQuill
              ref={quillRefMisi}
              value={misi}
              onChange={(content) => setMisi(content)}
              style={{ width: "65%", height: "280px" }}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="col-lg-3 d-flex justify-content-between">
            <button type="submit" className="btn btn-primary order-1">
              Ubah
            </button>
            <button
              type="button"
              className="btn btn-success rounded btn-center order-2"
              onClick={() => navigate("/data1/1")}
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
      <br />
      <div style={{ margin: "20px" }}>
        <div className="mt-3">
          {visiMisi.map((item, index) => (
            <Link to={`/data1/` + item.id} className="btn btn-success">
              Edit Visi-Misi
            </Link>
          ))}
          <div className="card card-stats">
            <tr>
              <th className="text-center pb-1">
                <b>VISI</b>
              </th>
            </tr>
            {visiMisi.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.visi
                    .split("\n")
                    .map((line, lineIndex) =>
                      line.startsWith("•") ? (
                        <li key={lineIndex}>{line.substring(1)}</li>
                      ) : (
                        <div
                          key={lineIndex}
                          dangerouslySetInnerHTML={{ __html: line }}
                        />
                      )
                    )}
                </td>
              </tr>
            ))}
          </div>

          <div className="card card-stats">
            <tr>
              <th className="text-center pb-1">
                <b>MISI</b>
              </th>
            </tr>
            {visiMisi.map((item, index) => (
              <tr key={index}>
                <td>
                  <ul>
                    {item.misi.split("\n").map((line, lineIndex) => (
                      <li
                        key={lineIndex}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTest;
