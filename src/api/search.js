import { instance } from '@/api/index';
import { instanceWithAuth } from '@/api/index';

function fetchSidoList() {
	return instance.get('/map/sido');
}

function fetchGugunList(sidoData) {
	return instance.get('/map/gugun', { params: sidoData });
}

function fetchDongList(gugunData) {
	return instance.get('/map/dong', { params: gugunData });
}

function fetchAptListByGugun(gugunData) {
	return instance.get('/map/gu/apt', { params: gugunData });
}

function fetchAptListByDong(dongData) {
	return instance.get('/map/apt', { params: dongData });
}

function fetchAptListBySearch(searchDate) {
	return instance.get('/map/dong-search', { params: searchDate });
}

function fetchRecommendations(recentSearchData) {
	return instanceWithAuth.get('/map/recommend', { params: recentSearchData });
}

export {
	fetchSidoList,
	fetchGugunList,
	fetchDongList,
	fetchAptListByGugun,
	fetchAptListByDong,
	fetchAptListBySearch,
	fetchRecommendations,
};
