import { instanceWithAuth } from '@/api/index';

function fetchUserData(userId) {
	return instanceWithAuth.get(`/users/${userId}`);
}

function updateUserName(userData) {
	return instanceWithAuth.put('/users/update/username', userData);
}

function updateNickname(userData) {
	return instanceWithAuth.put('/users/update/nickname', userData);
}

export { fetchUserData, updateUserName, updateNickname };
