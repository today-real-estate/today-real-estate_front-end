<template>
	<div class="list__apt">
		<div class="apt__images">
			<template v-if="isLogin">
				<AIcon
					v-if="apt.likedStatus"
					@click="removeLikedItem(index, apt.aptCode)"
					type="heart"
					theme="filled"
					style="color: #f6685e"
				/>
				<AIcon
					v-else
					@click="addLikedItem(index, apt.aptCode)"
					type="heart"
					style="color: #f6685e"
				/>
			</template>
			<img :src="apt.img" :alt="apt.aptName" />
		</div>
		<div class="apt__apt-info" @click="linkSearchPageWithData(apt)">
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
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { postLikedItem, deleteLikedItem } from '@/api/user';

export default {
	props: {
		apt: {
			type: Object,
			default: () => ({}),
		},
		index: {
			type: Number,
		},
	},
	computed: {
		...mapGetters('userStore', ['isLogin', 'getId']),
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
	created() {
		const userData = {
			userId: this.getId,
		};

		this.GET_LIKED_APT_CODES(userData);
	},
	methods: {
		...mapMutations('searchStore', ['SELECT_ITEM', 'ON_LIKED', 'OFF_LIKED']),
		...mapActions('searchStore', ['GET_APT_LIST_BY_SEARCH_WITH_AUTH']),
		...mapActions('userStore', ['ADD_LIKED_APT_CODES', 'GET_LIKED_APT_CODES']),
		async addLikedItem(index, aptCode) {
			const aptData = {
				userId: this.getId,
				aptCode: aptCode,
			};

			this.ON_LIKED(index);
			await postLikedItem(aptData);
		},
		async removeLikedItem(index, aptCode) {
			const aptData = {
				userId: this.getId,
				aptCode: aptCode,
			};

			this.OFF_LIKED(index);
			await deleteLikedItem(aptData);
		},
		async linkSearchPageWithData(apt) {
			try {
				const recentSearchData = {
					userId: this.getId,
					dongName: apt.dongName,
				};

				await this.GET_APT_LIST_BY_SEARCH_WITH_AUTH(recentSearchData);
				this.SELECT_ITEM(apt);
				this.$router.push('/search');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/likedItem.scss';
</style>
