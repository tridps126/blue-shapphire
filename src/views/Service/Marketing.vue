<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            >
            <div class="container">
                <div class="title-breadcrumb">
                    Chiến lược Marketing
                </div>
                <ul class="breadcrumb">
                    <li class="home">
                        <a href="index.html"><span>Trang chủ</span></a>
                        <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10">
                                <path fill="currentColor"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    class=""></path>
                            </svg>&nbsp;</span>
                    </li>

                    <li><strong><span>Chiến lược Marketing</span></strong></li>

                </ul>
            </div>
        </section>

        <section class="page">
            <div class="container">
                <div class="pg_page">
                    <div class="row">
                        <div class="right-content col-lg-8 col-12">
                            <div class="page-title category-title">
                                <h1 class="title-head" style="color: #006ac0;">Chiến Lược Marketing</h1>
                            </div>
                            <div class="content-page rte">
                                <h4 style="color: #006ac0;"><strong>Giải Pháp Marketing Cho Doanh Nghiệp Của Blue Sapphire</strong></h4>
                                <ul>
                                    <li>
                                        <p><strong>Thiết Kế Website Chuyên Nghiệp</strong></p>
                                        <p>Website là bộ mặt trực tuyến của doanh nghiệp, là công cụ quan trọng để tiếp
                                            cận khách hàng và tạo ấn tượng đầu tiên. Blue Sapphire cung cấp dịch vụ
                                            thiết kế website hiện đại, dễ sử dụng, tối ưu hóa tốc độ tải và tương thích
                                            với mọi thiết bị. Chúng tôi giúp doanh nghiệp xây dựng website không chỉ đẹp
                                            mắt mà còn thân thiện với người dùng và tối ưu hóa cho công cụ tìm kiếm
                                            (SEO).</p>
                                    </li>
                                    <li>
                                        <p><strong>Thiết Kế Logo & Bộ Nhận Diện Thương Hiệu</strong></p>
                                        <p>Logo và bộ nhận diện thương hiệu là yếu tố quan trọng trong việc xây dựng
                                            hình ảnh doanh nghiệp. Chúng tôi cung cấp dịch vụ thiết kế logo sáng tạo,
                                            phản ánh đúng giá trị và bản sắc doanh nghiệp. Cùng với đó, Blue Sapphire
                                            phát triển bộ nhận diện thương hiệu hoàn chỉnh(brochure, menu, gift card…),
                                            bao gồm màu sắc, kiểu chữ và các yếu tố đồ họa để đảm bảo sự đồng nhất trong
                                            mọi hoạt động marketing.</p>
                                    </li>
                                    <li>
                                        <p><strong>Quản Lý Mạng Xã Hội (Social Media Management)</strong></p>
                                        <p>Chúng tôi giúp doanh nghiệp xây dựng và duy trì sự hiện diện mạnh mẽ trên các
                                            nền tảng mạng xã hội như Facebook, Instagram và Google. Dịch vụ quản lý mạng
                                            xã hội của Blue Sapphire bao gồm việc xây dựng chiến lược nội dung, đăng bài
                                            thường xuyên, và tương tác với người theo dõi để tạo dựng mối quan hệ bền
                                            vững với khách hàng.</p>
                                    </li>
                                    <li>
                                        <p><strong>Dịch vụ Quảng Cáo trên Google & Facebook (Google & FB Ads)</strong>
                                        </p>
                                        <p>Blue Sapphire cung cấp dịch vụ chạy quảng cáo trên các nền tảng lớn như
                                            Google và Facebook, giúp doanh nghiệp tiếp cận đúng đối tượng khách hàng mục
                                            tiêu. Chúng tôi tối ưu hóa chiến dịch quảng cáo để đạt được hiệu quả cao
                                            nhất với ngân sách hợp lý, giúp tăng trưởng doanh thu và mở rộng thị trường
                                            nhanh chóng.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="page_services col-lg-4 col-12">
                            <div class="aside-content-menu">
                                <div class="title">
                                    Các dịch vụ khác
                                </div>
                                <nav class="nav-category">
                                    <ul class="navbar-pills">
                                        <li class="nav-item relative"
                                            :class="{ active: $route.path === '/service/contact-center' }">
                                            <router-link to="/service/contact-center" class="nav-link">Contact
                                                Center</router-link>
                                        </li>
                                        <li class="nav-item  relative"
                                            :class="{ active: $route.path === '/service/website' }">
                                            <router-link to="/service/website" class="nav-link">Phát triển
                                                website</router-link>
                                        </li>
                                        <li class="nav-item  relative"
                                            :class="{ active: $route.path === '/service/marketing' }">
                                            <router-link to="/service/marketing" class="nav-link">Chiến lược
                                                Marketing</router-link>
                                        </li>
                                    </ul>
                                </nav>
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

        <section class="section_working">
            <div class="container">
                <div class="block-title">
                    <span class="top-title">Quy trình làm việc</span>
                    <h2>Cách chúng tôi làm việc cho khách hàng của mình</h2>
                </div>
                <div class="inner">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 col-12 inner-box">
                            <div class="item">
                                <div class="icon">
                                    <img class="img-fluid" src="../../assets/css/themes/working_icon_17e7a.png"
                                        alt="Lofi Construction">
                                </div>
                                <div class="content">
                                    <h3>Lập kế hoạch</h3>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6 col-12 inner-box">
                            <div class="item">
                                <div class="icon">
                                    <img class="img-fluid"
                                        src="../../assets/css/themes/working_icon_27e7a.png?1715757113942"
                                        alt="Lofi Construction">
                                </div>
                                <div class="content">
                                    <h3>Thiết kế</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12 inner-box">
                            <div class="item">
                                <div class="icon">
                                    <img class="img-fluid"
                                        src="../../assets/css/themes/working_icon_37e7a.png?1715757113942"
                                        alt="Lofi Construction">
                                </div>
                                <div class="content">
                                    <h3>Phát triển</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12 inner-box">
                            <div class="item">
                                <div class="icon">
                                    <img class="img-fluid"
                                        src="../../assets/css/themes/working_icon_47e7a.png?1715757113942"
                                        alt="Lofi Construction">
                                </div>
                                <div class="content">
                                    <h3>Bàn giao</h3>
                                </div>
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
                                        src="../../assets/css/themes/why_choose_icon_17e7a.png?1715757113942"
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
                                        src="../../assets/css/themes/why_choose_icon_27e7a.png?1715757113942"
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
                                        src="../../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
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
                                        src="../../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
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
                                src="../../assets/images/sections-5.jpg"
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
    name: 'Marketing'
}
</script>