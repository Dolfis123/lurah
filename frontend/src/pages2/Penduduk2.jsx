import React from "react";
import Chart from "react-apexcharts";
function Penduduk2() {
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
              <a href="/" className="nav-item nav-link ">
                Beranda
              </a>
              <a href="/prfil12" className="nav-item nav-link">
                Profil
              </a>
              <a href="/berita2" className="nav-item nav-link">
                Informasi
              </a>
              <a href="/penduduk2" className="nav-item nav-link active">
                Penduduk
              </a>
              <a href="/layanan2" className="nav-item nav-link">
                Layanan
              </a>
              <a href="/kontak" className="nav-item nav-link ">
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
              <h1 className="display-4 text-white animated zoomIn">
                Tentang Penduduk
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}
      <div className="" style={{ textAlign: "center", color: "blue" }}>
        <h3>Jumlah Penduduk</h3>
      </div>

      <div
        className="main-content"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="row bg-body-secondary">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats ">
              <div className="card-header">
                <div className="icon icon-warning">
                  <span className="material-icons">family_restroom</span>
                </div>
              </div>
              <div className="card-content text-center pb-2">
                <p className="category">
                  <strong>Jumlah Keluarga</strong>
                </p>
              </div>
              <div className="card-footer text-left pb-2">
                <h5>Total: </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header">
                <div className="icon icon-rose">
                  <span className="material-icons">groups</span>
                </div>
              </div>
              <div className="card-content text-center pb-2">
                <p className="category">
                  <strong>Jumlah Penduduk</strong>
                </p>
              </div>
              <div className="card-footer text-left pb-2">
                <h5>Total: </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header">
                <div className="icon icon-success">
                  <span className="material-icons">man</span>
                </div>
              </div>
              <div className="card-content text-center pb-2">
                <p className="category">
                  <strong>Jumlah Laki-Laki</strong>
                </p>
                {/* <h3 className="card-title">15</h3> */}
              </div>
              <div className="card-footer text-left pb-2">
                <h5>Total: </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header">
                <div className="icon icon-info">
                  <span className="material-icons"> woman </span>
                </div>
              </div>
              <div className="card-content text-center pb-2">
                <p className="category">
                  <strong>Jumlah Perempuan</strong>
                </p>
                {/* <h3 className="card-title">12</h3> */}
              </div>
              <div className="card-footer text-left pb-2">
                <h5>Total: </h5>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chart
            type="pie"
            width={400}
            height={350}
            series={[28, 38]}
            options={{
              labels: ["Laki-Laki", "Perempuan"],
            }}
          ></Chart>
          <Chart
            type="pie"
            width={400}
            height={350}
            series={[50, 35, 25]}
            options={{
              labels: ["SD", "SMP", "Mahasiswa"],
            }}
          ></Chart>
        </div>

        <br />
      </div>

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
export default Penduduk2;
