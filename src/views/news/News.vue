<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Tin Tức
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
                    <li><strong><span>Tin Tức</span></strong></li>
                </ul>
            </div>
        </section>
        <div class="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
            <meta itemprop="name" content="Dự án">
            <meta itemprop="description" content="">
            <div class="container">

                <h1 class="title-page d-none">Dự án</h1>
                <div class="row">
                    <div class="blog_left_base col-lg-3 col-12">
                        <div class="position-sticky">
                            <div class="aside-content-menu aside-content-blog">
                                <div class="title">
                                    Tin tức tiêu biểu
                                </div>
                                <nav class="nav-category">
                                    <ul v-if="cateNews.length > 0" class="navbar-pills">
                                        <li class="nav-item  relative">
                                            <a title="Trang chủ" class="nav-link" style="cursor: pointer;"
                                                @click="fetchPosts()">Tất cả</a>
                                        </li>
                                        <li v-for="cateNew in cateNews" :key="cateNew.id" class="nav-item  relative">
                                            <a title="Trang chủ" class="nav-link" style="cursor: pointer;"
                                                @click="fetchPosts(cateNew.id)">{{
                                                    cateNew.name }}</a>
                                        </li>
                                    </ul>
                                    <ul v-else class="navbar-pills">
                                        <li class="nav-item  relative">
                                            Đang tải ...
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
                                    <a href="tin-tuc.html" title="Dự án nổi bật">Tin Tức nổi bật</a>
                                </h2>
                                <div class="blog_content">

                                    <div v-if="arrFeaturedNews.length > 0" v-for="feaNew in arrFeaturedNews"
                                        class="item clearfix">
                                        <div class="post-thumb">
                                            <router-link :to="`/new/${feaNew.id}`">
                                                <img class="img-fluid lazyload"
                                                    :src="feaNew._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/vinhomes4-3875d154d1e3409b82a1f1974e5a288f-master.jpg?v=1712581890203"
                                                    alt="Vinhome Grand Park">
                                            </router-link>
                                        </div>
                                        <div class="contentright">
                                            <h3>
                                                <router-link :to="`/new/${feaNew.id}`"
                                                    v-html="feaNew.title.rendered"></router-link>
                                            </h3>

                                        </div>
                                    </div>
                                    <div v-if="arrFeaturedNews.length === 0">
                                        Đang tải ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right-content col-lg-9 col-12">

                        <div class="list-blogs">

                            <div class="row row-fix">
                                <div v-if="!isLoading && posts.length > 0" v-for="post in posts" :key="post.id"
                                    class="col-12 col-md-6 col-lg-4 col-fix">
                                    <div class="item-blog">
                                        <div class="block-thumb">
                                            <router-link :to="`/new/${post.id}`">
                                                <img class="lazyload"
                                                    :src="post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url"
                                                    data-src="https://bizweb.dktcdn.net/100/503/218/articles/vinhomes4-3875d154d1e3409b82a1f1974e5a288f-master.jpg?v=1712581890203"
                                                    alt="Vinhome Grand Park">
                                            </router-link>

                                        </div>
                                        <div class="block-content">
                                            <div class="time-post">
                                                <div class="author-post">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                                        data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14">
                                                        <path fill="var(--mainColor)"
                                                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                                            class=""></path>
                                                    </svg>
                                                    <span>Team Blue Shapphire</span>
                                                </div>
                                                <div class="date-post f">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal"
                                                        data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16">
                                                        <path fill="var(--mainColor)"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                                            class=""></path>
                                                    </svg>
                                                    {{ formatDate(post.date) }}
                                                </div>
                                            </div>
                                            <h3>
                                                <router-link :to="`/new/${post.id}`"
                                                    v-html="post.title.rendered"></router-link>
                                            </h3>

                                            <div class="article-content" v-html="post.excerpt.rendered"></div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="isLoading" style="text-align: center;">⏳ Đang tải dữ liệu...</div>
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
export default {
    name: 'News',
    data() {
        return {
            searchTerm: '',
            posts: [],
            cateNews: [],
            cate: null,
            isLoading: false,
            featuredNews: 6,
            arrFeaturedNews: []
            // consumer_key: consumer_key,
            // consumer_secret: consumer_secret
        };
    },
    methods: {
        async fetchPosts(categoryId = 4) {
            this.isLoading = true;
            let url = "https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?_embed"
            if (categoryId) {
                url += `&categories=${categoryId}`;
            }
            try {
                const response = await axios.get(url);
                this.posts = response.data;
            } catch (error) {
                console.error("Lỗi khi lấy bài viết:", error);
            } finally {
                this.isLoading = false; // Kết thúc loading
            }
        },
        async fetchCateNews() {
            try {
                const response = await axios.get(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/categories?parent=4`);
                this.cateNews = response.data;
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        },
        async fetchFeaturedNews() {
            try {
                const response = await axios.get(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?_embed&categories=${this.featuredNews}`);
                this.arrFeaturedNews = response.data;
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        },
        formatDate(dateString) {
            return dateString.split('T')[0]; // Lấy phần YYYY-MM-DD
        }

    },
    mounted() {
        this.fetchPosts();
        this.fetchCateNews()
        this.fetchFeaturedNews()
    },
}
</script>

<style scoped>
.contentright {
    h3 {
        a {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 25px;
            -webkit-line-clamp: 1;
            /* height: 75px; */
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
    }
}
</style>