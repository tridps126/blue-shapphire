<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Giới thiệu
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

                    <li><strong><span>Giới thiệu</span></strong></li>

                </ul>
            </div>
        </section>
        <section class="page page-about-us">
            <div class="page-title category-title d-none">
                <h1 class="title-head">Giới thiệu</h1>
            </div>
            <section class="section_about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-12 col-left">
                            <div class="about-image">
                                <img class="lazyload img-fluid" width="676" height="683"
                                    src="../assets/images/otther_2.jpg"
                                    data-src="//bizweb.dktcdn.net/100/503/218/themes/931576/assets/about-image.jpg?1715757113942"
                                    alt="Lofi Construction" />
                                <div class="block_video_play">
                                    <a href="https://www.youtube.com/watch?v=jf2fmaKutLQ"
                                        class="video_play popup-youtube" title="Lofi Construction">
                                        <span class="video-icon">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play"
                                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                                data-fa-i2svg="">
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
                                <h2 class="title">Cam kết chất lượng và kết quả vượt trội</h2>
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
            <section class="section_values">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-12 col-12">
                            <div class="values-content">
                                <div class="block-title">
                                    <span class="top-title">Our Values</span>
                                    <h2>Chất lượng làm việc từ các chuyên gia tận tâm</h2>
                                </div>
                                <div class="desc">
                                    Giá trị của chúng tôi là kim chỉ nam để định hình hành vi và quyết định, giúp chúng
                                    tôi đạt được mục tiêu chung và phát triển bền vững trong tương lai.
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-12 col-12">
                            <div class="values-inner">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 d-table-cell">
                                        <div class="item">
                                            <div class="icon">
                                                <img class="img-fluid"
                                                    src="../assets/css/themes/icon-vision7e7a.png?1715757113942"
                                                    alt="Lofi Construction">
                                            </div>
                                            <div class="content">
                                                <h3>Tầm nhìn</h3>
                                                <p>Xây dựng một hệ sinh thái giải pháp toàn diện, mang lại sự đổi mới và
                                                    nâng cao hiệu quả cho doanh nghiệp trong mọi lĩnh vực, từ công nghệ
                                                    đến marketing và nhân sự.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-12 d-table-cell">
                                        <div class="item">
                                            <div class="icon">
                                                <img class="img-fluid"
                                                    src="../assets/css/themes/icon-mission7e7a.png?1715757113942"
                                                    alt="Lofi Construction">
                                            </div>
                                            <div class="content">
                                                <h3>Sứ mệnh</h3>
                                                <p>Hỗ trợ doanh nghiệp trong việc ứng dụng công nghệ mới, xây dựng chiến
                                                    lược thông minh và phát triển nhân lực chuyên nghiệp, giúp khách
                                                    hàng vươn tới thành công trong kỷ nguyên số.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about_service">
                <div class="bg"></div>
                <div class="container">
                    <div class="block-title">
                        <span class="top-title">Chúng tôi làm gì</span>
                        <h2 style="color: #006ac0;"><a href="dich-vu.html">Cung cấp dịch vụ chất lượng</a></h2>
                    </div>
                    <div class="block-content">
                        <div class="swiper-container swiper-about-service cus-swiper">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image">
                                            <img class="img-fluid"
                                                src="../assets/images/dichvu//dich.vu.chung.toi_4.jpg"
                                                alt="Lofi Construction">
                                        </div>
                                        <div class="main">
                                            <h3>Contact Center</h3>
                                            <p>Với đội ngũ nhân viên chuyên nghiệp và tận tâm, chúng tôi giúp doanh
                                                nghiệp tạo dựng mối quan hệ bền vững với khách hàng thông qua dịch vụ
                                                chăm sóc khách hàng và telesale hiệu quả.
                                            </p>
                                            <div class="ctas">
                                                <router-link to="/service/contact-content" class="btn-viewmore">Xem
                                                    Thêm</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image">
                                            <img class="img-fluid"
                                                src="../assets/images/dichvu//dich.vu.chung.toi_3.jpg"
                                                alt="Lofi Construction">
                                        </div>
                                        <div class="main">
                                            <h3>Phát triển website</h3>
                                            <p>Blue Sapphire cung cấp các giải pháp thiết kế và phát triển website chất
                                                lượng cao, dễ sử dụng, tối ưu cho cả người dùng và doanh nghiệp, giúp
                                                nâng cao sự hiện diện trực tuyến của bạn.
                                            </p>
                                            <div class="ctas">
                                                <router-link to="/service/website" class="btn-viewmore">Xem
                                                    Thêm</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image">
                                            <img class="img-fluid"
                                                src="../assets/images/dichvu//dich.vu.chung.toi_2.jpg"
                                                alt="Lofi Construction">
                                        </div>
                                        <div class="main">
                                            <h3>Chiến lược Marketing</h3>
                                            <p>Chúng tôi thực hiện các chiến dịch marketing tối ưu giúp doanh nghiệp
                                                tiếp cận đúng đối tượng khách hàng và tăng trưởng bền vững, đồng thời
                                                tối đa hóa hiệu quả chi phí.
                                            </p>
                                            <div class="ctas">
                                                <router-link to="/service/marketing" class="btn-viewmore">Xem
                                                    Thêm</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
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
                                                    src="../assets/css/themes/team-image-1.webp?v=1702523936450"
                                                    data-src="../assets/css/themes/team-image-1.webp?v=1702523936450"
                                                    alt="Lê Gia Long">
                                            </a>
                                        </div>
                                        <div class="team-info">
                                            <div class="name">
                                                <a class="line-clamp line-clamp-1" href="/" title="Lê Gia Long">Lê Gia
                                                    Long</a>
                                            </div>
                                            <div class="department">
                                                Tổng Giám Đốc
                                            </div>

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
                                                    <a href="https://twitter.com/" target="_blank" title="Twitter">
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
                                                    <a href="https://www.youtube.com/" target="_blank" title="Youtube">
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
                                                    src="../assets/css/themes/team-image-2.webp?v=1702524324723"
                                                    data-src="../assets/css/themes/team-image-2.webp?v=1702524324723"
                                                    alt="Lưu Phương Huyền">

                                            </a>
                                        </div>
                                        <div class="team-info">
                                            <div class="name">
                                                <a class="line-clamp line-clamp-1" href="/" title="Lưu Phương Huyền">Lưu
                                                    Phương Huyền</a>
                                            </div>
                                            <div class="department">
                                                Trưởng phòng kế toán
                                            </div>
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
                                                    <a href="https://twitter.com/" target="_blank" title="Twitter">
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
                                                    <a href="https://www.youtube.com/" target="_blank" title="Youtube">
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
                                                    src="../assets/css/themes/team-image-3.webp?v=1702524418773"
                                                    data-src="../assets/css/themes/team-image-3.webp?v=1702524418773"
                                                    alt="Lê Thị Hương">

                                            </a>
                                        </div>
                                        <div class="team-info">
                                            <div class="name">
                                                <a class="line-clamp line-clamp-1" href="/" title="Lê Thị Hương">Lê Thị
                                                    Hương</a>
                                            </div>
                                            <div class="department">
                                                Giám đốc truyền thông
                                            </div>

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
                                                    <a href="https://twitter.com/" target="_blank" title="Twitter">
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
                                                    <a href="https://www.youtube.com/" target="_blank" title="Youtube">
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
                                                    src="../assets/css/themes/team-image-4.webp?v=1702524176197"
                                                    data-src="../assets/css/themes/team-image-4.webp?v=1702524176197"
                                                    alt="Đào Văn Hiếu">

                                            </a>
                                        </div>
                                        <div class="team-info">
                                            <div class="name">
                                                <a class="line-clamp line-clamp-1" href="/" title="Đào Văn Hiếu">Đào Văn
                                                    Hiếu</a>
                                            </div>
                                            <div class="department">
                                                Giám sát thi công
                                            </div>

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
                                                    <a href="https://twitter.com/" target="_blank" title="Twitter">
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
                                                    <a href="https://www.youtube.com/" target="_blank" title="Youtube">
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
            <section class="section_testimonials">
                <div class="container">
                    <div class="block-title">
                        <span class="top-title">Nhận xét của khách hàng</span>
                        <h2 class="title" style="color: #006ac0;">Khách hàng của chúng tôi nói gì?</h2>
                    </div>
                    <div class="testimonials-content">
                        <div class="testimonials-swiper swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="testimonials">
                                        <div class="icon">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="33" height="24"
                                                viewBox="0 0 33 24" fill="none">
                                                <path
                                                    d="M13.6986 1.75342L10.1918 9.53425L9.53425 10.9589L10.8493 11.8356C12.6027 12.9315 13.3699 14.2466 13.3699 16.1096C13.3699 18.0822 12.8219 19.5068 11.726 20.6027C10.6301 21.6986 9.31507 22.137 7.56164 22.137C5.80822 22.137 4.49315 21.589 3.39726 20.6027C2.30137 19.6164 1.75342 18.3014 1.75342 16.6575C1.75342 14.7945 2.30137 13.0411 3.61644 11.2877L10.0822 1.86301H13.6986V1.75342ZM16.4384 0H9.20548L2.19178 10.1918C0.767123 12.274 0 14.3562 0 16.5479C0 18.7397 0.767123 20.4932 2.19178 21.9178C3.61644 23.2329 5.47945 24 7.67123 24C9.86301 24 11.6164 23.3425 13.0411 21.9178C14.4658 20.4932 15.2329 18.6301 15.2329 16.2192C15.2329 13.8082 14.137 11.8356 11.8356 10.411L16.4384 0Z"
                                                    fill="var(--mainColor)"></path>
                                                <path
                                                    d="M29.8082 1.75342L26.3014 9.53425L25.6438 10.9589L26.9589 11.8356C28.7123 12.9315 29.4795 14.2466 29.4795 16.1096C29.4795 18.0822 28.9315 19.5068 27.8356 20.6027C26.7397 21.6986 25.4247 22.137 23.6712 22.137C21.9178 22.137 20.6027 21.589 19.5068 20.6027C18.411 19.6164 17.863 18.3014 17.863 16.6575C17.863 14.7945 18.411 13.0411 19.726 11.2877L26.3014 1.75342H29.8082ZM32.6575 0H25.3151L18.3014 10.1918C16.8767 12.274 16.1096 14.3562 16.1096 16.5479C16.1096 18.7397 16.8767 20.4932 18.3014 21.9178C19.726 23.2329 21.589 24 23.7808 24C25.9726 24 27.726 23.3425 29.1507 21.9178C30.5753 20.4932 31.3425 18.6301 31.3425 16.2192C31.3425 13.8082 30.2466 11.8356 27.9452 10.411L32.6575 0Z"
                                                    fill="var(--mainColor)"></path>
                                            </svg>
                                        </div>
                                        <div class="content">Sự chuyên nghiệp và tận tâm của đội ngũ đã tạo ra một không
                                            gian sống tuyệt vời cho gia đình tôi.</div>
                                        <div class="info">
                                            <div class="avatar">
                                                <img width="80" height="80" class="img-fluid"
                                                    src="../assets/css/themes/testimonials_image_17e7a.jpg?1715757113942"
                                                    alt="Lofi Construction" />
                                            </div>
                                            <div class="details-info">
                                                <h5>Lưu Phương Huyền</h5>
                                                <span>Freelancer Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>








                                <div class="swiper-slide">
                                    <div class="testimonials">
                                        <div class="icon">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="33" height="24"
                                                viewBox="0 0 33 24" fill="none">
                                                <path
                                                    d="M13.6986 1.75342L10.1918 9.53425L9.53425 10.9589L10.8493 11.8356C12.6027 12.9315 13.3699 14.2466 13.3699 16.1096C13.3699 18.0822 12.8219 19.5068 11.726 20.6027C10.6301 21.6986 9.31507 22.137 7.56164 22.137C5.80822 22.137 4.49315 21.589 3.39726 20.6027C2.30137 19.6164 1.75342 18.3014 1.75342 16.6575C1.75342 14.7945 2.30137 13.0411 3.61644 11.2877L10.0822 1.86301H13.6986V1.75342ZM16.4384 0H9.20548L2.19178 10.1918C0.767123 12.274 0 14.3562 0 16.5479C0 18.7397 0.767123 20.4932 2.19178 21.9178C3.61644 23.2329 5.47945 24 7.67123 24C9.86301 24 11.6164 23.3425 13.0411 21.9178C14.4658 20.4932 15.2329 18.6301 15.2329 16.2192C15.2329 13.8082 14.137 11.8356 11.8356 10.411L16.4384 0Z"
                                                    fill="var(--mainColor)"></path>
                                                <path
                                                    d="M29.8082 1.75342L26.3014 9.53425L25.6438 10.9589L26.9589 11.8356C28.7123 12.9315 29.4795 14.2466 29.4795 16.1096C29.4795 18.0822 28.9315 19.5068 27.8356 20.6027C26.7397 21.6986 25.4247 22.137 23.6712 22.137C21.9178 22.137 20.6027 21.589 19.5068 20.6027C18.411 19.6164 17.863 18.3014 17.863 16.6575C17.863 14.7945 18.411 13.0411 19.726 11.2877L26.3014 1.75342H29.8082ZM32.6575 0H25.3151L18.3014 10.1918C16.8767 12.274 16.1096 14.3562 16.1096 16.5479C16.1096 18.7397 16.8767 20.4932 18.3014 21.9178C19.726 23.2329 21.589 24 23.7808 24C25.9726 24 27.726 23.3425 29.1507 21.9178C30.5753 20.4932 31.3425 18.6301 31.3425 16.2192C31.3425 13.8082 30.2466 11.8356 27.9452 10.411L32.6575 0Z"
                                                    fill="var(--mainColor)"></path>
                                            </svg>
                                        </div>
                                        <div class="content">Công ty đã mang lại cho tôi trải nghiệm tuyệt vời nhất
                                            trong quá trình cải tạo nhà cửa của mình.</div>
                                        <div class="info">
                                            <div class="avatar">
                                                <img width="80" height="80" class="img-fluid"
                                                    src="../assets/css/themes/testimonials_image_27e7a.jpg?1715757113942"
                                                    alt="Lofi Construction" />
                                            </div>
                                            <div class="details-info">
                                                <h5>Trang Lou</h5>
                                                <span>Admin</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>








                                <div class="swiper-slide">
                                    <div class="testimonials">
                                        <div class="icon">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns="http://www.w3.org/2000/svg" width="33" height="24"
                                                viewBox="0 0 33 24" fill="none">
                                                <path
                                                    d="M13.6986 1.75342L10.1918 9.53425L9.53425 10.9589L10.8493 11.8356C12.6027 12.9315 13.3699 14.2466 13.3699 16.1096C13.3699 18.0822 12.8219 19.5068 11.726 20.6027C10.6301 21.6986 9.31507 22.137 7.56164 22.137C5.80822 22.137 4.49315 21.589 3.39726 20.6027C2.30137 19.6164 1.75342 18.3014 1.75342 16.6575C1.75342 14.7945 2.30137 13.0411 3.61644 11.2877L10.0822 1.86301H13.6986V1.75342ZM16.4384 0H9.20548L2.19178 10.1918C0.767123 12.274 0 14.3562 0 16.5479C0 18.7397 0.767123 20.4932 2.19178 21.9178C3.61644 23.2329 5.47945 24 7.67123 24C9.86301 24 11.6164 23.3425 13.0411 21.9178C14.4658 20.4932 15.2329 18.6301 15.2329 16.2192C15.2329 13.8082 14.137 11.8356 11.8356 10.411L16.4384 0Z"
                                                    fill="var(--mainColor)"></path>
                                                <path
                                                    d="M29.8082 1.75342L26.3014 9.53425L25.6438 10.9589L26.9589 11.8356C28.7123 12.9315 29.4795 14.2466 29.4795 16.1096C29.4795 18.0822 28.9315 19.5068 27.8356 20.6027C26.7397 21.6986 25.4247 22.137 23.6712 22.137C21.9178 22.137 20.6027 21.589 19.5068 20.6027C18.411 19.6164 17.863 18.3014 17.863 16.6575C17.863 14.7945 18.411 13.0411 19.726 11.2877L26.3014 1.75342H29.8082ZM32.6575 0H25.3151L18.3014 10.1918C16.8767 12.274 16.1096 14.3562 16.1096 16.5479C16.1096 18.7397 16.8767 20.4932 18.3014 21.9178C19.726 23.2329 21.589 24 23.7808 24C25.9726 24 27.726 23.3425 29.1507 21.9178C30.5753 20.4932 31.3425 18.6301 31.3425 16.2192C31.3425 13.8082 30.2466 11.8356 27.9452 10.411L32.6575 0Z"
                                                    fill="var(--mainColor)"></path>
                                            </svg>
                                        </div>
                                        <div class="content">Tôi đã làm việc với nhiều công ty thiết kế trước đây, nhưng
                                            đội ngũ Lofi thực sự nổi bật với sự chất lượng và hiệu quả.</div>
                                        <div class="info">
                                            <div class="avatar">
                                                <img width="80" height="80" class="img-fluid"
                                                    src="../assets/css/themes/testimonials_image_37e7a.jpg?1715757113942"
                                                    alt="Lofi Construction" />
                                            </div>
                                            <div class="details-info">
                                                <h5>Hanna Jena</h5>
                                                <span>Nhân viên văn phòng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="swiper-pagination"></div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
