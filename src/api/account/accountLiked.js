import { instance } from '@/api/index';

function fetchUserLikedList(userData) {
	return instance.get('/liked-apt-codes', { params: userData });
}

export { fetchUserLikedList };
