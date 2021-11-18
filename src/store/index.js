import Vue from 'vue';
import Vuex from 'vuex';
import userStore from '@/store/modules/userStore';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		userStore,
	},
});

export default store;
