import { instanceWithAuth } from '@/api/index';

function putRecentSearch(recentSearchData) {
	return instanceWithAuth.put('/users/recent-search', recentSearchData);
}

export { putRecentSearch };
