import { instance } from '@/api/index';

function fetchUserLikedList(userData) {
	return instance.get('/map/user', { params: userData });
}

export { fetchUserLikedList };
