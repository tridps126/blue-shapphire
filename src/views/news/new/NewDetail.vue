<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            >
            <div class="container">
                <div class="title-breadcrumb">
                    Tin Tức
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

                    <li class="home">
                        <a href="index.html"><span>Tin Tức</span></a>
                        <span class="mr_lr">&nbsp;<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10">
                                <path fill="currentColor"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    class=""></path>
                            </svg>&nbsp;</span>
                    </li>

                    <li v-if="post"><strong><span v-html="post.title.rendered"></span></strong></li>
                    <li v-else><strong><span>đang tải...</span></strong></li>
                </ul>
            </div>
        </section>

        <section class="page">
            <div class="container">
                <div class="pg_page">
                    <div class="row">
                        <div class="right-content col-lg-8 col-12" v-if="post">
                            <div class="page-title category-title">
                                <h1 class="title-head" style="color: #006ac0;" v-html="post.title.rendered"></h1>
                            </div>
                            <div class="content-page rte" v-html="post.content.rendered"></div>
                        </div>
                        <div v-else class="right-content col-lg-8 col-12">
                            <p>Đang tải...</p>
                        </div>
                        <div class="page_services col-lg-4 col-12">
                            <div class="aside-content-menu">
                                <div class="title">
                                    Các tin tức khác
                                </div>
                                <nav class="nav-category">
                                    <ul class="navbar-pills">
                                        <li v-for="otherNew in otherNews" class="nav-item relative"
                                            :class="{ active: $route.params.id == otherNew.id }">
                                            <router-link :to="`/new/${otherNew.id}`" class="nav-link">{{
                                                otherNew.title.rendered }}</router-link>
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
                                    <img class="img-fluid" src="../../../assets/css/themes/working_icon_17e7a.png"
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
                                        src="../../../assets/css/themes/working_icon_27e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/working_icon_37e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/working_icon_47e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/why_choose_icon_17e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/why_choose_icon_27e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
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
                                        src="../../../assets/css/themes/why_choose_icon_37e7a.png?1715757113942"
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
                                src="../../../assets/css/themes/whychoose-image7e7a.jpg?1715757113942"
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
    name: 'NewDetail',
    data() {
        return {
            searchTerm: '',
            post: null,
            otherNews: [],
            otherNewsId: 4,
        };
    },
    methods: {
        fetchOtherNews() {
            fetch(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?categories=4`)
                .then(response => response.json())
                .then(data => {
                    this.otherNews = data;
                })
                .catch(error => console.error('Lỗi:', error));
        },
        fetchPost(postId) {
            
            fetch(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts/${postId}`)
                .then(response => response.json())
                .then(data => {
                    this.post = data;
                })
                .catch(error => console.error('Lỗi:', error));
        }
    },
    mounted() {
        const postId = this.$route.params.id;
        this.fetchOtherNews();
        this.fetchPost(postId);
        console.log(postId);
    },
    watch: {
    "$route.params.id"(newId) {
      this.fetchPost(newId); // Gọi lại API khi ID thay đổi
    }
  }
}
</script>