import Swiper from "swiper/bundle";

import 'swiper/swiper-bundle.css';
import $ from "jquery";
// import counterUp from "counterup2";
import "counterup/jquery.counterup.min.js";
export default {
    name: 'About',
    mounted() {
        var swiper = new Swiper('.home-slider', {
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
        new Swiper('.swiper-about-service', {
            slidesPerView: 3,
            loop: false,
            grabCursor: true,
            spaceBetween: 30,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'row',
            roundLengths: true,
            slideToClickedSlide: false,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-about-service .swiper-button-next',
                prevEl: '.swiper-about-service .swiper-button-prev',
            },
            pagination: {
                el: '.swiper-about-service .swiper-pagination',
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
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        new Swiper('.testimonials-swiper', {
            slidesPerView: 3,
            loop: false,
            grabCursor: true,
            spaceBetween: 30,
            roundLengths: true,
            slideToClickedSlide: false,
            autoplay: false,
            pagination: {
                el: '.testimonials-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonials-swiper .swiper-button-next',
                prevEl: '.testimonials-swiper .swiper-button-prev',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
        $(document).ready(function () {
            $(".block_video_play").lightGallery();
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
    }
}


</script>

<style scoped>
.cus-swiper {
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: stretch;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        background: #fff;

        /* text-align: center; */
        p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 25px;
            -webkit-line-clamp: 3;
            height: 75px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
    }
}
</style>