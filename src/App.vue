<template>
  <div id="app">
    <div class="backdrop__body-backdrop___1rvky" :class="{ active: isSearchActive}" @click="closeCart"></div>
    <div class="opacity_menu"></div>
    <Header :isSearchActive="isSearchActive" :openSearch="openSearch"></Header>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import "@/assets/global.css";
import "@/assets/global.js";
// import '@/assets/css/themes/jquery7e7a';
// import '@/assets/css/themes/jquery-toc7e7a';
export default {

  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isCartOpen: false,  // Trạng thái giỏ hàng
      isSearchActive: false // Trạng thái tìm kiếm
    };
  },
  methods: {
    closeCart() {
      this.isCartOpen = false;
      this.isSearchActive = false;
      document.body.classList.remove("search-active"); // Xóa class trên body
    },
    openSearch() {
      this.isSearchActive = !this.isSearchActive;
    }
  },
}
</script>

<style></style>
