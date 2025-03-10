<template>
    <div id="header">
        <div class="top-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-none d-lg-block">
                        <ul class="top-bar-left">
                            <li>
                                <a href="tel:19006750" title="tel:19006750" style="color:#231f20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z">
                                        </path>
                                    </svg>
                                    <span style="margin-left: 10px;">1900 6750</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@sapo.vn" title="support@sapo.vn" style="color:#231f20">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">
                                        </path>
                                    </svg>
                                    <span style="margin-left: 10px;">support@sapo.vn</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <ul class="ul-control">
                            <!-- <li class="top-lang d-md-block d-none" id="box-lang-desktop">
                                <a href="javascript:;" class="ae-icon">
                                    <img class="ae-flag"
                                        src="../assets/css/themes/vn7e7a.png?1715757113942"
                                        alt="multilangauge">
                                    <span>Tiếng Việt</span>
                                    <img alt="ap multilangauge" class="ae-caret"
                                        src="../assets/css/themes/caret7e7a.png?1715757113942">
                                </a>
                                <ul class="drop-account">
                                    <li data-lang="vi" title="Tiếng Việt" class="ae-item-lang ae-active"><a
                                            href="#"><img class="ae-icon-left"
                                                src="../assets/css/themes/vn7e7a.png?1715757113942"
                                                alt="ap multilangauge"><span>Tiếng Việt</span></a></li>
                                    <li data-lang="us" title="English" class="ae-item-lang"><a href="#"><img
                                                class="ae-icon-left"
                                                src="../assets/css/themes/en7e7a.png?1715757113942"
                                                alt="ap multilangauge"><span>English</span></a></li>
                                </ul>
                            </li> -->
                            <li class="top-social">
                                <div class="top-social-box">

                                    <a href="https://www.facebook.com/" class="social-button" title="Facebook"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                                        </svg>
                                    </a>


                                    <a href="https://twitter.com/?lang=vi" class="social-button" title="Twitter"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>


                                    <a href="https://www.instagram.com/" class="social-button" title="Instagram"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>


                                    <a href="https://www.youtube.com/" class="social-button" title="Youtube"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                                        </svg>
                                    </a>

                                </div>
                            </li>
                            <li class="header-search d-md-none d-block">
                                <div class="button-search" >
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                                    </svg>
                                </div>
                            </li>
                            <!-- <li class="account d-md-inline-block d-none">
                                <a href="account/logina3b1.html" title="Tài khoản của bạn" rel="nofollow">
                                    <img src="../assets/css/themes/account7e7a.png?1715757113942"
                                        alt="Lofi Construction" width="25" height="25" class="icon">
                                    <span class="info">Tài khoản</span>
                                </a>
                                <div class="drop-account">


                                    <a href="account/login.html">Đăng nhập</a>
                                    <a href="account/register.html">Đăng ký</a>


                                </div>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-2 col-6">
                        <router-link to="/" class="logo" title="Logo">
                            <img src="../assets/css/themes/logo7e7a.png?1715757113942" alt="Lofi Construction"
                                class="img-fluid" width="187" height="47">
                        </router-link>
                    </div>
                    <div class="col-xl-8 col-lg-7 col-12 header-menu">
                        <div class="header-menu-des">
                            <nav class="header-nav">
                                <div class="user-menu d-lg-none">
                                    <div class="user-icon">
                                        <img src="../assets/css/themes/icon-user7e7a.png?1715757113942"
                                            alt="Lofi Construction">
                                    </div>
                                    <div class="user-account">

                                        <a class="btnx" href="account/login.html">Đăng nhập</a>
                                        <small><a href="account/register.html">Đăng ký</a></small>

                                    </div>
                                </div>
                                <ul class="item_big">


                                    <li class="nav-item" :class="{ active: $route.path === '/' }">
                                        <router-link to="/">Trang chủ</router-link>
                                    </li>

                                    <li class="nav-item" :class="{ active: $route.path === '/about' }">
                                        <router-link to="/about">Giới thiệu</router-link>
                                    </li>


                                    <li class="nav-item" :class="{ active: $route.path === '/projects' }">
                                        <router-link to="/projects">Dự án</router-link>
                                        <i class="fa fa-caret-down"></i>


                                        <ul class="item_small">
                                            <li>
                                                <a class="" href="du-an-biet-thu.html" title="Dự án biệt thự">
                                                    Dự án biệt thự
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="du-an-nha-pho.html" title="Dự án nhà phố">
                                                    Dự án nhà phố
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="du-an-van-phong.html" title="Dự án văn phòng">
                                                    Dự án văn phòng
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="du-an-quan-cafe-nha-hang.html"
                                                    title="Dự án quán cafe, nhà hàng">
                                                    Dự án quán cafe, nhà hàng
                                                </a>
                                            </li>
                                        </ul>

                                    </li>


                                    <li class="nav-item  " :class="{ active: $route.path === '/services' }">
                                        <router-link to="/services">Dịch vụ</router-link>

                                        <i class="fa fa-caret-down"></i>


                                        <ul class="item_small">
                                            <li>
                                                <a class="" href="thiet-ke-noi-that.html" title="Thiết kế nội thất">
                                                    Thiết kế nội thất
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="tu-van-du-an.html" title="Tư vấn dự án">
                                                    Tư vấn dự án
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="cai-tao-nha-cua.html" title="Cải tạo nhà cửa">
                                                    Cải tạo nhà cửa
                                                </a>
                                            </li>
                                            <li>
                                                <a class="" href="son-sua-cong-trinh.html" title="Sơn sửa công trình">
                                                    Sơn sửa công trình
                                                </a>
                                            </li>
                                        </ul>

                                    </li>

                                    <li class="nav-item " :class="{ active: $route.path === '/products' }">
                                        <router-link to="/products">Sản phẩm</router-link>

                                    </li>

                                    <li class="nav-item ">
                                        <router-link to="/team">Đội ngũ</router-link>
                                    </li>

                                    <li class="nav-item ">
                                        <router-link to="/news">Tin tức</router-link>
                                    </li>

                                    <li class="nav-item ">
                                        <router-link to="/contact">Liên hệ</router-link>
                                    </li>
                                </ul>
                            </nav>
                            <div class="control-menu">
                                <a href="#" id="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="#000"
                                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                    </svg></a>
                                <a href="#" id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="#000"
                                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-6 header-control">
                        <div class="ul-control">
                            <div class="header-search d-none d-md-block">
                                <div class="button-search" @click="openSearch">
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                        clip-rule="evenodd">
                                        <path
                                            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                                    </svg>
                                </div>
                            </div>
                            <!-- <div class="header-cart block-cart">
                                <a href="cart.html" aria-label="Giỏ hàng" title="Giỏ hàng" class="cart-head">
                                    <img src="../assets/css/themes/shopping-cart7e7a.png?1715757113942"
                                        alt="Lofi Construction" class="img-fluid" width="20" height="20">
                                    <span class="info">Giỏ hàng</span>
                                    <span class="count_item_pr count-item">0</span>
                                </a>
                                <div class="top-cart-content">
                                    <div class="CartHeaderContainer">
                                    </div>
                                </div>
                            </div> -->
                            <div class="menu-bar d-lg-none d-block">
                                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                    stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z"
                                        fill-rule="nonzero" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-wrap-popup" :class="{ active: isSearchActive }">
            <div class="container">
                <div class="search-header">
                    <div class="search-smart">
                        <form action="https://lofi-company.mysapo.net/search" method="get"
                            class="search-form header-search-form" role="search">
                            <input type="text" name="query" required
                                class="input-group-field auto-search search-auto form-control"
                                placeholder="Nhập từ khóa..." autocomplete="off">
                            <input type="hidden" name="type" value="product" />
                            <button class="btn btn-default" type="submit" aria-label="Tìm kiếm">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                    clip-rule="evenodd">
                                    <path
                                        d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                                </svg>
                            </button>

                            <div class="search-suggest">
                                <div class="list-search list-search-style">
                                </div>
                                <div class="list-search2 list-search-style">
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    name: 'Header',
    props: {
        isSearchActive: Boolean,
        openSearch: Function
    }
}

</script>

<style>
.header-menu {
    display: flex;
    justify-content: center;
    /* Căn giữa theo chiều ngang */
    align-items: center;
    /* Căn giữa theo chiều dọc */
    list-style: none;
    padding: 0;
}
</style>