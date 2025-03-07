<template>
  <div id="app">
    <Header></Header>
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
  }
}
</script>

<style></style>
