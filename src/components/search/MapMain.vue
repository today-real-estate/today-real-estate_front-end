<template>
	<div class="map__main">
		<div class="main__side-bar">
			<div class="side-bar__header">
				<span v-if="!isSelected">검색된 아파트 {{ getAptList.length }}개</span>
				<button v-else @click="backToItemList" class="header__back-btn">
					<AIcon type="arrow-left" />
				</button>
			</div>
			<div class="side-bar__content">
				<div v-if="!isSelected">
					<ul
						class="content__list"
						v-if="getAptList.length !== 0"
						key="app-list"
					>
						<li
							class="list__item"
							v-for="apt in getAptList"
							:key="apt.aptCode"
							@click="selectItem(apt)"
						>
							<div class="item__info">
								<img :src="apt.img" :alt="apt.aptName" class="info__image" />
								<div class="info__desc">
									<p class="desc__price">
										매매 {{ apt.recentPrice | convertAptPrice }}
									</p>
									<h1 class="desc__title">아파트 · {{ apt.aptName }}</h1>
									<p class="desc__sub-desc">건축연도: {{ apt.buildYear }}년</p>
									<p class="desc__sub-desc">
										{{ apt.gugunName }} {{ apt.dongName }}
									</p>
									<div class="desc__badges">
										<p class="badges__confirm-status">확인매물 21.11.09.</p>
										<p
											class="badges__lowest-price"
											v-if="
												getLowestPrice !== getHighestPrice &&
												apt.recentPrice === getLowestPrice
											"
										>
											최저가 검색 매물
										</p>
										<p
											class="badges__highest-price"
											v-if="
												getLowestPrice !== getHighestPrice &&
												apt.recentPrice === getHighestPrice
											"
										>
											최고가 검색 매물
										</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div v-else key="app-list" class="content_no-list">
						<AIcon type="home" />
						<h1>검색된 결과가 없습니다.</h1>
					</div>
				</div>
				<div class="content__detail" v-else>
					<div class="detail__image">
						<img :src="selectedItem.img" :alt="selectedItem.aptName" />
					</div>
					<div class="detail__header">
						<h1 class="header__apt-name">{{ selectedItem.aptName }}</h1>
						<p class="header__buildYear">
							건축연도: {{ selectedItem.buildYear }}년
						</p>
					</div>
					<div class="detail__main">
						<p class="main__price">
							매매 {{ selectedItem.recentPrice | convertAptPrice }}
						</p>
						<p class="main__address">
							{{ selectedItem.sidoName }} {{ selectedItem.gugunName }}
							{{ selectedItem.dongName }} {{ selectedItem.jibun }}
						</p>
					</div>
					<div class="detail__ad">
						<Advertisement />
					</div>
				</div>
			</div>
		</div>
		<div class="main__map">
			<KakaoMap />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import KakaoMap from '@/components/search/KakaoMap.vue';
import Advertisement from '@/components/search/Advertisement.vue';

export default {
	components: {
		KakaoMap,
		Advertisement,
	},
	data() {
		return {
			selectedItem: {},
			isSelected: false,
		};
	},
	computed: {
		...mapGetters('searchStore', [
			'getAptList',
			'getLowestPrice',
			'getHighestPrice',
		]),
	},
	filters: {
		convertAptPrice(price) {
			const _price = price.trim();

			if (_price.length <= 5) {
				const thousand = price.replace(',', '');

				return thousand;
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
	methods: {
		selectItem(itemObject) {
			this.isSelected = true;
			this.selectedItem = itemObject;
		},
		backToItemList() {
			this.isSelected = false;
			this.selectedItem = {};
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/mapMain.scss';
</style>
