import axios from 'axios';

function createInstance() {
	console.log(process.env.VUE_APP_API_URL);
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

export const instance = createInstance();
