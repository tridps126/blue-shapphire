<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Sản Phẩm
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
                    <li><strong><span>Sản Phẩm</span></strong></li>
                </ul>
            </div>
        </section>
        <div class="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
            <meta itemprop="name" content="Dự án">
            <meta itemprop="description" content="">
            <div class="container">

                <h1 class="title-page d-none">Dự án</h1>
                <div class="row">
                    <div class="blog_left_base col-lg-3 col-12  ">
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
                                        <li class="nav-item relative">
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
                                        <li class="nav-item active relative">
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
                        </div>
                    </div>
                    <div class="right-content col-lg-9 col-12">
                        <div class="list-blogs">
                            <div class="row row-fix">
                                <div v-if="products.length > 0" v-for="product in products" :key="product.id"
                                    class="col-6 col-xl-4 col-lg-4 col-md-4">
                                    <div class="item_product_main">
                                        <form action="https://lofi-company.mysapo.net/cart/add" method="post"
                                            class="variants product-action " data-cart-form
                                            data-id="product-actions-35278172" enctype="multipart/form-data">
                                            <div class="product-thumbnail">
                                                <a class="image_thumb" href="giuong-ngu-go-tram.html"
                                                    title="Giường Ngủ Gỗ Tràm">
                                                    <img class="lazyload" width="480" height="480"
                                                        :src="product.images[0].src"
                                                        data-src="../assets//css//themes/pro-nau-noi-that-moho-giuong-ngu-go-dalumd-1m6-1-b6335d3cd4fd4c0f9c891772815100d5-master.webp"
                                                        alt="Giường Ngủ Gỗ Tr&#224;m" />
                                                </a>
                                                <a href="javascript:void(0)"
                                                    class="btn-compare js-btn-wishlist setWishlist btn-views"
                                                    data-wish="giuong-ngu-go-tram" tabindex="0"
                                                    title="Thêm vào yêu thích">
                                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                                        fill-rule="evenodd" clip-rule="evenodd">
                                                        <path
                                                            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                                                    </svg>
                                                </a>

                                                <!-- <div class="action">
                                                    <div class="actions-secondary">
                                                        <div class="actions-primary">
                                                            <input class="hidden" type="hidden" name="variantId"
                                                                value="116125521" />
                                                            <button class="btn-cart" title="Tùy chọn" type="button"
                                                                onclick="window.location.href='giuong-ngu-go-tram.html'">
                                                                <span class="icon icon-settings">
                                                                    <svg style="enable-background:new 0 0 50 50;"
                                                                        version="1.1" viewBox="0 0 50 50"
                                                                        xml:space="preserve"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                        <g id="Layer_1">
                                                                            <path
                                                                                d="M44,19.09V1h-2v18.09c-2.833,0.478-5,2.942-5,5.91s2.167,5.431,5,5.91V49h2V30.91c2.833-0.478,5-2.942,5-5.91   S46.833,19.569,44,19.09z M43,29c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S45.206,29,43,29z" />
                                                                            <path
                                                                                d="M6,1v7.09C3.167,8.569,1,11.033,1,14s2.167,5.431,5,5.91V49h2V19.91c2.833-0.478,5-2.942,5-5.91s-2.167-5.431-5-5.91V1H6z    M11,14c0,2.206-1.794,4-4,4s-4-1.794-4-4s1.794-4,4-4S11,11.794,11,14z" />
                                                                            <path
                                                                                d="M24,1v30.09c-2.833,0.478-5,2.942-5,5.91s2.167,5.431,5,5.91V49h2v-6.09c2.833-0.478,5-2.942,5-5.91s-2.167-5.431-5-5.91V1   H24z M29,37c0,2.206-1.794,4-4,4s-4-1.794-4-4s1.794-4,4-4S29,34.794,29,37z" />
                                                                        </g>
                                                                        <g />
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <a title="Xem nhanh" href="giuong-ngu-go-tram.html"
                                                            data-handle="giuong-ngu-go-tram"
                                                            class="quick-view btn-views">
                                                            <svg width="24" height="24"
                                                                xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                                clip-rule="evenodd">
                                                                <path
                                                                    d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div> -->
                                            </div>
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="giuong-ngu-go-tram.html"
                                                        title="Giường Ngủ Gỗ Tràm">{{ product.name }}</a></h3>
                                                <div class="price-box">
                                                    ${{ product.price }} </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div v-if="products.length === 0">
                                    <p style="text-align: center;">loading...</p>
                                </div>
                            </div>
                            <div class="text-center">

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
let consumer_key = "ck_4b3c3b71515a5bde5b088b24f7a0d6385b3883ca";
let consumer_secret = "cs_4c2853499c8045a0e0c16a46c86c18954c05e157";
export default {
    name: 'Products',
    data() {
        return {
            searchTerm: '',
            products: [],
            consumer_key: consumer_key,
            consumer_secret: consumer_secret
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get(`https://shop.trialweb.us//wp-json/wc/v3/products?consumer_key=${this.consumer_key}&consumer_secret=${this.consumer_secret}&per_page=6`);
                this.products = response.data;
                // console.log(this.products);
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
}
</script>