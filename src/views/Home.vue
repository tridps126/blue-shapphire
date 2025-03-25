<template>
     <div class="bg-home">
          <section class="section_slider">
               <div class="home-slider swiper-container gallery-top">
                    <div class="swiper-wrapper">
                         <div class="swiper-slide">
                              <div class="clearfix" title="Slider 1">
                                   <picture>
                                        <source media="(min-width: 1200px)" srcset="../assets/images/banner1.jpg">
                                        <source media="(min-width: 992px)" srcset="../assets/images/banner1.jpg">
                                        <source media="(min-width: 569px)" srcset="../assets/images/banner1.jpg">
                                        <source media="(max-width: 567px)" srcset="../assets/images/banner1.jpg">
                                        <img width="1920" height="800" src="../assets/images/banner1.jpg" alt="Slider 1"
                                             class="img-fluid" />
                                   </picture>
                              </div>
                              <div class="slider-text d-none d-lg-block">
                                   <div class="container">
                                        <div class="slider-content">
                                             <span class="sup-title">Blue Shapphire</span>
                                             <h2 class="title">Công Nghệ Đổi Mới, Nhân Sự Tạo Dựng Thành Công</h2>
                                             <router-link class="button" to="/" title="Xem chi tiết">Xem chi
                                                  tiết</router-link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="swiper-slide">
                              <div class="clearfix" title="Slider 2">
                                   <picture>
                                        <source media="(min-width: 1200px)" srcset="../assets/images/banner2.jpg">
                                        <source media="(min-width: 992px)" srcset="../assets/images/banner2.jpg">
                                        <source media="(min-width: 569px)" srcset="../assets/images/banner2.jpg">
                                        <source media="(max-width: 567px)" srcset="../assets/images/banner2.jpg">
                                        <img width="1920" height="800" src="../assets/images/banner2.jpg" alt="Slider 2"
                                             class="img-fluid" />
                                   </picture>
                              </div>
                              <div class="slider-text d-none d-lg-block">
                                   <div class="container">
                                        <div class="slider-content">
                                             <span class="sup-title">Blue Shapphire</span>
                                             <h2 class="title">Tech Solutions, Empowered Talent, Lasting Success</h2>
                                             <a class="button" href="#" title="Xem chi tiết">Xem chi tiết</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="swiper-pagination"></div>
               </div>
          </section>
          <section class="section_about">
               <div class="container">
                    <div class="row align-items-center">
                         <div class="col-lg-6 col-12 col-left">
                              <div class="about-image">
                                   <img class="lazyload img-fluid" width="676" height="683"
                                        src="../assets/images/otther_2.jpg"
                                        data-src="//bizweb.dktcdn.net/100/503/218/themes/931576/assets/about-image.jpg?1715757113942"
                                        alt="Blue Shapphire" />
                                   <div ref="gallery" class="block_video_play">
                                        <a href="javascript:void(0);"
                                             data-src="https://www.youtube.com/watch?v=d85cZ60gg4Q"
                                             class="video_play popup-youtube video-item" title="Blue Shapphire">
                                             <span class="video-icon">
                                                  <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                       data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg"
                                                       viewBox="0 0 448 512" data-fa-i2svg="">
                                                       <path fill="#fff"
                                                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                                       </path>
                                                  </svg>
                                             </span>
                                        </a>
                                   </div>
                                   <div class="video-waves">
                                        <div class="waves"></div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-6 col-12 col-right">
                              <div class="about-content">
                                   <span class="top-title">Chúng tôi là ai</span>
                                   <h2 class="title" style="color: #006ac0;">Cam kết chất lượng và kết quả vượt trội
                                   </h2>
                                   <p class="desc">Với hơn 10 năm kinh nghiệm hoạt động tại thị trường Việt Nam, Blue
                                        Sapphire đã trở thành đối tác chiến lược đáng tin cậy của nhiều doanh nghiệp
                                        trong việc cung cấp các giải pháp công nghệ và nhân sự. Chúng tôi chuyên cung
                                        cấp các dịch vụ mang tính sáng tạo và chất lượng cao, được thiết kế riêng biệt
                                        để giúp doanh nghiệp tối ưu hóa hiệu quả công việc và gia tăng lợi thế cạnh
                                        tranh. </p>
                                   <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                             <div class="single-about">
                                                  <span class="icon"><img
                                                            src="../assets/css/themes/quality7e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="50" height="50"></span>
                                                  <h3>Đảm bảo chất lượng</h3>
                                                  <p>Đội ngũ kỹ sư phần mềm, kỹ sư hệ thống và nhân viên tổng đài của
                                                       chúng tôi không chỉ có chuyên môn sâu rộng mà còn luôn sáng tạo
                                                       và nỗ lực hết mình để mang đến những sản phẩm và dịch vụ đột phá.
                                                  </p>

                                             </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                             <div class="single-about">
                                                  <span class="icon"><img
                                                            src="../assets/css/themes/responsibility7e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="50" height="50"></span>
                                                  <h3>Trách nhiệm</h3>
                                                  <p>Chúng tôi hiểu rằng mỗi doanh nghiệp đều có những yêu cầu và thách
                                                       thức riêng biệt, vì vậy các giải pháp mà <Strong>Blue
                                                            Sapphire</Strong> cung cấp đều được điều chỉnh và thiết kế
                                                       sao cho phù hợp nhất với từng khách hàng.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_statistic">
               <div class="container">
                    <div class="row">
                         <div class="col-lg-3 col-md-6 col-xs-6">
                              <div class="item">
                                   <div class="icon">
                                        <img class="img-fluid"
                                             src="../assets/css/themes/statistic_image_17e7a.png?1715757113942"
                                             alt="Lofi Construction" width="60" height="60" />
                                   </div>
                                   <div class="content">
                                        <div class="counter-number-wrapper">
                                             <span ref="counter" class="counter-number">10</span>
                                             <span class="suffix">+</span>
                                        </div>
                                        <div class="static-title">Hình thành & phát triển</div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-3 col-md-6 col-xs-6">
                              <div class="item">
                                   <div class="icon">
                                        <img class="img-fluid"
                                             src="../assets/css/themes/statistic_image_27e7a.png?1715757113942"
                                             alt="Lofi Construction" width="60" height="60" />
                                   </div>
                                   <div class="content">
                                        <div class="counter-number-wrapper">
                                             <span ref="counter" class="counter-number">100</span>
                                             <span class="suffix">+</span>
                                        </div>
                                        <div class="static-title">Quy mô nhân sự</div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-3 col-md-6 col-xs-6">
                              <div class="item">
                                   <div class="icon">
                                        <img class="img-fluid"
                                             src="../assets/css/themes/statistic_image_37e7a.png?1715757113942"
                                             alt="Lofi Construction" width="60" height="60" />
                                   </div>
                                   <div class="content">
                                        <div class="counter-number-wrapper">
                                             <span ref="counter" class="counter-number">10</span>
                                             <span class="suffix">+</span>
                                        </div>
                                        <div class="static-title">Năm kinh nghiệm</div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-3 col-md-6 col-xs-6">
                              <div class="item">
                                   <div class="icon">
                                        <img class="img-fluid"
                                             src="../assets/css/themes/statistic_image_47e7a.png?1715757113942"
                                             alt="Lofi Construction" width="60" height="60" />
                                   </div>
                                   <div class="content">
                                        <div class="counter-number-wrapper">
                                             <span ref="counter" class="counter-number">1000</span>
                                             <span class="suffix">+</span>
                                        </div>
                                        <div class="static-title">Dự án thành công</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_banner">
               <div class="container">
                    <div class="banner-content">
                         <h2>Chúng Tôi Sẽ Đồng Hành Cùng Bạn Xây Dựng Thương Hiệu Vững Mạnh Và Tiến Xa.</h2>
                         <div class="banner-ctas">
                              <router-link to="/contact" class="cta">Liên hệ</router-link>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_service">
               <div class="container-fluid">
                    <div class="block-title">
                         <span class="top-title">Dịch vụ của chúng tôi</span>
                         <h2><router-link to="/" title="Cung cấp dịch vụ chất lượng">Cung cấp dịch vụ chất
                                   lượng</router-link>
                         </h2>
                    </div>
                    <div class="row">
                         <div class="col-lg-6 col-md-6 col-12 service-pad">
                              <div class="service-item">
                                   <div class="image">
                                        <div class="image_thumb">
                                             <img class="img-fluid" width="800" height="563"
                                                  src="../assets/images/dichvu//dich.vu.chung.toi_4.jpg"
                                                  alt="Lofi Construction">
                                        </div>
                                   </div>
                                   <div class="main">
                                        <div class="main-body">
                                             <div class="icon">
                                                  <span><img class="img-fluid"
                                                            src="../assets/css/themes/service_icon_27e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="65" height="65"></span>
                                             </div>
                                             <h3><router-link to="/service/contact-center">Telesale &
                                                       Chăm sóc Khách Hàng</router-link>
                                             </h3>
                                             <p>Với đội ngũ nhân viên chuyên nghiệp và tận tâm, chúng tôi giúp doanh
                                                  nghiệp tạo dựng mối quan hệ bền vững với khách hàng thông qua dịch vụ
                                                  chăm sóc khách hàng và telesale hiệu quả.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-6 col-md-6 col-12 service-pad">
                              <div class="service-item">
                                   <div class="image">
                                        <div class="image_thumb">
                                             <img class="img-fluid" width="800" height="563"
                                                  src="../assets/images/dichvu/dich.vu.chung.toi_3.jpg"
                                                  alt="Lofi Construction">
                                        </div>
                                   </div>
                                   <div class="main">
                                        <div class="main-body">
                                             <div class="icon">
                                                  <span><img class="img-fluid"
                                                            src="../assets/css/themes/service_icon_17e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="65" height="65"></span>
                                             </div>
                                             <h3><router-link to="/service/website">Các giải pháp phát
                                                       triển website</router-link></h3>
                                             <p>Blue Sapphire cung cấp các giải pháp thiết kế và phát triển website chất
                                                  lượng cao, dễ sử dụng, tối ưu cho cả người dùng và doanh nghiệp, giúp
                                                  nâng cao sự hiện diện trực tuyến của bạn.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-lg-6 col-md-6 col-12 mx-auto service-pad">
                              <div class="service-item">
                                   <div class="image">
                                        <div class="image_thumb">
                                             <img class="img-fluid" width="800" height="563"
                                                  src="../assets/images/dichvu/dich.vu.chung.toi_2.jpg"
                                                  alt="Lofi Construction">
                                        </div>
                                   </div>
                                   <div class="main">
                                        <div class="main-body">
                                             <div class="icon">
                                                  <span><img class="img-fluid"
                                                            src="../assets/css/themes/service_icon_37e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="65" height="65"></span>
                                             </div>
                                             <h3><router-link to="/service/marketing">Chiến lược
                                                       Marketing tối ưu</router-link></h3>
                                             <p>Chúng tôi thực hiện các chiến dịch marketing tối ưu giúp doanh nghiệp
                                                  tiếp cận đúng đối tượng khách hàng và tăng trưởng bền vững, đồng thời
                                                  tối đa hóa hiệu quả chi phí.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <!-- <div class="col-lg-6 col-md-6 col-12 service-pad">
                              <div class="service-item">
                                   <div class="image">
                                        <div class="image_thumb">
                                             <img class="img-fluid" width="800" height="563"
                                                  src="../assets/css/themes/service_image_47e7a.jpg?1715757113942"
                                                  alt="Lofi Construction">
                                        </div>
                                   </div>
                                   <div class="main">
                                        <div class="main-body">
                                             <div class="icon">
                                                  <span><img class="img-fluid"
                                                            src="../assets/css/themes/service_icon_47e7a.png?1715757113942"
                                                            alt="Lofi Construction" width="65" height="65"></span>
                                             </div>
                                             <h3><a href="son-sua-cong-trinh.html" title="Sơn sửa công trình">Sơn sửa
                                                       công
                                                       trình</a></h3>
                                             <p>Đội ngũ kỹ thuật viên của chúng tôi sẽ mang lại cho bạn các dịch vụ sơn
                                                  công
                                                  trình chất lượng cao, từ việc lựa chọn vật liệu phù hợp đến quy trình
                                                  thi công
                                                  chuyên nghiệp.</p>
                                        </div>
                                   </div>
                              </div>
                         </div> -->
                    </div>
                    <div class="service-ctas">
                         <router-link to="/service/contact-center" class="btn-viewmore" title="Xem thêm">Xem
                              thêm</router-link>
                    </div>
               </div>
          </section>
          <section class="section_progress">
               <div class="container">
                    <div class="row align-items-center">
                         <div class="col-lg-4 d-none d-lg-block col-12">
                              <div class="image">
                                   <img class="img-fluid"
                                        src="../assets/css/themes/progress.webp" alt=""
                                        title="" />
                              </div>
                         </div>
                         <div class="col-lg-2 d-none d-lg-block col-12">

                         </div>
                         <div class="col-lg-6 col-md-12 col-12">
                              <div class="skills-content">
                                   <div class="block-title">
                                        <span class="top-title">Đội ngũ chuyên nghiệp</span>
                                        <h2>Hiệu quả của công ty chúng tôi</h2>
                                        <p>Chúng Tôi Tạo Dựng Trải Nghiệm Khách Hàng Tuyệt Vời, Đảm Bảo Mỗi Cuộc Gọi Là
                                             Một Cơ Hội Để Doanh Nghiệp Vươn Tới Thành Công</p>
                                   </div>
                              </div>
                              <div class="all-skill-bar">
                                   <div class="progress skill-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 95%"
                                             aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                             95%
                                        </div>
                                   </div>
                                   <div class="progress-title line-clamp line-clamp-1" title="Máy móc công ty">
                                        Công nghệ tối ưu
                                   </div>
                              </div>
                              <div class="all-skill-bar">
                                   <div class="progress skill-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 85%"
                                             aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                             90%
                                        </div>
                                   </div>
                                   <div class="progress-title line-clamp line-clamp-1" title="Kỹ sư có trình độ">
                                        Nhân viên có trình độ
                                   </div>
                              </div>
                              <div class="all-skill-bar">
                                   <div class="progress skill-bar">
                                        <div class="progress-bar" role="progressbar" style="width: 100%"
                                             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                             100%
                                        </div>
                                   </div>
                                   <div class="progress-title line-clamp line-clamp-1"
                                        title="Sự hài lòng của khách hàng">
                                        Sự hài lòng của khách hàng
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_whychoose">
               <div class="container">
                    <div class="row">
                         <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                              <div class="block-title">
                                   <span class="top-title">Lý do lựa chọn chúng tôi</span>
                                   <h2 style="color: #006ac0;">Với phương châm "Chuyên nghiệp - Tận tâm - Sáng tạo"</h2>
                                   <p>Chúng tôi luôn nỗ lực để mang đến cho khách hàng những dịch vụ tốt nhất.</p>
                              </div>
                              <div class="whychoose-content">

                                   <div class="why-box">
                                        <div class="box-icon">
                                             <img class="img-fluid"
                                                  src="../assets/css/themes/why_choose_icon_17e7a.png?1715757113942"
                                                  alt="Lofi Construction" width="50" height="50" />
                                        </div>
                                        <div class="box-content">
                                             <h3>Kinh nghiệm và chuyên môn</h3>
                                             <p>Với nhiều năm kinh nghiệm, Blue Sapphire cung cấp giải pháp phù hợp cho
                                                  các ngành nghề khác nhau, giúp doanh nghiệp đạt hiệu quả tối ưu.</p>
                                        </div>
                                   </div>

                                   <div class="why-box">
                                        <div class="box-icon">
                                             <img class="img-fluid"
                                                  src="../assets/css/themes/why_choose_icon_27e7a.png?1715757113942"
                                                  alt="Lofi Construction" width="50" height="50" />
                                        </div>
                                        <div class="box-content">
                                             <h3>Giải pháp toàn diện</h3>
                                             <p>Cung cấp dịch vụ thiết kế website, bộ nhận diện thương hiệu, sản xuất
                                                  video, quản lý mạng xã hội và quảng cáo trực tuyến.</p>
                                        </div>
                                   </div>

                                   <div class="why-box">
                                        <div class="box-icon">
                                             <img class="img-fluid"
                                                  src="../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
                                                  alt="Lofi Construction" width="50" height="50" />
                                        </div>
                                        <div class="box-content">
                                             <h3>Tùy chỉnh theo nhu cầu</h3>
                                             <p>Các giải pháp được thiết kế riêng biệt, phù hợp với mục tiêu và đặc thù
                                                  của từng doanh nghiệp</p>
                                        </div>
                                   </div>

                                   <div class="why-box">
                                        <div class="box-icon">
                                             <img class="img-fluid"
                                                  src="../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
                                                  alt="Lofi Construction" width="50" height="50" />
                                        </div>
                                        <div class="box-content">
                                             <h3>Chất lượng dịch vụ cao</h3>
                                             <p>Đội ngũ nhân viên và kỹ thuật giàu kinh nghiệm, đảm bảo dịch vụ chất
                                                  lượng và đạt kết quả vượt trội.</p>
                                        </div>
                                   </div>

                              </div>
                         </div>
                         <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                              <div class="whychoose-image">
                                   <img class="img-fluid" width="935" height="806"
                                        src="../assets/images//sections-5.jpg"
                                        alt="Lý do lựa chọn chúng tôi" />
                              </div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_view_product">
               <div class="container">
                    <div class="row align-items-center">
                         <div class="col-lg-9 col-md-9 col-12 col-left">
                              <p>Các sản phẩm/dịch vụ chúng tôi đang cung cấp</p>
                         </div>
                         <div class="col-lg-3 col-md-3 col-12 col-right">
                              <router-link to="/" target="_blank">Xem thêm</router-link>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_team">
               <div class="container-fluid">
                    <div class="block-title">
                         <span class="top-title">Tận tâm, chuyên nghiệp</span>
                         <h2><router-link to="/">Đội ngũ của chúng tôi</router-link></h2>
                    </div>
                    <div class="block-content">
                         <div class="swiper-container swiper-team">
                              <div class="swiper-wrapper">
                                   <div class="swiper-slide item">
                                        <div class="team-item">
                                             <div class="team-image">
                                                  <a href="/" title="Lê Gia Long" class="thumb">

                                                       <img width="540" height="600" class="lazyload"
                                                            src="../assets/images//cty/NHA-TRANG.webp"
                                                            data-src="../assets/css/themes/team-image-1.webp?v=1702523936450"
                                                            alt="Lê Gia Long">
                                                  </a>
                                             </div>
                                             <div class="team-info">
                                                  <div class="name">
                                                       <a class="line-clamp line-clamp-1" href="/"
                                                            title="Lê Gia Long">Office - Nha Trang</a>
                                                  </div>
                                                  <!-- <div class="department">
                                                       Tổng Giám Đốc
                                                  </div> -->

                                             </div>

                                             <div class="social">
                                                  <ul>
                                                       <li>
                                                            <a href="https://www.facebook.com/" target="_blank"
                                                                 title="Facebook">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_facebook7e7a.png?1715757113942"
                                                                      alt="Facebook" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://twitter.com/" target="_blank"
                                                                 title="Twitter">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_twitter7e7a.png?1715757113942"
                                                                      alt="Twitter" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.instagram.com/" target="_blank"
                                                                 title="Instagram">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_instagram7e7a.png?1715757113942"
                                                                      alt="Instagram" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.linkedin.com/" target="_blank"
                                                                 title="Linkedin">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_linkedin7e7a.png?1715757113942"
                                                                      alt="Linkedin" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.youtube.com/" target="_blank"
                                                                 title="Youtube">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_youtube7e7a.png?1715757113942"
                                                                      alt="Youtube" />
                                                            </a>
                                                       </li>

                                                  </ul>
                                             </div>

                                        </div>
                                   </div>
                                   <div class="swiper-slide item">
                                        <div class="team-item">
                                             <div class="team-image">
                                                  <a href="/" title="Lưu Phương Huyền" class="thumb">

                                                       <img width="540" height="600" class="lazyload"
                                                            src="../assets/images/cty/SAI-GON.webp"
                                                            data-src="../assets/css/themes/team-image-2.webp?v=1702524324723"
                                                            alt="Lưu Phương Huyền">

                                                  </a>
                                             </div>
                                             <div class="team-info">
                                                  <div class="name">
                                                       <a class="line-clamp line-clamp-1" href="/"
                                                            title="Lưu Phương Huyền">Office - Sài Gòn</a>
                                                  </div>
                                                  <!-- <div class="department">
                                                       Trưởng phòng kế toán
                                                  </div> -->
                                             </div>
                                             <div class="social">
                                                  <ul>
                                                       <li>
                                                            <a href="https://www.facebook.com/" target="_blank"
                                                                 title="Facebook">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_facebook7e7a.png?1715757113942"
                                                                      alt="Facebook" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://twitter.com/" target="_blank"
                                                                 title="Twitter">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_twitter7e7a.png?1715757113942"
                                                                      alt="Twitter" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.instagram.com/" target="_blank"
                                                                 title="Instagram">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_instagram7e7a.png?1715757113942"
                                                                      alt="Instagram" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.linkedin.com/" target="_blank"
                                                                 title="Linkedin">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_linkedin7e7a.png?1715757113942"
                                                                      alt="Linkedin" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.youtube.com/" target="_blank"
                                                                 title="Youtube">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_youtube7e7a.png?1715757113942"
                                                                      alt="Youtube" />
                                                            </a>
                                                       </li>

                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="swiper-slide item">
                                        <div class="team-item">
                                             <div class="team-image">
                                                  <a href="/" title="Lê Thị Hương" class="thumb">

                                                       <img width="540" height="600" class="lazyload"
                                                            src="../assets/images/cty/QUY-NHON.webp"
                                                            data-src="../assets/css/themes/team-image-3.webp?v=1702524418773"
                                                            alt="Lê Thị Hương">

                                                  </a>
                                             </div>
                                             <div class="team-info">
                                                  <div class="name">
                                                       <a class="line-clamp line-clamp-1" href="/"
                                                            title="Lê Thị Hương">Office - Quy Nhơn</a>
                                                  </div>
                                                  <!-- <div class="department">
                                                       Giám đốc truyền thông
                                                  </div> -->

                                             </div>
                                             <div class="social">
                                                  <ul>
                                                       <li>
                                                            <a href="https://www.facebook.com/" target="_blank"
                                                                 title="Facebook">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_facebook7e7a.png?1715757113942"
                                                                      alt="Facebook" />
                                                            </a>
                                                       </li>
                                                       <li>
                                                            <a href="https://twitter.com/" target="_blank"
                                                                 title="Twitter">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_twitter7e7a.png?1715757113942"
                                                                      alt="Twitter" />
                                                            </a>
                                                       </li>
                                                       <li>
                                                            <a href="https://www.instagram.com/" target="_blank"
                                                                 title="Instagram">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_instagram7e7a.png?1715757113942"
                                                                      alt="Instagram" />
                                                            </a>
                                                       </li>
                                                       <li>
                                                            <a href="https://www.linkedin.com/" target="_blank"
                                                                 title="Linkedin">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_linkedin7e7a.png?1715757113942"
                                                                      alt="Linkedin" />
                                                            </a>
                                                       </li>
                                                       <li>
                                                            <a href="https://www.youtube.com/" target="_blank"
                                                                 title="Youtube">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_youtube7e7a.png?1715757113942"
                                                                      alt="Youtube" />
                                                            </a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="swiper-slide item">
                                        <div class="team-item">
                                             <div class="team-image">
                                                  <a href="/" title="Đào Văn Hiếu" class="thumb">

                                                       <img width="540" height="600" class="lazyload"
                                                            src="../assets/images/cty/DA-NANG.webp"
                                                            data-src="../assets/css/themes/team-image-4.webp?v=1702524176197"
                                                            alt="Đào Văn Hiếu">

                                                  </a>
                                             </div>
                                             <div class="team-info">
                                                  <div class="name">
                                                       <a class="line-clamp line-clamp-1" href="/"
                                                            title="Đào Văn Hiếu">Office - Đà Nẵng</a>
                                                  </div>
                                                  <!-- <div class="department">
                                                       Giám sát thi công
                                                  </div> -->

                                             </div>

                                             <div class="social">
                                                  <ul>
                                                       <li>
                                                            <a href="https://www.facebook.com/" target="_blank"
                                                                 title="Facebook">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_facebook7e7a.png?1715757113942"
                                                                      alt="Facebook" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://twitter.com/" target="_blank"
                                                                 title="Twitter">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_twitter7e7a.png?1715757113942"
                                                                      alt="Twitter" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.instagram.com/" target="_blank"
                                                                 title="Instagram">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_instagram7e7a.png?1715757113942"
                                                                      alt="Instagram" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.linkedin.com/" target="_blank"
                                                                 title="Linkedin">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_linkedin7e7a.png?1715757113942"
                                                                      alt="Linkedin" />
                                                            </a>
                                                       </li>


                                                       <li>
                                                            <a href="https://www.youtube.com/" target="_blank"
                                                                 title="Youtube">
                                                                 <img class="img-fluid"
                                                                      src="../assets/css/themes/ic_youtube7e7a.png?1715757113942"
                                                                      alt="Youtube" />
                                                            </a>
                                                       </li>

                                                  </ul>
                                             </div>

                                        </div>
                                   </div>
                              </div>
                              <div class="swiper-pagination"></div>
                         </div>
                    </div>
               </div>
          </section>
          <section class="section_blog">
               <div class="container">
                    <div class="block-title">
                         <span class="top-title">Tin tức</span>
                         <h2 class="title"><router-link to="/" title="Bài viết mới nhất">Bài viết mới nhất</router-link>
                         </h2>
                    </div>
                    <div class="block-blog relative">
                         <div class="row">
                              <div v-for="post in posts" :key="post.id" class="col-lg-6 col-md-12 col-12">
                                   <div class="item-blog">
                                        <div class="article-card row">
                                             <div class="col-md-6 col-12">
                                                  <div class="block-thumb">
                                                       <router-link class="thumb" :to="`/new/${post.id}`">
                                                            <img class="lazyload"
                                                                 :src="post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url"
                                                                 data-src="//bizweb.dktcdn.net/thumb/large/100/503/218/articles/nhung-mau-son-du-kien-tro-nen-loi-thoi-vao-nam-2023-265-16841272761201703310274-ezgif-com-webp-to-jpg-converter.jpg?v=1711979548457"
                                                                 alt="Những màu sơn sẽ lỗi thời năm 2024 và những lợi ích khi sơn nhà màu trắng">
                                                       </router-link>
                                                  </div>
                                             </div>
                                             <div class="col-md-6 col-12">
                                                  <div class="block-content">
                                                       <div class="time-post">
                                                            <div class="author-post">
                                                                 <svg aria-hidden="true" focusable="false"
                                                                      data-prefix="fas" data-icon="user" role="img"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 448 512"
                                                                      class="svg-inline--fa fa-user fa-w-14">
                                                                      <path fill="#595959"
                                                                           d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                                                           class=""></path>
                                                                 </svg>
                                                                 <span>Team Blue Shapphire</span>
                                                            </div>
                                                            <div class="date-post f">

                                                                 <svg aria-hidden="true" focusable="false"
                                                                      data-prefix="fal" data-icon="clock" role="img"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      viewBox="0 0 512 512"
                                                                      class="svg-inline--fa fa-clock fa-w-16">
                                                                      <path fill="#595959"
                                                                           d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                                                           class=""></path>
                                                                 </svg>
                                                                 {{ formatDate(post.date) }}
                                                            </div>
                                                       </div>
                                                       <h3><router-link :to="`/new/${post.id}`"
                                                                 v-html="post.title.rendered">
                                                            </router-link>
                                                       </h3>

                                                       <div class="article-content" v-html="post.excerpt.rendered">
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     </div>
</template>



