import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/service/inquiry',
			component: () => import('@/views/ServiceInquiryPage.vue'),
		},
		{
			path: '/account/inquiry-list',
			component: () => import('@/views/AccountInquiryPage.vue'),
		},
	],
});
