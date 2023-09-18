import React, { useState, useEffect } from "react";
import axios from "axios";

function StrukturOrganisasi() {
  const [strukturOrganisasi, setStrukturOrganisasi] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke server untuk data struktur organisasi
    axios
      .get("http://localhost:3040/struktur-organisasi")
      .then((response) => {
        setStrukturOrganisasi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching struktur organisasi data:", error);
      });
  }, []);

  // Fungsi rekursif untuk merender pohon struktur organisasi
  function renderTree(pegawai, parentId = null) {
    const filteredPegawai = pegawai.filter(
      (item) => item.parentId === parentId
    );

    if (filteredPegawai.length === 0) return null;

    return (
      <ul>
        {filteredPegawai.map((item) => (
          <li key={item.id}>
            {item.jabatan} - {item.nama} - {item.nip}
            {renderTree(pegawai, item.id)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Struktur Organisasi</h1>
      <div className="tree">{renderTree(strukturOrganisasi)}</div>
    </div>
  );
}

export default StrukturOrganisasi;
