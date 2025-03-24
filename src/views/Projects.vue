<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/banner-page.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Dự án
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
                    <li><strong><span>Dự án</span></strong></li>
                </ul>
            </div>
        </section>
        <div class="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
            <meta itemprop="name" content="Dự án">
            <meta itemprop="description" content="">
            <div class="container">

                <h1 class="title-page d-none">Dự án</h1>
                <div class="row">
                    <div class="right-content col-lg-9 col-12">

                        <div class="list-blogs">

                            <div class="row row-fix">

                                <div v-if="posts.length > 0" v-for="post in posts" :key="post.id"
                                    class="col-12 col-md-6 col-lg-4 col-fix">
                                    <div class="item-blog">
                                        <div class="block-thumb">

                                            <a class="thumb" href="/" title="Vinhome Grand Park">
                                                <img class="lazyload" :src="post.url" alt="Vinhome Grand Park">
                                            </a>

                                        </div>
                                        <div class="block-content">
                                            <div class="time-post">
                                                <div class="author-post">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14">
                                                        <path fill="#595959"
                                                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                                            class=""></path>
                                                    </svg>
                                                    <span>Admin</span>
                                                </div>
                                                <div class="date-post f">

                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal"
                                                        data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16">
                                                        <path fill="#595959"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                                            class=""></path>
                                                    </svg>
                                                    08/04/2024
                                                </div>
                                            </div>
                                            <h3><a href="vinhome-grand-park.html" title="Vinhome Grand Park">{{
                                                    post.title.rendered }}</a></h3>

                                            <div class="article-content">Dự án&nbsp;Vinhomes Grand Park&nbsp;Quận 9 của
                                                chủ đầu tư VinGroup đã mở bán ra thị trường vào quý II.2019 với quy
                                                mô...
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div v-if="posts.length === 0">
                                    <p style="text-align: center;">loading...</p>
                                </div>
                            </div>
                            <div class="text-center">

                            </div>

                        </div>

                    </div>
                    <div class="blog_left_base col-lg-3 col-12">
                        <div class="position-sticky">
                            <div class="aside-content-menu aside-content-blog">
                                <div class="title">
                                    Dự án tiêu biểu
                                </div>
                                <nav class="nav-category">
                                    <ul class="navbar-pills">
                                        <li class="nav-item  relative">
                                            <router-link title="Trang chủ" class="nav-link" to="/">Trang
                                                chủ</router-link>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/about" title="Giới thiệu" class="nav-link">Giới
                                                thiệu</router-link>
                                        </li>
                                        <li class="nav-item active relative">
                                            <router-link to="/projects" class="nav-link pr-5">Dự án</router-link>
                                            <i class="open_mnu down_icon"></i>
                                            <ul class="menu_down" style="display:none;">
                                                <li class="nav-item">
                                                    <a title="Dự án biệt thự" class="nav-link"
                                                        href="du-an-biet-thu.html">Dự
                                                        án biệt thự</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Dự án nhà phố" class="nav-link"
                                                        href="du-an-nha-pho.html">Dự
                                                        án nhà phố</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Dự án văn phòng" class="nav-link"
                                                        href="du-an-van-phong.html">Dự án văn phòng</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Dự án quán cafe, nhà hàng" class="nav-link"
                                                        href="du-an-quan-cafe-nha-hang.html">Dự án quán cafe, nhà
                                                        hàng</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/services" class="nav-link pr-5">Dịch vụ</router-link>
                                            <i class="open_mnu down_icon"></i>
                                            <ul class="menu_down" style="display:none;">
                                                <li class="nav-item">
                                                    <a title="Thiết kế nội thất" class="nav-link"
                                                        href="thiet-ke-noi-that.html">Thiết kế nội thất</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Tư vấn dự án" class="nav-link" href="tu-van-du-an.html">Tư
                                                        vấn dự án</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Cải tạo nhà cửa" class="nav-link"
                                                        href="cai-tao-nha-cua.html">Cải tạo nhà cửa</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a title="Sơn sửa công trình" class="nav-link"
                                                        href="son-sua-cong-trinh.html">Sơn sửa công trình</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/products" class="nav-link">Sản phẩm</router-link>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/team" class="nav-link">Đội ngũ</router-link>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/news" class="nav-link">Tin tức</router-link>
                                        </li>
                                        <li class="nav-item  relative">
                                            <router-link to="/contact" class="nav-link">Liên hệ</router-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- <script>
								$(".open_mnu").click(function () {
									$(this).toggleClass('active').next().slideToggle();
								});
							</script> -->
                            <div class="blog_noibat">



                                <h2 class="h2_sidebar_blog">
                                    <a href="tin-tuc.html" title="Dự án nổi bật">Dự án nổi bật</a>
                                </h2>
                                <div class="blog_content">

                                    <div class="item clearfix">
                                        <div class="post-thumb">
                                            <a class="image-blog scale_hover" href="vinhome-grand-park.html"
                                                title="Vinhome Grand Park">

                                                <img class="img-fluid lazyload"
                                                    src="../assets/css/themes/lazy7e7a.jpg?1715757113942"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/vinhomes4-3875d154d1e3409b82a1f1974e5a288f-master.jpg?v=1712581890203"
                                                    alt="Vinhome Grand Park">

                                            </a>
                                        </div>
                                        <div class="contentright">
                                            <h3><a title="Vinhome Grand Park" href="vinhome-grand-park.html">Vinhome
                                                    Grand Park</a></h3>

                                        </div>
                                    </div>

                                    <div class="item clearfix">
                                        <div class="post-thumb">
                                            <a class="image-blog scale_hover"
                                                href="sun-grand-city-hillside-residence.html"
                                                title="Sun Grand City Hillside Residence">

                                                <img class="img-fluid lazyload"
                                                    src="../assets/css/themes/lazy7e7a.jpg?1715757113942"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/nam-sg-4-10d929efac37408086ae10bac664d3ca-master.jpg?v=1712581912227"
                                                    alt="Sun Grand City Hillside Residence">

                                            </a>
                                        </div>
                                        <div class="contentright">
                                            <h3><a title="Sun Grand City Hillside Residence"
                                                    href="sun-grand-city-hillside-residence.html">Sun Grand City
                                                    Hillside Residence</a></h3>

                                        </div>
                                    </div>

                                    <div class="item clearfix">
                                        <div class="post-thumb">
                                            <a class="image-blog scale_hover" href="thao-dien-green.html"
                                                title="Thảo Điền Green">

                                                <img class="img-fluid lazyload"
                                                    src="../assets/css/themes/lazy7e7a.jpg?1715757113942"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/lucasta-5-1d44651771c34b02869f20722b068d24-master.jpg?v=1712581922387"
                                                    alt="Thảo Điền Green">

                                            </a>
                                        </div>
                                        <div class="contentright">
                                            <h3><a title="Thảo Điền Green" href="thao-dien-green.html">Thảo Điền
                                                    Green</a></h3>

                                        </div>
                                    </div>

                                    <div class="item clearfix">
                                        <div class="post-thumb">
                                            <a class="image-blog scale_hover" href="khu-can-ho-sunflower.html"
                                                title="Khu căn hộ Sunflower">

                                                <img class="img-fluid lazyload"
                                                    src="../assets/css/themes/lazy7e7a.jpg?1715757113942"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/blooming-park1.jpg?v=1712581435090"
                                                    alt="Khu căn hộ Sunflower">

                                            </a>
                                        </div>
                                        <div class="contentright">
                                            <h3><a title="Khu căn hộ Sunflower" href="khu-can-ho-sunflower.html">Khu căn
                                                    hộ Sunflower</a></h3>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Projects',
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async fetchPosts() {
            try {
                const response = await axios.get(`https://shop.trialweb.us/wp-json/wp/v2/posts?per_page=6`);
                let posts = response.data;
                let fetchImages = posts.map(async (post) => {
                    let mediaUrl = post._links?.["wp:featuredmedia"]?.[0]?.href;
                    try {
                        let mediaResponse = await axios.get(mediaUrl);
                        post.url = mediaResponse.data.source_url;
                    } catch (error) {
                        console.error("Lỗi khi tải bài viết:", error);
                    }
                    // return post;
                });
                await Promise.all(fetchImages);
                this.posts = posts;
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        },
    },
    beforeMount() {
        this.fetchPosts();
    },
}
</script>