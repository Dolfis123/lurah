import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css2/VideoComponent.css";
import "../css/profil2.css";
import "../css/style.css";
import "../css2/style2.css";
function Beranda() {
  const [ucapan, setUcapan] = useState([]);
  const navigate = useNavigate([]);
  useEffect(() => {
    axios
      .get("http://localhost:3040/lihat-ucapan")
      .then((response) => {
        if (response.data.Status === "Success") {
          setUcapan(response.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-body-secondary">
      {/* <!-- Topbar Start --> */}
      <div
        className="container-fluid px-5 d-none d-lg-block"
        style={{ backgroundColor: "#0F2C59" }}
      >
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0 animated slideInDown">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <small className="me-3 text-light">
                <i class="fa fa-map-marker-alt me-2"></i>5357+4VW, Jl. Gn.
                Salju, Amban, Kec. Manokwari Bar., Kabupaten Manokwari, Papua
                Bar. 98312
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+0122023030
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>lurahamban@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end animated slideInRight">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="https://youtube.com"
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
      {/* Navbar & Carousel Start*/}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark  px-3 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <pre>
              <h1 className="m-0 animated slideInDown">
                <img
                  style={{ justifyContent: "center", marginTop: "15px" }}
                  width="58px"
                  height="63px"
                  src="./public/img/logo mkw 2.png"
                  alt="logo"
                />
                <span> Kelurahan Amban</span>
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
              <a href="/" className="nav-item nav-link active">
                Beranda
              </a>
              <a href="/prfil12" className="nav-item nav-link">
                Profil
              </a>
              <a href="/berita2" className="nav-item nav-link">
                Informasi
              </a>
              <a href="/kontak" className="nav-item nav-link">
                Kontak
              </a>
            </div>
            <div className="navbar-nav">
              <a href="/login" className="nav-item nav-link">
                <span
                  className="btn btn-outline-info py-md-3 px-md-5 animated slideInRight"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  <b>Masuk</b>
                </span>
              </a>
            </div>
          </div>
        </nav>

        {/* Navbar End */}
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&w=1470&q=80"
                  alt="Image"
                  style={{ maxWidth: "780px", maxHeight: "800px" }}
                />

                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-3 animated slideInDown">
                      Pemerintah Kabupaten Manokwari <br />
                      Distrik Manokwari Barat <br /> Kelurahan Amban
                    </h4>
                    <br />
                    <h4 className="text-white text-uppercase mb-3 animated zoomIn">
                      Selamat Datang
                    </h4>
                    <h4 className="animated zoomIn"> di</h4>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      Kelurahan Amban
                    </h1>

                    <a
                      href="/kontak"
                      className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Kontak Kami
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100"
                  src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1568&q=80"
                  alt="Image"
                  style={{ maxWidth: "780px", maxHeight: "800px" }}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-3 animated slideInDown">
                      Pemerintah Kabupaten Manokwari <br />
                      Distrik Manokwari Barat <br /> Kelurahan Amban
                    </h4>
                    <br />
                    <h4 className="text-white text-uppercase mb-3 animated zoomIn">
                      Selamat Datang
                    </h4>
                    <h4 className="animated zoomIn"> di</h4>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      Kelurahan Amban
                    </h1>

                    <a
                      href="/kontak"
                      className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                    >
                      Kontak Kami
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Navbar & Carousel End*/}

      {/* <!-- Content Start --> */}
      <div className="centered-content animated slideInDown ">
        <div
          style={{
            padding: "0px",
            background: "#FFFFFF",
            borderRadius: "50px",
            marginLeft: "150px",
            marginRight: "150px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <div style={{ margin: "20px" }}>
            {ucapan.map((item, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div style={{ flex: 1 }}>
                  {item.pesan &&
                    item.pesan
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
                </div>
                <div style={{ flexShrink: 0 }}>
                  {item.image && (
                    <img
                      src={`http://localhost:3040/images/${item.image}`}
                      alt=""
                      style={{
                        width: "280px",
                        height: "300px",
                        borderRadius: "400px",
                      }}
                      className="image-fade-in"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Content End --> */}
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
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      Amban Kabupaten Manokwari Papua Barat
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      5357+4VW, Jl. Gn. Salju, Amban, Kec. Manokwari Bar.,
                      Kabupaten Manokwari, Papua Bar. 98312
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      Amban Kabupaten Manokwari Papua Barat
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
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

export default Beranda;
