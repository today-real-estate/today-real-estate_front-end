import { instanceWithAuth } from '@/api/index';

function putRecentSearch(recentSearchData) {
	return instanceWithAuth.put('/users/recent-search', recentSearchData);
}

function postLikedItem(aptData) {
	return instanceWithAuth.post('/liked-apt-codes', aptData);
}

function fetchLikedAptCodes(userData) {
	return instanceWithAuth.get('/liked-apt-codes/list', { params: userData });
}

function deleteLikedItem(aptData) {
	return instanceWithAuth.delete('/liked-apt-codes', aptData);
}

function fetchLikedAptList(userData) {
	return instanceWithAuth.get('/liked-apt-codes', { params: userData });
}

export {
	putRecentSearch,
	postLikedItem,
	fetchLikedAptCodes,
	deleteLikedItem,
	fetchLikedAptList,
};
