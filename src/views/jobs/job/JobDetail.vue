<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/images/banner-recrui.webp')})` }">
            >
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

                    <li class="home">
                        <a href="index.html"><span>Tuyển Dụng</span></a>
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
                        <div class="right-content col-lg-8 col-12" v-if="isLoading">
                            <content-loader :height="620" :width="'100%'" style="width: 100%; height: auto;">
                                <!-- Tiêu đề -->
                                <rect x="0" y="10" rx="4" ry="4" width="40%" height="28" />

                                <!-- Mô tả công việc -->
                                <rect x="0" y="50" rx="4" ry="4" width="30%" height="20" />
                                <rect x="0" y="80" rx="3" ry="3" width="95%" height="16" />
                                <rect x="0" y="100" rx="3" ry="3" width="98%" height="16" />
                                <rect x="0" y="120" rx="3" ry="3" width="96%" height="16" />
                                <rect x="0" y="140" rx="3" ry="3" width="90%" height="16" />

                                <!-- Yêu cầu ứng viên -->
                                <rect x="0" y="180" rx="4" ry="4" width="35%" height="20" />
                                <rect x="0" y="210" rx="3" ry="3" width="95%" height="16" />
                                <rect x="0" y="230" rx="3" ry="3" width="90%" height="16" />
                                <rect x="0" y="250" rx="3" ry="3" width="93%" height="16" />
                                <rect x="0" y="270" rx="3" ry="3" width="88%" height="16" />
                                <rect x="0" y="290" rx="3" ry="3" width="80%" height="16" />

                                <!-- Quyền lợi -->
                                <rect x="0" y="330" rx="4" ry="4" width="25%" height="20" />
                                <rect x="0" y="360" rx="3" ry="3" width="95%" height="16" />
                                <rect x="0" y="380" rx="3" ry="3" width="90%" height="16" />
                                <rect x="0" y="400" rx="3" ry="3" width="95%" height="16" />
                                <rect x="0" y="420" rx="3" ry="3" width="96%" height="16" />
                                <rect x="0" y="440" rx="3" ry="3" width="92%" height="16" />
                                <rect x="0" y="460" rx="3" ry="3" width="93%" height="16" />
                                <rect x="0" y="480" rx="3" ry="3" width="88%" height="16" />
                                <rect x="0" y="500" rx="3" ry="3" width="85%" height="16" />

                                <!-- Cách thức ứng tuyển -->
                                <rect x="0" y="540" rx="4" ry="4" width="35%" height="20" />
                                <rect x="0" y="570" rx="3" ry="3" width="98%" height="16" />
                                <rect x="0" y="590" rx="3" ry="3" width="85%" height="16" />
                                <rect x="0" y="610" rx="3" ry="3" width="50%" height="16" />
                            </content-loader>

                        </div>
                        <div class="right-content col-lg-8 col-12" v-else>
                            <div class="page-title category-title">
                                <h1 class="title-head" style="color: #006ac0;" v-html="post.title.rendered"></h1>
                            </div>
                            <div class="content-page rte" v-html="post.content.rendered"></div>
                            <div id="boxut" class="boxut">
                                <h4 class="mt-4">Nộp đơn ứng tuyển</h4>
                                <form ref="jobForm" @submit.prevent="sendEmail" enctype="multipart/form-data">

                                    <div class="namedd1">
                                        <p><span class="wpcf7-form-control-wrap" data-name="your-name">
                                                <input v-model="form.name" size="40"
                                                    class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                    autocomplete="name" aria-required="true" aria-invalid="false"
                                                    placeholder="Họ và tên - Vị trí tuyển dụng" value="" type="text"
                                                    name="your-name" /></span>
                                        </p>
                                    </div>
                                    <div class="telldd1">
                                        <p><span class="wpcf7-form-control-wrap" data-name="tel-344"><input size="40"
                                                    v-model="form.phone"
                                                    class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                    aria-required="true" aria-invalid="false"
                                                    placeholder="Số Điện Thoại" value="" type="tel"
                                                    name="tel-344" /></span>
                                        </p>
                                    </div>
                                    <div class="emaildd1">
                                        <p><span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40"
                                                    v-model="form.email"
                                                    class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                    autocomplete="email" aria-required="true" aria-invalid="false"
                                                    placeholder="Email" value="" type="email"
                                                    name="your-email" /></span>
                                        </p>
                                    </div>
                                    <div class="txxtdf1">
                                        <p>Tải lên CV của bạn<br />
                                            <span class="wpcf7-form-control-wrap" data-name="file-45"><input size="40"
                                                    @change="handleFileUpload"
                                                    class="wpcf7-form-control wpcf7-file upfilecvbn"
                                                    accept=".jpg,.jpeg,.png,.gif,.txt,.pdf" aria-invalid="false"
                                                    type="file" name="file-45" /></span>
                                        </p>
                                    </div>

                                    <button type="submit" class="btn-recruitment">ĐĂNG KÝ</button>
                                </form>
                                <p v-if="responseMessage" style="text-align: center;">{{ responseMessage }}</p>
                            </div>
                        </div>
                        <div class="page_services col-lg-4 col-12">
                            <div class="aside-content-menu">
                                <div class="title">
                                    Các Vị Trí Khác
                                </div>
                                <nav class="nav-category">
                                    <ul class="navbar-pills">
                                        <li v-for="otherNew in otherNews" class="nav-item relative"
                                            :class="{ active: $route.params.id == otherNew.id }">
                                            <router-link :to="`/recruitment/${otherNew.id}`" class="nav-link">{{
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
    </div>
</template>


<script>
import axios from 'axios';
import ContentLoader from 'vue-content-loading';
export default {
    name: 'JobDetail',
    components: {
        ContentLoader,
    },
    data() {
        return {
            searchTerm: '',
            post: null,
            otherNews: [],
            otherNewsId: 4,
            form: {
                name: "",
                phone: "",
                email: "",
                attachment: null,
            },
            responseMessage: "",
            isLoading: false
        };
    },
    methods: {
        fetchOtherNews() {
            fetch(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts?categories=5`)
                .then(response => response.json())
                .then(data => {
                    this.otherNews = data;
                })
                .catch(error => console.error('Lỗi:', error));
        },
        async fetchPost(postId) {
            this.isLoading = true;
            try {
                const response = await fetch(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts/${postId}`);
                const data = await response.json();
                this.post = data;
            } catch (error) {
                console.error("Lỗi khi tải bài viết:", error);
            } finally {
                this.isLoading = false;
            }
        },
        handleFileUpload(event) {
            this.form.attachment = event.target.files[0];
        },
        async sendEmail() {
            let formData = new FormData();
            formData.append("name", this.form.name);
            formData.append("phone", this.form.phone);
            formData.append("email", this.form.email);
            if (this.form.attachment) {
                formData.append("attachment", this.form.attachment);
            }

            try {
                let response = await axios.post(
                    "https://api-blue-shappire.trialweb.us/wp-json/custom-api/v1/send-email/",
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );
                this.responseMessage = response.data.message;
            } catch (error) {
                this.responseMessage = "Lỗi khi gửi email!";
            }
        }
    },
    mounted() {
        const postId = this.$route.params.id;
        this.fetchOtherNews();
        this.fetchPost(postId);
    },
    watch: {
        "$route.params.id"(newId) {
            this.fetchPost(newId); // Gọi lại API khi ID thay đổi
        }
    }
}
</script>
