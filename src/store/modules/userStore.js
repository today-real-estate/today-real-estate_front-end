import { loginUser } from '@/api/auth';
import { postLikedItem, fetchLikedAptCodes, deleteLikedItem } from '@/api/user';
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
		likedAptCodes: [],
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
		SET_LIKED_APT_CODES(state, action, aptCode) {
			if (action === 'add') {
				state.likedAptCodes = [...state.likedAptCodes, ...aptCode];
			} else {
				state.likedAptCodes = state.likedAptCodes.filter(
					(likedAptCode) => likedAptCode !== aptCode,
				);
			}
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
		CLEAR_LIKED_APT_CODES(state) {
			state.likedAptCodes = [];
		},
		CLEAR_ALL(state) {
			state.token = '';
			state.id = '';
			state.nickname = '';
			state.recentSearch = '';
			state.likedAptCodes = [];
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
		async GET_LIKED_APT_CODES({ commit }, userData) {
			const { data } = await fetchLikedAptCodes(userData);

			if (data) {
				const likedAptCodes = data.likedAptCodes.map((item) => item.aptCode);
				commit('SET_LIKED_APT_CODES', likedAptCodes);
			}
		},
		async ADD_LIKED_APT_CODES({ commit }, aptData) {
			await postLikedItem(aptData);
			commit('SET_LIKED_APT_CODES', 'add', aptData.aptCode);
		},
		async REMOVE_LIKED_APT_CODES({ commit }, aptData) {
			await deleteLikedItem(aptData);
			commit('SET_LIKED_APT_CODES', 'remove', aptData.aptCode);
		},
		LOGOUT({ commit }) {
			commit('CLEAR_ALL');
		},
	},
};

export default userStore;