<script>
import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import $ from "jquery";
import "counterup/jquery.counterup.min.js";
import axios from 'axios';
import lightGallery from "lightgallery";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css"; // Import CSS cho plugin video
// import counterUp from "counterup2";
export default {
     name: 'Home',
     data() {
          return {
               posts: [],
          }
     },
     methods: {
          async fetchPosts(categoryId = 4) {
               this.isLoading = true;
               let url = "https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?_embed"
               if (categoryId) {
                    url += `&categories=${categoryId}`;
               }
               try {
                    const response = await axios.get(url);
                    this.posts = response.data;
               } catch (error) {
                    console.error("Lỗi khi lấy bài viết:", error);
               } finally {
                    this.isLoading = false; // Kết thúc loading
               }
          },
          formatDate(dateString) {
               return dateString.split('T')[0]; // Lấy phần YYYY-MM-DD
          },
          initLightGallery() {
               if (this.$refs.gallery) {
                    this.$nextTick(() => {
                         lightGallery(this.$refs.gallery, {
                              plugins: [lgVideo], // Kích hoạt plugin video
                              selector: ".video-item", // Chỉ áp dụng cho video
                              thumbnail: true, // Hiển thị ảnh thumbnail
                              download: false, // Tắt tải xuống
                              autoplayFirstVideo: false, // Không tự động phát
                              zoomFromOrigin: false, // Fix lỗi màn hình đen
                              videojs: true, // Bật hỗ trợ video nâng cao
                              mobileSettings: {
                                   controls: true,
                                   showCloseIcon: true,
                                   download: false,
                              },
                         });
                    });
               }
          },
     },
     mounted() {
          new Swiper('.home-slider', {
               loop: false,
               autoplay: true,
               pagination: {
                    el: '.home-slider .swiper-pagination',
                    clickable: true,
               },
               navigation: {
                    nextEl: '.home-slider .swiper-button-next',
                    prevEl: '.home-slider .swiper-button-prev',
               },
          });
          new Swiper('.swiper-team', {
               slidesPerView: 4,
               loop: false,
               grabCursor: true,
               spaceBetween: 30,
               slidesPerColumn: 1,
               slidesPerColumnFill: 'row',
               roundLengths: true,
               slideToClickedSlide: false,
               autoplay: false,
               navigation: {
                    nextEl: '.swiper-team .swiper-button-next',
                    prevEl: '.swiper-team .swiper-button-prev',
               },
               pagination: {
                    el: '.swiper-team .swiper-pagination',
                    clickable: true,
               },
               breakpoints: {
                    300: {
                         slidesPerView: 1,
                         spaceBetween: 10
                    },
                    500: {
                         slidesPerView: 1.5,
                         spaceBetween: 15
                    },
                    640: {
                         slidesPerView: 2,
                         spaceBetween: 20
                    },
                    768: {
                         slidesPerView: 2,
                         spaceBetween: 30
                    },
                    992: {
                         slidesPerView: 3,
                         spaceBetween: 30
                    },
                    1200: {
                         slidesPerView: 4,
                         spaceBetween: 30
                    }
               }
          });
          if ($(".counter-number").length === 0) {
               console.error("❌ Không tìm thấy .counter-number!");
               return;
          }
          this.$nextTick(() => {
               setTimeout(() => {
                    if ($(".counter-number").length > 0) {
                         if (typeof $.fn.counterUp !== "undefined") {
                              $(".counter-number").counterUp({
                                   delay: 10,
                                   time: 1000
                              });
                         } else {
                              console.error("Không tìm thấy phần tử .counter!");
                         }
                    } else {
                         console.error("❌ Không tìm thấy phần tử .counter-number!");
                    }

               }, 500);
          });
          this.fetchPosts();
          this.initLightGallery();
     },
     beforeDestroy() {
          if (this.$refs.gallery) {
               this.$refs.gallery.lgDestroy && this.$refs.gallery.lgDestroy();
          }
     },
}


</script>


<style>
/* Include LightGallery styles if not already added */
@import "lightgallery/css/lightgallery.css";

.section_progress {
     padding: 80px 0px 80px;
}
</style>