import { instance, instanceWithAuth } from '@/api/index';

function registerUser(userData) {
	return instance.post('/users/signup', userData);
}

function dropUser(userData) {
	return instanceWithAuth.delete('/users/delete', { params: userData });
}

function loginUser(userData) {
	return instance.post('/users/login', userData);
}

function checkDuplicate(emailData) {
	return instance.get('/users/emails-check', { params: emailData });
}

export { registerUser, dropUser, loginUser, checkDuplicate };
