import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Bagian Admin Start
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";
import Jenissurat from "./pages/Jenissurat";
import Pengumuman from "./pages/Pengumuman";
import TambahPenduduk from "./pages/TambahPenduduk";
import Location from "./pages/Location";
import Sejarahvmedit from "./pages/Sejarahvmedit";
import Tambahberita from "./pages/Tambahberita";
import Penduduk from "./pages/Penduduk";
import Setting from "./pages/Setting";
import Piechart from "./pages/Piechart";
import TambahLayanan from "./pages/TambahLayanan";
import Login from "./pages/Login";
import Editvisimisi from "./pages/Editvisimisi";
import Berita from "./pages/Berita";
import TambahPegawai from "./pages/TambahPegawai";
import EditPegawai from "./pages/EditPegawai";
import FormSuratTidakMampu from "./pages/FormSuratTidakMampu";
import Beranda1 from "./pages/Beranda1";
import EditUcapan from "./pages/EditUcapan";
import StrukturOrganisasi from "./pages2/StrukturOrganisasi";

// Test
import DataTest from "./pages/DataTest";
import App1 from "./components/App1";
import TambahUcapan from "./pages/TambahUcapan";

// import TestForm from "./pages/TestForm";

// Bagian Admin End
{
  /* -------------------######------------------- */
}

// Bagian Umum Start
import Kontak from "./pages2/Kontak";
import Beranda from "./pages2/Beranda";
import Profil2 from "./pages2/Profil2";
import Pengumuman2 from "./pages2/Pengumuman2";
import Penduduk2 from "./pages2/Penduduk2";
import Layanan2 from "./pages2/Layanan2";
import Berita2 from "./pages2/Berita2";
import HalamanBerita from "./pages2/HalamanBerita";
import HalamanBerita3 from "./pages2/HalamanBerita3";
// import Ber from "./pages/ber";

// Bagian Umum End

// UntuK test Start
import SKCK from "./components/SKCK";
import Layanan3 from "./components/Layanan3";
import ImageUpload from "./pages/ImageUpload";
// UntuK test End

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Bagian Pages Admin Start */}
          <Route path="/image" element={<ImageUpload />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beranda1" element={<Beranda1 />}></Route>
          <Route path="/pengumuman" element={<Pengumuman />}></Route>
          <Route path="/location" element={<Location />} />
          <Route path="/tambahpenduduk" element={<TambahPenduduk />}></Route>
          <Route path="/piecharts" element={<Piechart />}></Route>
          <Route path="/penduduk" element={<Penduduk />}></Route>
          <Route path="/tambahberita" element={<Tambahberita />} />
          <Route path="/sejarah/:id" element={<Sejarahvmedit />} />
          <Route path="/visi-misi/:id" element={<Editvisimisi />}></Route>
          <Route path="/jenissurat" element={<Jenissurat />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/data1/:id" element={<DataTest />}></Route>
          <Route path="/profil" element={<Profil />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/tambah-layanan" element={<TambahLayanan />}></Route>
          <Route path="/tambahpegawai" element={<TambahPegawai />}></Route>
          <Route path="/editpegawai/:id" element={<EditPegawai />}></Route>
          <Route path="/formsurat" element={<FormSuratTidakMampu />}></Route>
          <Route path="/editucapan/:id" element={<EditUcapan />}></Route>

          <Route path="/app1" element={<App1 />} />

          {/* Bagian Pages Admin End */}
          {/* -------------------------######------------------------------ */}
          {/* Bagian Pages Umum Start */}
          <Route path="/" element={<Beranda />}></Route>
          <Route path="/kontak" element={<Kontak />}></Route>
          <Route path="/prfil12" element={<Profil2 />} />
          <Route path="/pengumuman2" element={<Pengumuman2 />} />
          <Route path="/penduduk2" element={<Penduduk2 />} />
          <Route path="/layanan2" element={<Layanan2 />} />
          <Route path="/berita2" element={<Berita2 />} />
          <Route path="/halamanberita2" element={<HalamanBerita />}></Route>
          <Route path="/halamanberita3" element={<HalamanBerita3 />}></Route>

          {/* Bagian Pages Umum End*/}

          {/* Untuk Test Start */}
          <Route path="/skck" element={<SKCK />}></Route>
          <Route path="/layanan3" element={<Layanan3 />}></Route>
          <Route path="/ucapan1" element={<TambahUcapan />}></Route>
          <Route path="/organ" element={<StrukturOrganisasi />}></Route>

          {/* Untuk Test End */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
