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

export { fetchSidoList, fetchGugunList, fetchDongList, fetchAptList };
