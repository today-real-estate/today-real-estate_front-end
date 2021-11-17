import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import AntDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(AntDesign);

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
