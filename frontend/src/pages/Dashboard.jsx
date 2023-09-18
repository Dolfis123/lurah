import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/backrounddesa.css";
import Chart from "react-apexcharts";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [pegawai, setPegawai] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek status login pengguna di penyimpanan lokal
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }

    // Bersihkan penyimpanan lokal setelah mengambil status
    localStorage.removeItem("isLoggedIn");
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3040/pegawai")
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Result);
          setPegawai(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
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
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus Pegawai ini?"
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:3040/delete/${id}`)
        .then((res) => {
          console.log(res.data.Status);
          if (res.data.Status === "Success") {
            console.log("Data berhasil di hapus: ");
            window.location.reload(true);
          } else {
            alert("Error");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="wrapper">
      <div className="body-overlay"></div>

      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header animated slideInDown">
          <h3>
            <img src="./public/img/logo mkw.png" alt="logo" />
            Lurah Amban
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="active">
            <a href="/dashboard" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* Small Screen Navbar Display */}
          <div className="small-screen navbar-display">
            {/* Dropdown Menu */}
            <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
              <a
                href="#homeSubmenu0"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="material-icons">notifications</i>
                <span> 4 notification</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">sms</i>
                <span>Pesan</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">apps</i>
                <span>apps</span>
              </a>
            </li>

            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">person</i>
                <span>user</span>
              </a>
            </li>
          </div>

          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu2"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">auto_stories</i>
              <span>Halaman</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu2">
              <li>
                <a href="/beranda1">
                  <i className="material-icons">cottage</i>
                  <span>Beranda</span>
                </a>
              </li>
              <li>
                <a href="/profil">
                  <i className="material-icons">person</i>
                  <span>Profil</span>
                </a>
              </li>
              <li>
                <a href="/berita">
                  <i className="material-icons">newspaper</i>
                  <span>Berita</span>
                </a>
              </li>
              <li>
                <a href="/pengumuman">
                  <i className="material-icons">campaign</i>
                  <span>Pengumuman</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/penduduk" className="dashboard">
              <i className="material-icons">groups_2</i>
              <span>Penduduk</span>
            </a>
          </li>

          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu6"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">note</i>
              <span>Data Master</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu6">
              <li>
                <a href="/jenissurat">
                  <i className="material-icons">drafts</i>
                  <span>Jenis Surat</span>
                </a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
          </li>

          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu7"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">email</i>
              <span>Persuratan</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu7">
              <li>
                <a>
                  <i className="material-icons">mark_email_unread</i>
                  <span>Arsip</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="material-icons">request_page</i>
                  <span>Permintaan</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Other Menu Items */}
          <li className="">
            <a href="#">
              <i className="material-icons">date_range</i>
              <span>copy</span>
            </a>
          </li>

          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Kalender</span>
            </a>
          </li>
          <li className="">
            <a href="/location">
              <i className="material-icons">location_on</i>
              <span>Lokasi</span>
            </a>
          </li>
          <li className="">
            <a href="/setting">
              <i className="material-icons">settings</i>
              <span>Pengaturan</span>
            </a>
          </li>
          <li className="" onClick={handleLogout}>
            <a href="#">
              <i className="material-icons">logout</i>
              <span>Keluar</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Page Content */}

      <div id="content">
        <div className="top-navbar">
          <nav className="navbar1 navbar-expand-lg">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="d-xl-block d-lg-block d-md-mone d-none"
              >
                <span className="material-icons">arrow_back_ios</span>
              </button>
              <span className="text-black">Administrator</span>

              <button
                className="d-inline-block d-lg-none ml-auto more-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="material-icons">more_vert</span>
              </button>

              <div
                className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  {/* Dropdown Menu */}
                  <li className="dropdown nav-item active">
                    <a href="#" className="nav-link" data-toggle="dropdown">
                      <span className="material-icons">notifications</span>
                      <span className="notification">4</span>
                    </a>
                  </li>

                  {/* Other Menu Items */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">sms</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">apps</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">person</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="mt-3 alert alert-success white-alert text-center animated slideInDown"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "250px",
            marginRight: "250px",
          }}
        >
          {isLoggedIn && <h3>Selamat datang di Administrator</h3>}
        </div>

        <div className="main-content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
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
                <div className="card-footer text-center pb-2">
                  <h5>Total : </h5>
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
                <div className="card-footer text-center pb-2">
                  <h5>Total : </h5>
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
                </div>
                <div className="card-footer text-center pb-2">
                  <h5>Total : </h5>
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
                </div>
                <div className="card-footer text-center pb-2">
                  <h5>Total : </h5>
                </div>
              </div>
            </div>
          </div>
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
          <div className="px-2 py-2">
            <div className="d-flex justify-content-center mt-2 ">
              <h3>
                <span className="bg-white">
                  <u>Daftar Pegawai Lurah Amban</u>
                </span>
              </h3>
            </div>
            <div>
              <span>
                <Link
                  to="/tambahpegawai"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#185ADB",
                    fontSize: "21px",
                    color: "#ffffff",
                    border: "4px solid",
                    padding: "5px 25px",
                    borderRadius: "25px",
                    marginTop: "20px",
                  }}
                >
                  Tambah Data
                </Link>
              </span>
            </div>
            <div className="mt-3 align-items-center bg-white">
              <table className="table text-bg-black">
                <thead>
                  <tr>
                    <th style={{ color: "#000000" }}>
                      <b>Jabatan</b>
                    </th>
                    <th style={{ color: "#000000" }}>
                      <b>Nama</b>
                    </th>
                    <th style={{ color: "#000000" }}>
                      <b>NIP</b>
                    </th>
                    <th style={{ color: "#000000" }}>
                      <b>Image</b>
                    </th>
                    <th style={{ color: "#000000" }}>
                      <b>Aksi</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pegawai.map((item, index) => {
                    return (
                      <tr key={index}>
                        {/* <td style={{ color: "#000000" }}>{item.id}</td> */}
                        <td style={{ color: "#000000" }}>{item.jabatan}</td>

                        <td style={{ color: "#000000" }}>{item.nama}</td>
                        <td style={{ color: "#000000" }}>{item.nip}</td>

                        <td>
                          {
                            <img
                              src={`http://localhost:3040/images/${item.image}`}
                              alt=""
                              className="empImg rounded-circle"
                              style={{ width: "55px", height: "60px" }}
                            />
                          }
                        </td>
                        <td>
                          <Link
                            to={`/editpegawai/` + item.id}
                            className="btn btn-sm m-2"
                            style={{
                              backgroundColor: "#102C57",
                              color: "#FFFBF5",
                            }}
                          >
                            Lihat
                          </Link>
                          <Link
                            to={`/editpegawai/` + item.id}
                            className="btn btn-primary btn-sm m-2"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={(err, e) => handleDelete(item.id)}
                            className="btn btn-sm btn-danger"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <nav className="d-flex">
                    <ul className="m-0 p-0">
                      <li>
                        <a href="#"> Home </a>
                      </li>
                      <li>
                        <a href="#"> Kantor </a>
                      </li>
                      <li>
                        <a href="#"> Kelurahan </a>
                      </li>
                      <li>
                        <a href="#"> Blog </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6">
                  <p className="copyright d-flex justify-content-end">
                    &copy; 2023 By Dolfis Kareth || Dashboard Admin Lurah Amban
                    {/* <a href="#">Vishweb Design</a> BootStrap Admin Dashboard */}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
