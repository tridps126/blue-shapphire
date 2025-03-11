import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Services from '@/views/Services.vue';
import Products from '@/views/Products.vue';
import Team from '@/views/Team.vue';
import News from '@/views/news/News.vue';
import Contact from '@/views/Contact.vue';
import ContactCenter from '@/views/Service/ContactCenter.vue';
import Marketing from '@/views/Service/Marketing.vue';
import Website from '@/views/Service/Website.vue';
import Partner from '@/views/Partners.vue';
import GalaxyAccess from '@/views/partners/GalaxyAccess.vue';
import GalaxyVisaExpress from '@/views/partners/GalaxyVisaExpress.vue';
import Recruitment from '@/views/Recruitment.vue';
import NewDetail from '@/views/news/new/NewDetail.vue';

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
    { path: '/new/:id', component: NewDetail },
    { path: '/recruitment', name: 'Recruitment', component: Recruitment },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/service/contact-center', name: 'ContactCenter', component: ContactCenter },
    { path: '/service/marketing', name: 'Marketing', component: Marketing },
    { path: '/service/website', name: 'Website', component: Website },
    { path: '/partner', name: 'Partner', component: Partner },
    { path: '/partners/galaxy-access', name: 'GalaxyAccess', component: GalaxyAccess },
    { path: '/partners/galaxy-visa-express', name: 'GalaxyVisaExpress', component: GalaxyVisaExpress },
    { path: '/partner', name: 'Partner', component: Partner },
    { path: '*', redirect: '/' } // Redirect nếu không tìm thấy trang
  ]
});
