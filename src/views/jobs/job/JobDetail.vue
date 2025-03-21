<template>
    <div class="bg-home">
        <section class="bread-crumb"
            :style="{ backgroundImage: `url(${require('@/assets/css/themes/breadcrumb-bg.webp')})` }">
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
                        <div class="right-content col-lg-8 col-12" v-if="post">
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
                                                    placeholder="Họ và tên" value="" type="text" name="your-name" /></span>
                                        </p>
                                    </div>
                                    <div class="telldd1">
                                        <p><span class="wpcf7-form-control-wrap" data-name="tel-344"><input size="40"
                                                    v-model="form.phone"
                                                    class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                                                    aria-required="true" aria-invalid="false" placeholder="Số Điện Thoại"
                                                    value="" type="tel" name="tel-344" /></span>
                                        </p>
                                    </div>
                                    <div class="emaildd1">
                                        <p><span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40"
                                                    v-model="form.email"
                                                    class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                    autocomplete="email" aria-required="true" aria-invalid="false"
                                                    placeholder="Email" value="" type="email" name="your-email" /></span>
                                        </p>
                                    </div>
                                    <div class="txxtdf1">
                                        <p>Tải lên CV của bạn<br />
                                            <span class="wpcf7-form-control-wrap" data-name="file-45"><input size="40"
                                                    @change="handleFileUpload"
                                                    class="wpcf7-form-control wpcf7-file upfilecvbn"
                                                    accept=".jpg,.jpeg,.png,.gif,.txt,.pdf" aria-invalid="false" type="file"
                                                    name="file-45" /></span>
                                        </p>
                                    </div>

                                    <button type="submit" class="btn-recruitment">ĐĂNG KÝ</button>
                                </form>
                            </div>

                        </div>
                        <div v-else class="right-content col-lg-8 col-12">
                            <p>Đang tải...</p>
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
            <p v-if="responseMessage">{{ responseMessage }}</p>
        </section>
    </div>
</template>


<script>
import emailjs from '@emailjs/browser';
import axios from 'axios';
export default {
    name: 'JobDetail',
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
            responseMessage: ""
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
        fetchPost(postId) {
            fetch(`https://api-blue-shappire.trialweb.us/wp-json/wp/v2/posts/${postId}`)
                .then(response => response.json())
                .then(data => {
                    this.post = data;
                })
                .catch(error => console.error('Lỗi:', error));
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
