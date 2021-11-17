import store from '@/store/index';

export function setInterseptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			config.headers.Authorization = `Bearer ${store.state.token}`;
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
