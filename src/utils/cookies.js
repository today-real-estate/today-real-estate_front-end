function saveAuthToCookie(value) {
	document.cookie = `auth=${value}`;
}

function saveUserToCookie(value) {
	document.cookie = `nickname=${value}`;
}

function saveIdToCookie(value) {
	document.cookie = `id=${value}`;
}

function saveUserEmailToCookie(value) {
	document.cookie = `userEmail=${value}`;
}

function saveRecentSearchToCookie(value) {
	document.cookie = `recentSearch=${value}`;
}

function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)nickname\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getIdFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)id\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getUserEmailFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)userEmail\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function getRecentSearchCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)recentSearch\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
}

function deleteCookie(value) {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function clearAllCookies() {
	deleteCookie('auth');
	deleteCookie('id');
	deleteCookie('nickname');
	deleteCookie('recentSearch');
}

export {
	saveAuthToCookie,
	saveUserToCookie,
	saveIdToCookie,
	saveUserEmailToCookie,
	saveRecentSearchToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	getIdFromCookie,
	getUserEmailFromCookie,
	getRecentSearchCookie,
	deleteCookie,
	clearAllCookies,
};
