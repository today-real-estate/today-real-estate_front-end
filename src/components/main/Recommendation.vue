<template>
	<div class="recommendation-container">
		<div class="recommendation-container__inner">
			<template v-if="isLogin">
				<div class="recommendation__header">
					<div class="header__title">
						<h1>
							<strong>{{ getRecentSearch }}</strong> 추천매물
						</h1>
						<span>최근 검색조건으로 추천된 매물입니다.</span>
					</div>
					<button class="header__more-btn" @click="moveSearchPageWithData">
						더 많은 방 보기<AIcon type="right" />
					</button>
				</div>
			</template>
			<template v-else>
				<div class="recommendation__header">
					<div class="header__title">
						<h1>추천매물</h1>
						<span>우리 부동산에서 엄선한 추천매물입니다.</span>
					</div>
					<button class="header__more-btn" @click="moveSearchPage">
						더 많은 방 보기<AIcon type="right" />
					</button>
				</div>
			</template>
			<template v-if="loading">
				<div class="skeletons">
					<div class="recommendation__loading-spin">
						<ASpin size="large" tip="Loading..." />
					</div>
					<div class="skeletons__item">
						<div class="skeletons__images"></div>
						<div class="skeletons__name"></div>
						<div class="skeletons__price"></div>
						<div class="skeletons__desc"></div>
					</div>
					<div class="skeletons__item">
						<div class="skeletons__images"></div>
						<div class="skeletons__name"></div>
						<div class="skeletons__price"></div>
						<div class="skeletons__desc"></div>
					</div>
					<div class="skeletons__item">
						<div class="skeletons__images"></div>
						<div class="skeletons__name"></div>
						<div class="skeletons__price"></div>
						<div class="skeletons__desc"></div>
					</div>
					<div class="skeletons__item">
						<div class="skeletons__images"></div>
						<div class="skeletons__name"></div>
						<div class="skeletons__price"></div>
						<div class="skeletons__desc"></div>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="recommendation__list" v-if="recommendations.length !== 0">
					<div
						class="list__apt"
						v-for="apt in recommendations"
						:key="apt.aptCode"
						@click="linkSearchPageWithData(apt)"
					>
						<div class="apt__images">
							<img :src="apt.img" :alt="apt.aptName" />
						</div>
						<div class="apt__apt-info">
							<h2 class="apt-info__name">{{ apt.aptName }}</h2>
							<h1 class="apt-info__price">
								{{ apt.recentPrice | convertAptPrice }}
							</h1>
							<p class="apt-info__build-year">건축연도: {{ apt.buildYear }}</p>
							<p class="apt-info__address">
								{{ apt.sidoName }} {{ apt.gugunName }} {{ apt.dongName }}
								{{ apt.jibun }}
							</p>
						</div>
					</div>
				</div>
				<div v-else class="recommendation__no-list">
					<AIcon type="home" />
					<h1>추천 매물이 없습니다.</h1>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { fetchRecommendations } from '@/api/search';

export default {
	data() {
		return {
			recommendations: [],
		};
	},
	computed: {
		...mapState('searchStore', ['loading']),
		...mapGetters('userStore', ['isLogin', 'getId', 'getRecentSearch']),
	},
	created() {
		this.getRecommendations();
	},
	methods: {
		...mapMutations('searchStore', [
			'SELECT_ITEM',
			'ON_LOADING',
			'OFF_LOADING',
		]),
		...mapActions('searchStore', [
			'GET_APT_LIST_BY_SEARCH',
			'GET_APT_LIST_BY_SEARCH_WITH_AUTH',
		]),
		async getRecommendations() {
			this.ON_LOADING();

			const recentSearchData = {
				dongName: this.getRecentSearch,
			};
			const { data } = await fetchRecommendations(recentSearchData);

			this.recommendations = data;
			this.OFF_LOADING();
		},
		async moveSearchPageWithData() {
			try {
				if (this.isLogin) {
					const recentSearchData = {
						userId: this.getId,
						dongName: this.getRecentSearch,
					};

					await this.GET_APT_LIST_BY_SEARCH_WITH_AUTH(recentSearchData);
				} else {
					const recentSearchData = {
						dongName: this.getRecentSearch,
					};

					await this.GET_APT_LIST_BY_SEARCH(recentSearchData);
				}

				this.$router.push('/search');
			} catch (error) {
				console.log(error);
			}
		},
		async linkSearchPageWithData(apt) {
			try {
				if (this.isLogin) {
					const recentSearchData = {
						userId: this.getId,
						dongName: apt.dongName,
					};

					await this.GET_APT_LIST_BY_SEARCH_WITH_AUTH(recentSearchData);
				} else {
					const recentSearchData = {
						dongName: apt.dongName,
					};

					await this.GET_APT_LIST_BY_SEARCH(recentSearchData);
				}

				this.SELECT_ITEM(apt);
				this.$router.push('/search');
			} catch (error) {
				console.log(error);
			}
		},
		moveSearchPage() {
			this.$router.push('/search');
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/recommendation.scss';
</style>
