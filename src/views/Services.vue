<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/images/banner_page-dich.vu.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Dịch Vụ
                </div>
                <ul class="breadcrumb">
                    <li class="home">
                        <router-link to="/"><span>Trang chủ</span></router-link>
                        <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10">
                                <path fill="currentColor"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    class=""></path>
                            </svg>&nbsp;</span>
                    </li>

                    <li><strong><span>Dịch Vụ</span></strong></li>

                </ul>
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
                                        src="../assets/images/dichvu//dich.vu.chung.toi_4.jpg" alt="Lofi Construction">
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
                                        src="../assets/images/dichvu/dich.vu.chung.toi_3.jpg" alt="Lofi Construction">
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
                                        src="../assets/images/dichvu/dich.vu.chung.toi_2.jpg" alt="Lofi Construction">
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
                            <img class="img-fluid" src="../assets/css/themes/progress.webp"
                                alt="" title="" />
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
                                <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95"
                                    aria-valuemin="0" aria-valuemax="100">
                                    95%
                                </div>
                            </div>
                            <div class="progress-title line-clamp line-clamp-1" title="Máy móc công ty">
                                Công nghệ tối ưu
                            </div>
                        </div>
                        <div class="all-skill-bar">
                            <div class="progress skill-bar">
                                <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85"
                                    aria-valuemin="0" aria-valuemax="100">
                                    90%
                                </div>
                            </div>
                            <div class="progress-title line-clamp line-clamp-1" title="Kỹ sư có trình độ">
                                Nhân viên có trình độ
                            </div>
                        </div>
                        <div class="all-skill-bar">
                            <div class="progress skill-bar">
                                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100"
                                    aria-valuemin="0" aria-valuemax="100">
                                    100%
                                </div>
                            </div>
                            <div class="progress-title line-clamp line-clamp-1" title="Sự hài lòng của khách hàng">
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
                                    <p>Với nhiều năm kinh nghiệm, Blue Sapphire cung cấp giải pháp phù hợp cho các ngành
                                        nghề khác nhau, giúp doanh nghiệp đạt hiệu quả tối ưu.</p>
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
                                    <p>Cung cấp dịch vụ thiết kế website, bộ nhận diện thương hiệu, sản xuất video, quản
                                        lý mạng xã hội và quảng cáo trực tuyến.</p>
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
                                    <p>Các giải pháp được thiết kế riêng biệt, phù hợp với mục tiêu và đặc thù của từng
                                        doanh nghiệp</p>
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
                                    <p>Đội ngũ nhân viên và kỹ thuật giàu kinh nghiệm, đảm bảo dịch vụ chất lượng và đạt
                                        kết quả vượt trội.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div class="whychoose-image">
                            <img class="img-fluid" width="935" height="806"
                                src="../assets/images/sections-5.jpg"
                                alt="Lý do lựa chọn chúng tôi" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
    name: 'Services'
}
</script>