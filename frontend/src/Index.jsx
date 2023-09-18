// import React from "react";

// function Index() {
//   return (
//     <div>
//       <div
//         id="spinner"
//         class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
//       >
//         <div class="spinner"></div>
//       </div>
//       {/* <!-- Spinner End -->

//     <!-- Navbar & Carousel Start --> */}
//       <div class="container-fluid position-relative p-0">
//         <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
//           <a href="index.html" class="navbar-brand p-0">
//             <h1 class="m-0">
//               <img
//                 width="58px"
//                 height="63px"
//                 src="./img/logo mkw.png"
//                 alt="logo"
//               />
//               Lurah Amban
//             </h1>
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//           >
//             <span class="fa fa-bars"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ms-auto py-0">
//               <a href="index.html" class="nav-item nav-link active">
//                 Beranda
//               </a>
//               <a href="profil.html" class="nav-item nav-link">
//                 Profil
//               </a>
//               {/* <!-- <a href="berita.html" class="nav-item nav-link">Berita</a> --> */}
//               <a href="pengumuman.html" class="nav-item nav-link">
//                 Pengumuman
//               </a>
//               <a href="penduduk.html" class="nav-item nav-link">
//                 Penduduk
//               </a>
//               <a href="layanan.html" class="nav-item nav-link">
//                 Layanan
//               </a>
//               <a href="contact.html" class="nav-item nav-link">
//                 Kontak
//               </a>
//               <a href="/frontend/login.html" class="nav-item nav-link">
//                 <span>Login </span>
//               </a>
//             </div>
//           </div>
//         </nav>

//         <div
//           id="header-carousel"
//           class="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//         >
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img class="w-100" src="img/raja ampat-2.jpg" alt="Image" />
//               <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                 <div class="p-3" style="max-width: 900px">
//                   <h5 class="text-white text-uppercase mb-3 animated slideInDown">
//                     Selamat Datang Di
//                   </h5>
//                   <h1 class="display-1 text-white mb-md-4 animated zoomIn">
//                     Website Kelurahan Amban
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img class="w-100" src="img/raja ampat-1.jpg" alt="Image" />
//               <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                 <div class="p-3" style="max-width: 900px">
//                   <h5 class="text-white text-uppercase mb-3 animated slideInDown">
//                     Selamat Datang DI
//                   </h5>
//                   <h1 class="display-1 text-white mb-md-4 animated zoomIn">
//                     Website Kelurahan Amban
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img class="w-100" src="img/papua - 2.jpg" alt="Image" />
//               <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                 <div class="p-3" style="max-width: 900px">
//                   <h5 class="text-white text-uppercase mb-3 animated slideInDown">
//                     Selamat Datang DI
//                   </h5>
//                   <h1 class="display-1 text-white mb-md-4 animated zoomIn">
//                     Website Kelurahan Amban
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img class="w-100" src="img/papua - 3.jpg" alt="Image" />
//               <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                 <div class="p-3" style="max-width: 900px">
//                   <h5 class="text-white text-uppercase mb-3 animated slideInDown">
//                     Selamat Datang DI
//                   </h5>
//                   <h1 class="display-1 text-white mb-md-4 animated zoomIn">
//                     Website Kelurahan Amban
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <img class="w-100" src="img/papua - 4.jpg" alt="Image" />
//               <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                 <div class="p-3" style="max-width: 900px">
//                   <h5 class="text-white text-uppercase mb-3 animated slideInDown">
//                     Selamat Datang DI
//                   </h5>
//                   <h1 class="display-1 text-white mb-md-4 animated zoomIn">
//                     Website Kelurahan Amban
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#header-carousel"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#header-carousel"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       {/* <!-- Navbar & Carousel End -->

//     <!-- Full Screen Search Start --> */}
//       <div class="modal fade" id="searchModal" tabindex="-1">
//         <div class="modal-dialog modal-fullscreen">
//           <div class="modal-content" style="background: rgba(9, 30, 62, 0.7)">
//             <div class="modal-header border-0">
//               <button
//                 type="button"
//                 class="btn bg-white btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body d-flex align-items-center justify-content-center">
//               <div class="input-group" style="max-width: 600px">
//                 <input
//                   type="text"
//                   class="form-control bg-transparent border-primary p-3"
//                   placeholder="Type search keyword"
//                 />
//                 <button class="btn btn-primary px-4">
//                   <i class="bi bi-search"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Full Screen Search End -->
//     <!-- About Start --> */}
//       <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="container py-5">
//           <div class="row g-5">
//             <div class="col-lg-7">
//               <div class="section-title position-relative pb-3 mb-5">
//                 <h5 class="fw-bold text-primary text-uppercase">
//                   Tentang Kami
//                 </h5>
//               </div>
//               <h1 class="mb-0">VISI</h1>
//               <p class="mb-4">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Accusantium temporibus consequuntur facilis, dignissimos,
//                 nesciunt magnam perferendis tempora minus, rem deleniti
//                 distinctio suscipit quia laboriosam minima nobis. Quo, error
//                 eveniet ab, commodi et, sunt tenetur odio sapiente laudantium
//                 voluptas in. Laborum magni commodi nobis tempore ad sit iste?
//                 Reiciendis laudantium recusandae excepturi iusto nihil, adipisci
//                 atque impedit consequatur similique alias beatae pariatur,
//                 suscipit eaque at a, aperiam voluptate odio repudiandae ad.
//               </p>

