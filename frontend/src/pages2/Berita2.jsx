import React from "react";
function Berita2() {
  return (
    <div>
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
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-3 py-3 py-lg-0">
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
              <a href="/" className="nav-item nav-link">
                Beranda
              </a>
              <a href="/prfil12" className="nav-item nav-link">
                Profil
              </a>
              <a href="/berita2" className="nav-item nav-link  active">
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

        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h2
                className="text-center mt-4 animated zoomIn"
                style={{
                  fontSize: "3rem",
                  color: "#F6F6F6",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Berita & Pengumuman
              </h2>
              <h3
                className="text-center mt-4  animated zoomIn" // Menambahkan class Bootstrap untuk membuat teks menjadi tengah
                style={{ fontSize: "1.2rem", color: "#8BE8E5" }} // Mengatur ukuran font agar responsif
              >
                Disini kamu akan melihat berita-berita tentang Lurah amban dan
                <br />
                sekitarnya, dan juga kamu bisa melihat pengumuman-pengumuman
                dari kelurahan amban
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* <!-- Blog Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation">
            <ul className="pagination pagination-lg m-0">
              <li className="page-item">
                <a
                  className="page-link rounded-0"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">
                    <i className="bi bi-arrow-left"></i>
                  </span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="/berita2">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/halamanberita2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/halamanberita3">
                  3
                </a>
              </li>

              <li className="page-item">
                <a
                  className="page-link rounded-0"
                  href="/halamanberita2"
                  aria-label="Next"
                >
                  <span aria-hidden="true">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <br />
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            {/* <!-- Blog list Start --> */}
            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="./public/img/masyarakat mkw.jpg"
                        alt=""
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href=""
                      >
                        Web Design
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>John
                          Doe
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 className="mb-3">
                        {" "}
                        Sambut HUT RI ke-78, Pemkab Jayawijaya kerja bakti di
                        Kota Wamena
                      </h4>

                      <p>
                        Jayapura - Gempa bumi terkini dengan kekuatan magnitudo
                        (M) 3,4 mengguncang Kabupaten Jayapura, Papua. Gempa
                        dilaporkan berpusat di darat.
                      </p>
                      <br />
                      <a
                        className="text-uppercase"
                        href="https://www.detik.com/sulsel/berita/d-6860047/gempa-bumi-terkini-m-34-guncang-jayapura-papua-berpusat-di-darat"
                      >
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="./public/img/masyarakat mkw.jpg"
                        alt=""
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href=""
                      >
                        main terus
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>John
                          Doe
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 className="mb-3">
                        Kwarcab Kota Jayapura berangkatkan 31 orang mengikuti
                        Raimuna Nasional XII
                      </h4>
                      <p>
                        Jayapura, Jubi – Kwartir Cabang atau Kwarcab Kota
                        Jayapura memberangkatkan sebanyak 31 orang, untuk
                        mengikuti kegiatan Raimuna Nasional XII di Cibubur,
                        Jakarta pada 14-21 Agustus 2023.
                      </p>

                      <br />
                      <a
                        className="text-uppercase"
                        href="https://jubi.id/tanah-papua/2023/gara-gara-poster-bintang-kejora-mahasiswa-papua-dilarang-berfoto-di-kampus-unram/"
                      >
                        Baca Selengkapnya<i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="./public/img/masyarakat mkw.jpg"
                        alt=""
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href=""
                      >
                        Web Design
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>John
                          Doe
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 className="mb-3">How to build a website</h4>
                      <p>
                        BIAK NUMFOR, KOMPAS — Dalam kunjungannya di Papua, 11-13
                        September 2023, Kementerian Sosial menyalurkan bantuan
                        sosial berbasis
                      </p>
                      <a
                        className="text-uppercase"
                        href="https://www.kompas.id/baca/nusantara/2023/09/13/pemberdayaan-masyarakat-papua-dengan-pemanfaatan-potensi-lokal"
                      >
                        Baca Selengkapnya<i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src="./public/img/masyarakat mkw.jpg"
                        alt=""
                      />
                      <a
                        className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href=""
                      >
                        Web Design
                      </a>
                    </div>
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="far fa-user text-primary me-2"></i>John
                          Doe
                        </small>
                        <small>
                          <i className="far fa-calendar-alt text-primary me-2"></i>
                          01 Jan, 2045
                        </small>
                      </div>
                      <h4 className="mb-3">How to build a website</h4>
                      <p>
                        Jayapura - Ditlantas Polda Papua membagikan 5.570 paket
                        bantuan sosial kepada masyarakat yang membutuhkan.
                      </p>
                      <a
                        className="text-uppercase"
                        href="https://www.detik.com/sulsel/berita/d-6929853/peringati-hut-ke-68-ditlantas-polda-papua-bagikan-5570-paket-bantuan-sosial"
                      >
                        Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg m-0">
                      <li className="page-item">
                        <a
                          className="page-link rounded-0"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-left"></i>
                          </span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/berita2">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/halamanberita2">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/halamanberita3">
                          3
                        </a>
                      </li>

                      <li className="page-item">
                        <a
                          className="page-link rounded-0"
                          href="/halamanberita2"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">
                            <i className="bi bi-arrow-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* <!-- Blog list End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}

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

export default Berita2;
