import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			name: 'Signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/service/inquiry',
			name: 'ServiceInquiry',
			component: () => import('@/views/service/ServiceInquiryPage.vue'),
		},
		{
			path: '/account/inquiry-list',
			name: 'AccountInquiryList',
			component: () => import('@/views/account/AccountInquiryPage.vue'),
		},
	],
});
