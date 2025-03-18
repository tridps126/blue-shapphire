<template>
    <div id="header">
        <div class="top-bar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-none d-lg-block">
                        <ul class="top-bar-left">
                            <li>
                                <a href="tel:19006750" title="tel:19006750" style="color:#231f20">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        height="24" width="24" viewBox="0 0 60 60">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <image width="60" height="60"
                                                    xlink:href="data:image/png;base64,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" />
                                            </g>
                                        </g>
                                    </svg>
                                    <span style="margin-left: 10px;">1900 6750</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:blueShapphire@gmail.com" title="blueShapphire@gmail.com"
                                    style="color:#231f20">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        height="24" width="24" viewBox="0 0 60 60">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_1-2" data-name="Layer 1">
                                                <image width="60" height="60"
                                                    xlink:href="data:image/png;base64,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" />
                                            </g>
                                        </g>
                                    </svg>
                                    <span style="margin-left: 10px;">blueShapphire@gmail.com</span>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <image width="60" height="60"
                                                        xlink:href="data:image/png;base64,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" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="https://twitter.com/?lang=vi" class="social-button" title="Linkin"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <image width="60" height="60"
                                                        xlink:href="data:image/png;base64,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" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="https://www.instagram.com/" class="social-button" title="Instagram"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <image width="60" height="60"
                                                        xlink:href="data:image/png;base64,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" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>


                                    <a href="https://www.youtube.com/" class="social-button" title="Youtube"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <image width="60" height="60"
                                                        xlink:href="data:image/png;base64,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" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>

                                    <a href="https://www.youtube.com/" class="social-button" title="google"
                                        target="_blank" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60">
                                            <g id="Layer_2" data-name="Layer 2">
                                                <g id="Layer_1-2" data-name="Layer 1">
                                                    <image width="60" height="60"
                                                        xlink:href="data:image/png;base64,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" />
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </li>
                            <li class="header-search d-md-none d-block">
                                <div class="button-search">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                        viewBox="0 0 48 48">
                                        <path
                                            d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z">
                                        </path>
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
                            <img src="../assets/css/themes/fd25f9d6-3896-4b19-8b34-e0e99be8bdb5.png"
                                alt="Lofi Construction" class="img-fluid" width="187" height="47">
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

                                    <li class="nav-item" :class="{ active: $route.path === '/partner' }">
                                        <router-link to="/partner">Đối Tác</router-link>
                                    </li>


                                    <!-- <li class="nav-item" :class="{ active: $route.path === '/projects' }">
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

                                    </li> -->


                                    <li class="nav-item  " :class="{ active: $route.path === '/services' }">
                                        <router-link to="/services">Dịch vụ</router-link>

                                        <i class="fa fa-caret-down"></i>


                                        <ul class="item_small">
                                            <li>
                                                <router-link to="/service/contact-center">Contact Center</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/service/website">Phát triển website</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/service/marketing">Chiến lược Marketing</router-link>
                                            </li>
                                        </ul>

                                    </li>

                                    <!-- <li class="nav-item " :class="{ active: $route.path === '/products' }">
                                        <router-link to="/products">Sản Phẩm</router-link>
                                    </li> -->

                                    <li class="nav-item " :class="{ active: $route.path === '/recruitment' }">
                                        <router-link to="/recruitment">Tuyển dụng</router-link>
                                    </li>

                                    <!-- <li class="nav-item ">
                                        <router-link to="/team">Đội ngũ</router-link>
                                    </li> -->

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
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                        viewBox="0 0 48 48">
                                        <path
                                            d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z">
                                        </path>
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
                                placeholder="Nhập từ khóa..." autocomplete="off" v-model="keySearch">
                            <input type="hidden" name="type" value="product" />
                            <router-link :to="{ path: '/search', query: { keyword: keySearch } }">
                                <button class="btn btn-default" type="submit" aria-label="Tìm kiếm">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                        viewBox="0 0 48 48">
                                        <path
                                            d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z">
                                        </path>
                                    </svg>
                                </button>
                            </router-link>

                            <div class="search-suggest">
                                <div class="list-search list-search-style">
                                    123
                                </div>
                                <div class="list-search2 list-search-style">
                                    123
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
    },
    data() {
        return {
            keySearch: ''
        }
    },
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

<style scoped>
.top-bar .top-bar-left svg {
    width: 24px !important;
    height: 24px !important;
}

.top-bar .top-bar-left {
    padding-left: 0px !important;
    /* margin-bottom: 0px !important; */
}

.top-bar ul {
    margin-bottom: 0px !important;
}
</style>