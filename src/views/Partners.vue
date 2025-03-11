<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Đối Tác
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

                    <li><strong><span>Đối Tác</span></strong></li>

                </ul>
            </div>
        </section>

        <section class="section_service">
            <div class="container-fluid">
                <div class="block-title">
                    <span class="top-title">Dịch vụ của chúng tôi</span>
                    <h2 style="color: #006ac0;"><a href="dich-vu.html" title="Cung cấp dịch vụ chất lượng">Cung cấp dịch vụ chất lượng</a>
                    </h2>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 service-pad">
                        <div class="service-item p-4">
                            <div class="image">
                                <div class="image_thumb">
                                    <router-link to="/partners/galaxy-access">
                                        <img class="img-fluid" width="800" height="563"
                                            src="../assets/css/themes/LOGO16-scaled (1).webp" alt="Lofi Construction">
                                    </router-link>
                                </div>
                            </div>
                            <div class="main">
                                <div class="main-body">
                                    <!-- <div class="icon">
                                        <span><img class="img-fluid"
                                                src="../assets/css/themes/service_icon_17e7a.png?1715757113942"
                                                alt="Lofi Construction" width="65" height="65"></span>
                                    </div> -->
                                    <h3>
                                        <router-link to="/partners/galaxy-access">
                                            Galaxy Access
                                        </router-link>
                                    </h3>
                                    <p>Galaxy Access là một công ty hàng đầu tại Mỹ chuyên cung cấp các dịch vụ xử lý
                                        giao dịch qua máy cà thẻ và hệ thống máy POS (Point of Sale). Với sứ mệnh mang
                                        lại giải pháp thanh toán tiện lợi, nhanh chóng và an toàn cho các doanh nghiệp,
                                        Galaxy Access đã và đang phục vụ các khách hàng trong nhiều lĩnh vực khác nhau,
                                        từ các cửa hàng bán lẻ, nhà hàng, cho đến các doanh nghiệp vừa và nhỏ.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 service-pad">
                        <div class="service-item p-4">
                            <div class="image">
                                <div class="image_thumb">
                                    <router-link to="/partners/galaxy-visa-express">
                                        <img class="img-fluid" width="800" height="563"
                                            src="../assets/css/themes/LogoPNG-1.png" alt="Lofi Construction">
                                    </router-link>
                                </div>
                            </div>
                            <div class="main">
                                <div class="main-body">
                                    <!-- <div class="icon">
                                        <span><img class="img-fluid"
                                                src="../assets/css/themes/service_icon_27e7a.png?1715757113942"
                                                alt="Lofi Construction" width="65" height="65"></span>
                                    </div> -->
                                    <h3>
                                        <router-link to="/partners/galaxy-visa-express">
                                            Galaxy Visa Express
                                        </router-link>
                                    </h3>
                                    <p>Galaxy Visa Express là công ty hàng đầu tại Mỹ, chuyên cung cấp dịch vụ tư vấn và
                                        hỗ trợ làm visa cho khách hàng có nhu cầu định cư tại Mỹ, đặc biệt là chương
                                        trình thẻ xanh diện lao động EB-3. Với đội ngũ chuyên gia giàu kinh nghiệm,
                                        Galaxy Visa Express giúp khách hàng thực hiện ước mơ định cư tại Mỹ một cách dễ
                                        dàng và thuận tiện hơn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-lg-6 col-md-6 col-12 mx-auto service-pad">
                        <div class="service-item">
                            <div class="image">
                                <div class="image_thumb">
                                    <img class="img-fluid" width="800" height="563"
                                        src="../assets/css/themes/service_image_37e7a.jpg?1715757113942"
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
                                    <h3><a href="cai-tao-nha-cua.html" title="Cải tạo nhà cửa">Chiến lược
                                            Marketing tối ưu</a></h3>
                                    <p>Chúng tôi thực hiện các chiến dịch marketing tối ưu giúp doanh nghiệp
                                        tiếp cận đúng đối tượng khách hàng và tăng trưởng bền vững, đồng thời
                                        tối đa hóa hiệu quả chi phí.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> -->
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
    </div>


</template>

<script>
export default {
    name: "Partners"
}
</script>

<style scoped>
.service-item {
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

.section_service .service-item .main .main-body {
    padding-left: 20px;
}
</style>