<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/images/banner-recrui.webp')})` }">
            <div class="container">
                <div class="title-breadcrumb">
                    Tuyển Dụng
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
                    <li><strong><span>Tuyển Dụng</span></strong></li>
                </ul>
            </div>
        </section>
        <section class="section_whychoose">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-12 mt-auto mb-auto">
                        <div class="block-title">
                            <span class="top-title">Tuyển Dụng</span>
                            <h2 style="color: #006ac0;text-align: left;">Quy trình tuyển dụng</h2>
                            <p>Chúng tôi luôn tìm kiếm “hiền tài”, những người không chỉ giỏi ở lĩnh vực họ làm mà còn
                                có những phẩm chất, giá trị phù hợp với công ty.</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div class="ent-container">
                            <div class="ent-flex bannerdtfx-flex">
                                <div class="right-bannerdtfx-flex ent-flex">
                                    <div class="item-bannerdtfx ent-flex" @click="clickActivethqt(1)"
                                        :class="{ activethqt: activethqt === 1 }">
                                        <div class="item-bannerdtfx-ll ent-flex">
                                            <img class="obd" src="../../assets/images//icon/icon-1.png">
                                            <!-- <div class="obd"></div> -->
                                            <div class="ocd"></div>
                                        </div>
                                        <div class="item-bannerdtfx-rl">
                                            <h4><strong>Nộp đơn trực tuyến</strong></h4>
                                            <p><span style="font-weight: 400;">Mỗi CV, chúng tôi đều dành thời gian xem
                                                    xét một cách cẩn thận. Vì vậy, bạn hãy chú ý tới mô tả công việc và
                                                    chỉ nộp đơn cho những vị trí bạn thực sự quan tâm hoặc phù hợp với
                                                    kinh nghiệm bản thân. </span></p>
                                        </div>
                                    </div>
                                    <div class="item-bannerdtfx ent-flex ">
                                        <div class="item-bannerdtfx-ll ent-flex" @click="clickActivethqt(2)"
                                            :class="{ activethqt: activethqt === 2 }">
                                            <img class="obd" src="../../assets/images//icon/icon-2.png">
                                            <div class="ocd"></div>
                                        </div>
                                        <div class="item-bannerdtfx-rl">
                                            <h4><strong>Tham dự phỏng vấn</strong></h4>
                                            <p><span style="font-weight: 400;">Hãy tìm hiểu kỹ về công ty, mô tả công
                                                    việc và đặt câu hỏi cho chúng tôi. Chúng tôi trân trọng sự trung
                                                    thực vì phỏng vẫn tìm kiếm sự phù hợp từ hai phía.</span></p>
                                        </div>
                                    </div>
                                    <div class="item-bannerdtfx ent-flex ">
                                        <div class="item-bannerdtfx-ll ent-flex" @click="clickActivethqt(3)"
                                            :class="{ activethqt: activethqt === 3 }">
                                            <img class="obd" src="../../assets/images//icon/icon-3.png">
                                            <div class="ocd"></div>
                                        </div>
                                        <div class="item-bannerdtfx-rl">
                                            <h4><span style="font-weight: 400;"><strong>Nhận thư mời nhận việc</strong>
                                                </span></h4>
                                            <p><span style="font-weight: 400;">Nếu bạn thích môi trường làm việc và công
                                                    ty có cảm nhận tốt về bạn, thì chúng tôi sẽ chính thức mời bạn gia
                                                    nhập đội ngũ</span></p>
                                        </div>
                                    </div>
                                    <div class="item-bannerdtfx ent-flex ">
                                        <div class="item-bannerdtfx-ll ent-flex" @click="clickActivethqt(4)"
                                            :class="{ activethqt: activethqt === 4 }">
                                            <img class="obd" src="../../assets/images//icon/icon-4.png">
                                            <div class="ocd"></div>
                                        </div>
                                        <div class="item-bannerdtfx-rl">
                                            <h4><strong>Chào đón thành viên mới</strong></h4>
                                            <p><span style="font-weight: 400;">Chúng tôi sẽ có các hoạt động hỗ trợ giúp
                                                    nhân viên mới để giúp họ hiểu rõ hơn về vị trí, công việc và văn hóa
                                                    công ty.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="section_whychoose" style="background-color: #5aa3fc;">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-6 col-md-12 col-12">
                        <div class="ent-container fullcdtd-ct">
                            <div class="ent-flex fullcdtdflex">
                                <div class="topfuldff ent-flex">
                                    <h2>Chế độ tuyển dụng</h2>
                                    <div class="ulxd">
                                        <a data-img="https://mpt.com.vn/wp-content/uploads/2023/11/Asset-4@72x.png"
                                            data-l="aamtlv0" :class="{ activeth: activethqtcd == 1 }"
                                            @click="clickActivethqtCĐ(1)" style="cursor: pointer;">Môi trường làm
                                            việc</a>
                                        <a data-img="https://mpt.com.vn/wp-content/uploads/2023/11/Asset-4@72x.png"
                                            data-l="aamtlv1" :class="{ activeth: activethqtcd == 2 }"
                                            @click="clickActivethqtCĐ(2)" style="cursor: pointer;">Quyền lợi</a>
                                        <a data-img="https://mpt.com.vn/wp-content/uploads/2023/11/Asset-4@72x.png"
                                            data-l="aamtlv2" :class="{ activeth: activethqtcd == 3 }"
                                            @click="clickActivethqtCĐ(3)" style="cursor: pointer;">Hoạt động</a>
                                    </div>
                                </div>
                                <div class="botfuldff"
                                    :style="{ backgroundImage: `url(${require('@/assets/images/tuyen-dung_sections-2.webp')})` }" style="border-radius: 30px;">
                                    <div id="aamtlv0" class="contenthjk"
                                        :style="{ display: activethqtcd == 1 ? 'block' : 'none' }">
                                        <h3>Môi trường làm việc</h3>
                                        <p><span style="font-weight: 400;">Đồng nghiệp cởi mở, thân thiện, đoàn
                                                kết.</span>
                                        </p>
                                        <p><span style="font-weight: 400;">Khuyến khích việc suy nghĩ độc lập, chủ động
                                                trong công
                                                việc.</span></p>
                                        <p><span style="font-weight: 400;">Được ghi nhận, đánh giá thường xuyên trên kết
                                                quả
                                                công
                                                việc,
                                                sẵn sàng trao </span><span style="font-weight: 400;">cơ hội.</span></p>
                                        <p><span style="font-weight: 400;">Làm việc với doanh nghiệp, nhân sự trẻ, năng
                                                động
                                                và tiêu
                                                chuẩn cao.</span></p>
                                        <p><span style="font-weight: 400;">Có cơ hội phát triển theo đúng năng
                                                lực.</span>
                                        </p>
                                        <p><span style="font-weight: 400;">Có cơ hội được tham gia các khóa đào tạo nâng
                                                cao
                                                năng
                                                lực
                                                chuyên môn.</span></p>
                                        <p><a href="mailTo:support@sapo.vn">Ứng tuyển ngay</a></p>

                                    </div>
                                    <div id="aamtlv1" class="contenthjk"
                                        :style="{ display: activethqtcd == 2 ? 'block' : 'none' }">
                                        <h3>Quyền lợi</h3>
                                        <p><span style="font-weight: 400;">Thu nhập hấp dẫn</span></p>
                                        <p><span style="font-weight: 400;">Nhiều cơ hội học hỏi và phát triển bản
                                                thân.</span></p>
                                        <p><span style="font-weight: 400;">Hưởng đầy đủ các chế độ BHXH, BHYT và các
                                                phúc
                                                lợi
                                                khác.</span></p>
                                        <p><span style="font-weight: 400;">Môi trường làm việc chuyên nghiệp, năng
                                                động</span></p>
                                        <p><span style="font-weight: 400;">Công việc ổn định, lâu dài.</span></p>
                                        <p><span style="font-weight: 400;">Lộ trình thăng tiến nghề nghiệp rõ
                                                ràng.</span>
                                        </p>
                                        <p><a href="mailTo:support@sapo.vn">Ứng tuyển ngay</a></p>

                                    </div>
                                    <div id="aamtlv2" class="contenthjk"
                                        :style="{ display: activethqtcd == 3 ? 'block' : 'none' }">
                                        <h3>Hoạt động</h3>
                                        <p><span style="font-weight: 400;">Các dịp lễ.</span></p>
                                        <p><span style="font-weight: 400;">Tổ chức sinh nhật.</span></p>
                                        <p><span style="font-weight: 400;">Các hoạt động thường niên như team
                                                building,nghỉ
                                                mát
                                                thường
                                                niên, sinh nhật Công ty, 08/03, 20/10…</span></p>
                                        <p><span style="font-weight: 400;">Các hoạt động đào tạo nội bộ và bên
                                                ngoài.</span>
                                        </p>
                                        <p><a href="mailTo:support@sapo.vn">Ứng tuyển ngay</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <div class="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
            <meta itemprop="name" content="Dự án">
            <meta itemprop="description" content="">
            <div class="container">

                <div class="block-title mx-auto mb-4">
                    <span class="top-title"></span>
                    <h2><a href="dich-vu.html" title="Cung cấp dịch vụ chất lượng">Vị Trí Tuyển Dụng</a>
                    </h2>
                    <p style="text-align: center;">Đội ngũ tuyệt vời bắt đầu từ những con người xuất sắc. Vì vậy, hãy
                        ứng tuyển ngay ngày hôm nay để cùng nhau tạo nên sự khác biệt!</p>
                </div>
                <div class="row">
                    <div class="right-content col-lg-12 col-12">

                        <div class="list-blogs">

                            <div class="row row-fix">
                                <div v-for="recruitment in recruitments" :key="recruitment.id"
                                    class="col-12 col-md-6 col-lg-3 col-fix">
                                    <div class="item-blog">
                                        <div class="block-thumb">
                                            <router-link :to="`/recruitment/${recruitment.id}`">
                                                <img class="lazyload"
                                                    :src="recruitment._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url"
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
                                                    <span>Team Blue Shapphire</span>
                                                </div>
                                                <div class="date-post f">

                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal"
                                                        data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16">
                                                        <path fill="#595959"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                                            class=""></path>
                                                    </svg>
                                                    {{ formatDate(recruitment.date) }}
                                                </div>
                                            </div>
                                            <h3>
                                                <router-link :to="`/recruitment/${recruitment.id}`"
                                                    v-html="recruitment.title.rendered"></router-link>
                                            </h3>

                                            <div class="article-content" v-html="recruitment.excerpt.rendered"></div>

                                        </div>
                                    </div>
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
    name: 'Recruitment',
    data() {
        return {
            activethqt: 1,
            activethqtcd: 1,
            isLoading: false,
            items: [
                { name: "Item 1" },
                { name: "Item 2" },
                { name: "Item 3" }
            ],
            itemsCĐ: [
                { name: "Item 1" },
                { name: "Item 2" },
                { name: "Item 3" }
            ],
            recruitments: [],
        };
    },
    methods: {
        async fetchRecruitment(categoryId = 5) {
            this.isLoading = true;
            let url = "https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?_embed"
            if (categoryId) {
                url += `&categories=${categoryId}`;
            }
            try {
                const response = await axios.get(url);
                this.recruitments = response.data;
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
        clickActivethqt(index) {
            this.activethqt = index;
        },
        clickActivethqtCĐ(index) {
            this.activethqtcd = index;
        }
    },
    mounted() {
        this.fetchRecruitment();
    }
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