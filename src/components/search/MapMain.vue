<template>
	<div class="map__main">
		<div class="main__side-bar">
			<div class="side-bar__header">
				<span>검색된 아파트 {{ getAptList.length }}개</span>
			</div>
			<div class="side-bar__content">
				<ul class="content__list" v-if="getAptList.length !== 0">
					<li class="list__item" v-for="apt in getAptList" :key="apt.aptCode">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<p class="desc__price">
									매매 {{ apt.recentPrice | convertAptPrice }}
								</p>
								<h1 class="desc__title">아파트 · {{ apt.aptName }}</h1>
								<p class="desc__sub-desc">건축년도 : {{ apt.buildYear }}년</p>
								<p class="desc__sub-desc">
									{{ apt.gugunName }} {{ apt.dongName }}
								</p>
								<p class="desc__status">확인매물 21.11.09.</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="main__map">
			<KakaoMap />
		</div>
	</div>
</template>

<script>
import KakaoMap from '@/components/search/KakaoMap.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		KakaoMap,
	},
	computed: {
		...mapGetters('searchStore', ['getAptList']),
	},
	filters: {
		convertAptPrice(price) {
			const hundredMillion = price.substring(0, price.length - 5);
			const thousand = price.substring(price.length - 5).replace(',', '');
			const convertedPrice =
				thousand === '0000'
					? `${hundredMillion}억`
					: `${hundredMillion}억 ${thousand}`;

			return convertedPrice;
		},
	},
};
</script>

<style lang="scss">
@import './scss/mapMain.scss';
</style>