//               <h1 class="mb-0">MISI</h1>
//               <p class="mb-4">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
//                 consequuntur dolorum accusantium dolores illum eveniet, at
//                 pariatur distinctio quasi iure ut atque aliquid! Laudantium aut
//                 quibusdam voluptate expedita, quo tempora impedit. Possimus
//                 omnis laborum repudiandae sit harum aut rem recusandae
//                 perferendis iste, reprehenderit maiores? Magnam minus voluptatem
//                 ea facere repellendus eius praesentium rem assumenda, aspernatur
//                 quia iusto nulla nesciunt suscipit dicta a omnis corrupti est,
//                 reiciendis corporis pariatur debitis placeat!
//               </p>
//             </div>
//             <div class="col-lg-5" style="min-height: 500px">
//               <div class="position-relative h-100">
//                 <img
//                   class="position-absolute w-100 h-100 rounded wow zoomIn"
//                   data-wow-delay="0.9s"
//                   src="img/ras papua.jpg"
//                   style="object-fit: cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- About End -->
//     <!-- Team Start --> */}
//       <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="container py-5">
//           <div
//             class="section-title text-center position-relative pb-3 mb-5 mx-auto"
//             style="max-width: 600px"
//           >
//             <h5 class="fw-bold text-primary text-uppercase">
//               Pegawai Lurah Amban
//             </h5>
//             {/* <!-- <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1> --> */}
//           </div>
//           <div class="row g-5">
//             <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
//               <div class="team-item bg-light rounded overflow-hidden">
//                 <div class="team-img position-relative overflow-hidden">
//                   <img class="img-fluid w-100" src="img/efraim.jpg" alt="" />
//                 </div>
//                 <div class="text-center py-4">
//                   <h4 class="text-primary">Efraim Djarfi</h4>
//                   <p class="text-uppercase m-0">NIP: 0808080808080808</p>
//                   <br />
//                   <p class="text-uppercase m-0">Kepala Lurah</p>
//                 </div>
//               </div>
//             </div>
//             <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
//               <div class="team-item bg-light rounded overflow-hidden">
//                 <div class="team-img position-relative overflow-hidden">
//                   <img class="img-fluid w-100" src="img/dolfis.jpg" alt="" />
//                 </div>
//                 <div class="text-center py-4">
//                   <h4 class="text-primary">Dolfis Kareth</h4>
//                   <p class="text-uppercase m-0">NIP: 0808080808080808</p>
//                   <br />
//                   <p class="text-uppercase m-0">Wakil Lurah</p>
//                 </div>
//               </div>
//             </div>
//             <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
//               <div class="team-item bg-light rounded overflow-hidden">
//                 <div class="team-img position-relative overflow-hidden">
//                   <img class="img-fluid w-100" src="img/david.png" alt="" />
//                 </div>
//                 <div class="text-center py-4">
//                   <h4 class="text-primary">Rivaldo Iek</h4>
//                   <p class="text-uppercase m-0">NIP: 0808080808080808</p>
//                   <br />
//                   <p class="text-uppercase m-0">Sekretaris</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         class="container-fluid bg-dark text-light mt-5 wow fadeInUp"
//         data-wow-delay="0.1s"
//       >
//         <div class="container">
//           <div class="row gx-5">
//             <div class="col-lg-8 col-md-6">
//               <div class="row gx-5">
//                 <div class="col-lg-4 col-md-12 pt-5 mb-5">
//                   <div class="section-title section-title-sm position-relative pb-3 mb-4">
//                     <h3 class="text-light mb-0">Get In Touch</h3>
//                   </div>
//                   <div class="d-flex mb-2">
//                     <i class="bi bi-geo-alt text-primary me-2"></i>
//                     <p class="mb-0">Amban Kabupaten Manokwari Papua Barat</p>
//                   </div>
//                   <div class="d-flex mb-2">
//                     <i class="bi bi-envelope-open text-primary me-2"></i>
//                     <p class="mb-0">kdolfis.com</p>
//                   </div>
//                   <div class="d-flex mb-2">
//                     <i class="bi bi-telephone text-primary me-2"></i>
//                     <p class="mb-0">+081220499241</p>
//                   </div>
//                 </div>
//                 <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                   <div class="section-title section-title-sm position-relative pb-3 mb-4">
//                     <h3 class="text-light mb-0">Quick Links</h3>
//                   </div>
//                   <div class="link-animated d-flex flex-column justify-content-start">
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Home
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>About
//                       Us
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Our
//                       Services
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Meet
//                       The Team
//                     </a>
//                   </div>
//                 </div>
//                 <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                   <div class="section-title section-title-sm position-relative pb-3 mb-4">
//                     <h3 class="text-light mb-0">Popular Links</h3>
//                   </div>
//                   <div class="link-animated d-flex flex-column justify-content-start">
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Home
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>About
//                       Us
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Our
//                       Services
//                     </a>
//                     <a class="text-light mb-2" href="#">
//                       <i class="bi bi-arrow-right text-primary me-2"></i>Meet
//                       The Team
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Index;
