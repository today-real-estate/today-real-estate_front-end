import { loginUser } from '@/api/auth';
import {
	getAuthFromCookie,
	getUserFromCookie,
	getIdFromCookie,
	getRecentSearchCookie,
	saveAuthToCookie,
	saveUserToCookie,
	saveIdToCookie,
	saveRecentSearchToCookie,
} from '@/utils/cookies';

const userStore = {
	namespaced: true,
	state: {
		token: getAuthFromCookie() || '',
		id: getIdFromCookie() || '',
		nickname: getUserFromCookie() || '',
		recentSearch: getRecentSearchCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.token !== '';
		},
		getToken(state) {
			return state.token;
		},
		getId(state) {
			return state.id;
		},
		getNickname(state) {
			return state.nickname;
		},
		getRecentSearch(state) {
			return state.recentSearch;
		},
	},
	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		},
		SET_ID(state, id) {
			state.id = id;
		},
		SET_NICKNAME(state, nickname) {
			state.nickname = nickname;
		},
		SET_RECENT_SEARCH(state, recentSearch) {
			state.recentSearch = recentSearch;
		},
		CLEAR_TOKEN(state) {
			state.token = '';
		},
		CLEAR_ID(state) {
			state.id = '';
		},
		CLEAR_NICKNAME(state) {
			state.nickname = '';
		},
		CLEAR_RECENT_SEARCH(state) {
			state.recentSearch = '';
		},
		CLEAR_ALL(state) {
			state.token = '';
			state.id = '';
			state.nickname = '';
			state.recentSearch = '';
		},
	},
	actions: {
		async LOGIN({ commit }, loginUserData) {
			const { data } = await loginUser(loginUserData);

			commit('SET_TOKEN', data.token);
			commit('SET_ID', data.id);
			commit('SET_NICKNAME', data.nickname);
			commit('SET_RECENT_SEARCH', data.recentSearch);

			saveAuthToCookie(data.token);
			saveIdToCookie(data.id);
			saveUserToCookie(data.nickname);
			saveRecentSearchToCookie(data.recentSearch);
		},
		LOGOUT({ commit }) {
			commit('CLEAR_ALL');
		},
	},
};

export default userStore;
