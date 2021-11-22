import { instance } from '@/api/index';

function fetchSidoList() {
	return instance.get('/map/sido');
}

function fetchGugunList(sidoData) {
	return instance.get('/map/gugun', { params: sidoData });
}

function fetchDongList(gugunData) {
	return instance.get('/map/dong', { params: gugunData });
}

function fetchAptList(dongData) {
	return instance.get('/map/apt', { params: dongData });
}

function fetchAptListBySearch(searchDate) {
	return instance.get('/map/dong-search', { params: searchDate });
}

export {
	fetchSidoList,
	fetchGugunList,
	fetchDongList,
	fetchAptList,
	fetchAptListBySearch,
};
