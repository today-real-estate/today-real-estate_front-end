import {
	fetchSidoList,
	fetchGugunList,
	fetchDongList,
	fetchAptList,
} from '@/api/search';

const searchStore = {
	namespaced: true,
	state: {
		sidoList: [{ code: 0, sidoName: '선택하세요' }],
		gugunList: [{ code: 0, gugunName: '선택하세요' }],
		dongList: [{ code: 0, dongName: '선택하세요' }],
		aptList: [],
	},
	getters: {
		getAptList(state) {
			return state.aptList;
		},
	},
	mutations: {
		SET_SIDO_LIST(state, sidoListData) {
			sidoListData.forEach((sido) => {
				state.sidoList.push({ code: sido.sidoCode, sidoName: sido.sidoName });
			});
		},
		SET_GUGUN_LIST(state, gugunListData) {
			gugunListData.forEach((gugun) => {
				state.gugunList.push({
					code: gugun.gugunCode,
					gugunName: gugun.gugunName,
				});
			});
		},
		SET_DONG_LIST(state, dongListData) {
			dongListData.forEach((dong) => {
				state.dongList.push({
					code: dong.dongCode,
					dongName: dong.dongName,
				});
			});
		},
		SET_APT_LIST(state, aptListData) {
			state.aptList = aptListData;
		},
		CLEAR_SIDO_LIST(state) {
			state.sidoList = [{ code: 0, sidoName: '선택하세요' }];
		},
		CLEAR_GUGUN_LIST(state) {
			state.gugunList = [{ code: 0, gugunName: '선택하세요' }];
		},
		CLEAR_DONG_LIST(state) {
			state.dongList = [{ code: 0, dongName: '선택하세요' }];
		},
	},
	actions: {
		async GET_SIDO_LIST({ commit }) {
			const { data } = await fetchSidoList();
			commit('SET_SIDO_LIST', data);
		},
		async GET_GUGUN_LIST({ commit }, sidoData) {
			const { data } = await fetchGugunList(sidoData);
			commit('SET_GUGUN_LIST', data);
		},
		async GET_DONG_LIST({ commit }, gugunData) {
			const { data } = await fetchDongList(gugunData);
			commit('SET_DONG_LIST', data);
		},
		async GET_APT_LIST({ commit }, dongData) {
			const { data } = await fetchAptList(dongData);
			commit('SET_APT_LIST', data);
		},
	},
};

export default searchStore;
