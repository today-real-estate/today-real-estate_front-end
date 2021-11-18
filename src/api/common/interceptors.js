import store from '@/store/index';

export function setInterseptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			const token = store.getters['userStore/getToken'];
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	return instance;
}
