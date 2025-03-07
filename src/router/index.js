import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Services from '@/views/Services.vue';
import Products from '@/views/Products.vue';
import Team from '@/views/Team.vue';
import News from '@/views/News.vue';
import Contact from '@/views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Dùng mode history để bỏ hash (#) trên URL
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/services', name: 'Services', component: Services },
    { path: '/products', name: 'Products', component: Products },
    { path: '/team', name: 'Team', component: Team },
    { path: '/news', name: 'News', component: News },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '*', redirect: '/' } // Redirect nếu không tìm thấy trang
  ]
});
