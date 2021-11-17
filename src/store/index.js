import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		nickname: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
		id: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.token !== '';
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
	},
	actions: {
		async LOGIN({ commit }, loginUserData) {
			const { data } = await loginUser(loginUserData);

			console.log(data);

			commit('SET_TOKEN', data.token);
			commit('SET_ID', data.id);
			commit('SET_NICKNAME', data.nickname);

			saveAuthToCookie(data.token);
			saveUserToCookie(data.nickname);
		},
	},
});
