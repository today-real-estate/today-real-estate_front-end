import { instance } from '@/api/index';

function registerUser(userData) {
	return instance.post('/users/signup', userData);
}

export { registerUser };
