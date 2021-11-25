import { instance } from '@/api/index';

function registerUser(userData) {
	return instance.post('/users/signup', userData);
}

function loginUser(userData) {
	return instance.post('/users/login', userData);
}

function checkDuplicate(emailData) {
	return instance.get('/users/emails-check', { params: emailData });
}

export { registerUser, loginUser, checkDuplicate };
