import Vue from 'vue'
import App from './App.vue'
import router from './router';
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import $ from "jquery";
window.$ = window.jQuery = $; // Đảm bảo jQuery là global

import "waypoints/lib/jquery.waypoints.min.js";
import "counterup/jquery.counterup.min.js";


// library.add(faCaretDown);
// Gán jQuery vào window để dùng được ở mọi nơi
window.$ = window.jQuery = jQuery;



Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
