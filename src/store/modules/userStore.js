import { loginUser } from '@/api/auth';
import {
	getAuthFromCookie,
	getUserFromCookie,
	getIdFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
	clearCookies,
	saveIdToCookie,
} from '@/utils/cookies';

const userStore = {
	namespaced: true,
	state: {
		token: getAuthFromCookie() || '',
		id: getIdFromCookie() || '',
		nickname: getUserFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.token !== '';
		},
		getNickname(state) {
			return state.nickname;
		},
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		CLEAR_TOKEN(state) {
			state.token = '';
		},
		SET_ID(state, id) {
			state.id = id;
		},
		CLEAR_ID(state) {
			state.id = '';
		},
		SET_NICKNAME(state, nickname) {
			state.nickname = nickname;
		},
		CLEAR_NICKNAME(state) {
			state.nickname = '';
		},
		CLEAR_ALL(state) {
			state.token = '';
			state.id = '';
			state.nickname = '';

			clearCookies();
		},
	},
	actions: {
		async LOGIN({ commit }, loginUserData) {
			const { data } = await loginUser(loginUserData);

			commit('SET_TOKEN', data.token);
			commit('SET_ID', data.id);
			commit('SET_NICKNAME', data.nickname);

			saveAuthToCookie(data.token);
			saveIdToCookie(data.id);
			saveUserToCookie(data.nickname);
		},
	},
};

export default userStore;
