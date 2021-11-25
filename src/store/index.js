import Vue from 'vue';
import Vuex from 'vuex';
import userStore from '@/store/modules/userStore';
import searchStore from '@/store/modules/searchStore';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		userStore,
		searchStore,
	},
});

export default store;
