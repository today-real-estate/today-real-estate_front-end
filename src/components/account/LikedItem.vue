<template>
	<div class="list__apt">
		<div class="apt__images">
			<img :src="apt.img" :alt="apt.aptName" />
		</div>
		<div class="apt__apt-info">
			<h2 class="apt-info__name">{{ apt.aptName }}</h2>
			<h1 class="apt-info__price">{{ apt.recentPrice | convertAptPrice }}</h1>
			<p class="apt-info__build-year">건축연도: {{ apt.buildYear }}</p>
			<p class="apt-info__address">
				{{ apt.sidoName }} {{ apt.gugunName }} {{ apt.dongName }}
				{{ apt.jibun }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		apt: {
			type: Object,
			default: () => ({}),
		},
	},
	filters: {
		convertAptPrice(price) {
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
				thousand === 0
					? `${hundredMillion}억`
					: `${hundredMillion}억 ${thousand}`;

			return convertedPrice;
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/likedItem.scss';
</style>
