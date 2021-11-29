export function convertAptPrice(price) {
	const _price = price.trim();

	if (_price.length <= 5) {
		const thousand = price.replace(',', '');

		return `${thousand}천만`;
	}

	const hundredMillion = _price.substring(0, _price.length - 5);
	const thousand = parseInt(
		_price.substring(_price.length - 5).replace(',', ''),
	);
	const convertedPrice =
		thousand === 0 ? `${hundredMillion}억` : `${hundredMillion}억 ${thousand}`;

	return convertedPrice;
}
