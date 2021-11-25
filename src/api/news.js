import { instance } from '@/api/index';

function fetchNewsList() {
	return instance.get('/news');
}

export { fetchNewsList };
