<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/banner-page.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Tìm kiếm
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
                    <li><strong><span>Tìm Kiếm</span></strong></li>
                </ul>
            </div>
        </section>
        <div class="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
            <meta itemprop="name" content="Dự án">
            <meta itemprop="description" content="">
            <div class="container">

                <div class="block-title mx-auto mb-4">
                    <span class="top-title"></span>
                    <h2><a href="dich-vu.html" title="Cung cấp dịch vụ chất lượng">Tìm kiếm</a>
                    </h2>
                </div>
                <div class="row">
                    <div class="right-content col-lg-12 col-12">

                        <div class="list-blogs">

                            <div class="row row-fix">
                                <div v-if="searchs.length > 0" v-for="search in searchs" :key="search.id"
                                    class="col-12 col-md-6 col-lg-3 col-fix">
                                    <div class="item-blog">
                                        <div class="block-thumb">
                                            <router-link :to="`/search/${search.id}`">
                                                <img class="lazyload"
                                                    src="../../assets/css/themes/lazy7e7a.jpg?1715757113942"
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
                                                        <path fill="#595959"
                                                            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                                            class=""></path>
                                                    </svg>
                                                    <span>Team Blue Sapphire</span>
                                                </div>
                                                <div class="date-post f">

                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal"
                                                        data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16">
                                                        <path fill="#595959"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                                            class=""></path>
                                                    </svg>
                                                    {{ formatDate(search.date) }}
                                                </div>
                                            </div>
                                            <h3>
                                                <router-link :to="`/search/${search.id}`"
                                                    v-html="search.title.rendered"></router-link>
                                            </h3>

                                            <div class="article-content" v-html="search.excerpt.rendered"></div>

                                        </div>
                                    </div>
                                </div>
                                <div v-if="searchs.length == 0">
                                    đang tải ...
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
export default {
    name: 'Search',
    data() {
        return {
            isLoading: false,
            searchs: [],
            keySearch: this.$route.query.keyword || ''
        };
    },
    methods: {
        async fetchSearch() {
            this.isLoading = true;
            let url = "https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?_embed"
            if (this.keySearch !== "") {
                url += `&search=${this.keySearch}`;
            }
            try {
                const response = await axios.get(url);
                this.searchs = response.data;
                
            } catch (error) {
                console.error("Lỗi khi lấy bài viết:", error);
            } finally {
                this.isLoading = false; // Kết thúc loading
            }
        },
        // async fetchCateNews() {
        //     try {
        //         const response = await axios.get(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/categories?parent=4`);
        //         this.cateNews = response.data;
        //     } catch (error) {
        //         console.error("Lỗi khi tải sản phẩm:", error);
        //     }
        // },
        // async fetchFeaturedNews() {
        //     try {
        //         const response = await axios.get(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?categories=${this.featuredNews}`);
        //         this.arrFeaturedNews = response.data;
        //     } catch (error) {
        //         console.error("Lỗi khi tải sản phẩm:", error);
        //     }
        // },
        formatDate(dateString) {
            return dateString.split('T')[0]; // Lấy phần YYYY-MM-DD
        },
    },
    mounted() {
        this.fetchSearch();
    },
    watch: {
        '$route.query.keyword'(newKeyword) {
            this.keySearch = newKeyword || '';
            this.fetchSearch();
        }
    },
}
</script>

<style scoped>
.ulxd a {
    color: #fff;
}

.ulxd a:hover {
    color: #006ac0;
}
</style>