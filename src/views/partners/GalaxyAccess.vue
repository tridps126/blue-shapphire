<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            >
            <div class="container">
                <div class="title-breadcrumb">
                    Contact Center
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

                    <li><strong><span>Contact Center</span></strong></li>

                </ul>
            </div>
        </section>

        <section class="page">
            <div class="container">
                <div class="pg_page">
                    <div class="row">
                        <div class="right-content col-lg-8 col-12">
                            <div class="page-title category-title">
                                <h1 class="title-head">Galaxy Access</h1>
                            </div>
                            <div class="content-page rte">
                                <h4><strong>Các Dịch Vụ Hợp Tác Cụ Thể</strong></h4>

                                <p><strong>Dịch Vụ Chăm Sóc Khách Hàng & Telesales:</strong></p>
                                <p>Blue Sapphire đã hỗ trợ
                                    Galaxy Access trong việc xây dựng và triển khai dịch vụ chăm sóc
                                    khách hàng và telesales, giúp tạo dựng mối quan hệ bền vững với khách hàng. Đội
                                    ngũ
                                    telesales chuyên nghiệp của Blue Sapphire đảm bảo rằng mọi yêu cầu của khách
                                    hàng đều
                                    được giải quyết nhanh chóng và hiệu quả, đồng thời tối ưu hóa quá trình bán hàng
                                    và nâng
                                    cao tỷ lệ chuyển đổi.</p>


                                <p><strong>Thiết Kế Website Chuyên Nghiệp & Thiết Kế Hình Ảnh Cho Hệ Thống POS, Máy Cà
                                        Thẻ:</strong></p>
                                <p>Blue Sapphire đã thiết kế một <strong>website chuyên nghiệp</strong> cho Galaxy
                                    Access, giúp khách
                                    hàng
                                    dễ dàng tìm hiểu và đăng ký các dịch vụ thanh toán thẻ và POS. Đồng thời, chúng tôi
                                    cũng
                                    cung cấp các giải pháp <strong>thiết kế hình ảnh</strong> cho hệ thống máy
                                    POS và máy cà thẻ, đảm bảo
                                    tính thẩm mỹ, dễ sử dụng và phù hợp với nhận diện thương hiệu của Galaxy Access.
                                </p>


                                <P><strong>Quản Lý Mạng Xã Hội Facebook Page: </strong></P>
                                <p>
                                    Blue Sapphire hỗ trợ Galaxy Access trong việc <strong>quản lý mạng xã hội</strong>,
                                    đặc biệt là
                                    <strong>Facebook Page</strong>. Chúng tôi giúp Galaxy Access xây dựng chiến lược nội
                                    dung, tương tác với khách
                                    hàng và quảng bá các dịch vụ thanh toán qua các kênh mạng xã hội, từ đó nâng cao sự
                                    hiện
                                    diện trực tuyến và tăng cường mối quan hệ với khách hàng.
                                </p>




                                <p>Thông qua sự hợp tác với Blue Sapphire, Galaxy Access không chỉ tối ưu hóa hoạt động
                                    kinh doanh mà còn nâng cao trải nghiệm khách hàng, tạo dựng hình ảnh chuyên nghiệp
                                    và
                                    tăng trưởng mạnh mẽ trong thị trường thanh toán. Chúng tôi cam kết cung cấp các giải
                                    pháp sáng tạo và hiệu quả giúp Galaxy Access giữ vững vị thế trên thị trường và tiếp
                                    tục
                                    phát triển trong lĩnh vực thanh toán qua máy POS và dịch vụ máy cà thẻ.
                                </p>

                                <p><strong>Thông tin doanh nghiệp</strong></p>
                                <p>Website: <a href="https://galaxyaccess.us/" target="_blank">https://galaxyaccess.us/</a></p>

                                <p>Điện thoại: (770) 284-8888</p>

                                <p>Email: Info@galaxyaccess.us</p>

                                <p>Địa chỉ: 2222 S Dobson Rd #401, Mesa, AZ 85202</p>
                            </div>
                        </div>
                        <div class="page_services col-lg-4 col-12">
                            <div class="aside-content-menu">
                                <div class="title">
                                    Các Đối tác
                                </div>
                                <nav class="nav-category">
                                    <ul class="navbar-pills">
                                        <ul class="navbar-pills">
                                            <li class="nav-item relative"
                                                :class="{ active: $route.path === '/partners/galaxy-access' }">
                                                <router-link to="/partners/galaxy-access" class="nav-link">Galaxy
                                                    Access</router-link>
                                            </li>
                                            <li class="nav-item  relative"
                                                :class="{ active: $route.path === '/partners/galaxy-visa-express' }">
                                                <router-link to="/partners/galaxy-visa-express" class="nav-link">Galaxy
                                                    Visa Express</router-link>
                                            </li>
                                        </ul>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

</template>


<script>
export default {
    name: 'GalaxyAccess'
}
</script>


<style scoped>
.page .content-page {
    p {
        line-height: 1.7em;
    }
}
</style>