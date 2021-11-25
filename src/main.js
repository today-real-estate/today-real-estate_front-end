import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import AntDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false;
Vue.use(AntDesign);
Vue.use(VueSweetalert2);

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
