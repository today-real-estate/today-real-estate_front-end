<template>
	<div class="map__main">
		<div class="main__side-bar">
			<div class="side-bar__header">
				<span v-if="!isSelected">검색된 아파트 {{ getAptList.length }}개</span>
				<button v-else @click="BACK_TO_ITEM_LIST" class="header__back-btn">
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
							@click="SELECT_ITEM(apt)"
						>
							<div class="item__info">
								<div class="info__image">
									<!-- <AIcon v-if=" " type="heart" @click="addLiked" />
									<AIcon
										type="heart"
										@click="addLiked"
										theme="filled"
										style="color: #f44336"
									/> -->
									<img :src="apt.img" :alt="apt.aptName" />
								</div>
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
				<div v-else class="content__detail">
					<div class="detail__image">
						<img
							v-show="!roadViewStatus"
							:src="getSelectedItem.img"
							:alt="getSelectedItem.aptName"
						/>
						<div v-show="roadViewStatus" id="roadview"></div>
						<button
							v-if="!roadViewStatus"
							class="image__road-view-btn image__road-view-btn--on"
							@click="OnRoadView(getSelectedItem.lat, getSelectedItem.lng)"
						>
							<a-icon type="environment" /> 로드뷰 보기
						</button>
						<button
							v-else
							class="image__road-view-btn image__road-view-btn--off"
							@click="OffRoadView"
						>
							<AIcon type="undo" /> 사진으로 되돌아가기
						</button>
					</div>
					<div class="detail__header">
						<h1 class="header__apt-name">{{ getSelectedItem.aptName }}</h1>
						<p class="header__buildYear">
							건축연도: {{ getSelectedItem.buildYear }}년
						</p>
					</div>
					<div class="detail__main">
						<p class="main__price">
							매매 {{ getSelectedItem.recentPrice | convertAptPrice }}
						</p>
						<p class="main__address">
							{{ getSelectedItem.sidoName }} {{ getSelectedItem.gugunName }}
							{{ getSelectedItem.dongName }} {{ getSelectedItem.jibun }}
						</p>
					</div>
					<div class="detail__ad">
						<Advertisement />
					</div>
				</div>
			</div>
		</div>
		<div class="main__map">
			<KakaoMap ref="kakaoMap" />
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import KakaoMap from '@/components/search/KakaoMap.vue';
import Advertisement from '@/components/search/Advertisement.vue';

export default {
	components: {
		KakaoMap,
		Advertisement,
	},
	data() {
		return {
			filled: false,
		};
	},
	computed: {
		...mapState('searchStore', ['isSelected', 'roadViewStatus']),
		...mapGetters('searchStore', [
			'getAptList',
			'getLowestPrice',
			'getHighestPrice',
			'getSelectedItem',
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
	// beforeRouteLeave(to, from, next) {
	// 	next((vm) => {
	// 		vm.BACK_TO_ITEM_LIST();
	// 	});
	// },
	methods: {
		...mapMutations('searchStore', [
			'SELECT_ITEM',
			'BACK_TO_ITEM_LIST',
			'ON_ROAD_VIEW',
			'OFF_ROAD_VIEW',
		]),
		initKakaoRoadview(latitude, longitude) {
			const roadviewContainer = document.getElementById('roadview');
			const roadview = new kakao.maps.Roadview(roadviewContainer);
			const roadviewClient = new kakao.maps.RoadviewClient();
			const position = new kakao.maps.LatLng(latitude, longitude);

			roadviewClient.getNearestPanoId(position, 50, function (panoId) {
				roadview.setPanoId(panoId, position);
			});
		},
		OnRoadView(latitude, longitude) {
			if (window.kakao && window.kakao.maps) {
				this.initKakaoRoadview(latitude, longitude);
			} else {
				const script = document.createElement('script');

				/* global kakao */
				script.onload = () => kakao.maps.load(this.initKakaoRoadview);
				script.src =
					'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0f4c22d8cdfcb5038140db4f10d9fdcd';
				document.head.appendChild(script);
			}

			this.ON_ROAD_VIEW();
		},
		OffRoadView() {
			this.OFF_ROAD_VIEW();
		},
		addLiked() {},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/mapMain.scss';
</style>
