<template>
	<li class="list__item">
		<div class="item__info">
			<div class="info__image">
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
			<div class="info__desc" @click="SELECT_ITEM(apt)">
				<p class="desc__price">매매 {{ apt.recentPrice | convertAptPrice }}</p>
				<h1 class="desc__title">아파트 · {{ apt.aptName }}</h1>
				<p class="desc__sub-desc">건축연도: {{ apt.buildYear }}년</p>
				<p class="desc__sub-desc">{{ apt.gugunName }} {{ apt.dongName }}</p>
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
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { postLikedItem, deleteLikedItem } from '@/api/user';

export default {
	props: {
		apt: {
			type: Object,
			default: () => ({}),
		},
		liked: {
			typs: Boolean,
			default: false,
		},
		index: {
			type: Number,
		},
	},
	data() {
		return {};
	},
	computed: {
		...mapState('userStore', ['likedAptCodes']),
		...mapGetters('searchStore', [
			'getLowestPrice',
			'getHighestPrice',
			'getSelectedItem',
		]),
		...mapGetters('userStore', ['isLogin', 'getId']),
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
		...mapMutations('searchStore', ['SELECT_ITEM', 'ON_LIKED', 'OFF_LIKED']),
		...mapActions('userStore', ['ADD_LIKED_APT_CODES']),
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
	},
};
</script>

<style lang="scss" scoped>
$blue-color: #326cf9;
$light-blue-color: #adc4fc;
$orange-color: #ff9800;
$light-orange-color: #ffd599;
$light-dark-color: #3a3a3a;
$light-grey-color: #979797;

.list__item {
	display: flex;
	border-bottom: 1px solid rgb(231, 231, 231);
	cursor: pointer;

	.item__info {
		flex-grow: 1;
		display: flex;
		align-items: flex-start;
		padding: 16px 15px;
		background-color: rgb(255, 255, 255);
		user-select: none;
		transition: all 150ms ease-out 0s;

		&:hover {
			background-color: #fff8e6;

			.info__image {
				img {
					transform: scale(1.15);
				}
			}
		}

		.info__image {
			overflow: hidden;
			flex: 0 0 auto;
			position: relative;
			width: 140px;
			height: 140px;
			min-height: 140px;
			border-radius: 3px;

			i {
				position: absolute;
				margin: 8px;
				right: 0;
				z-index: 10;
				font-size: 26px;
				color: #fff;
				transition: all 0.15s;

				&:hover {
					color: #f44336;
				}
			}
			img {
				width: 140px;
				height: 140px;
				min-height: 140px;
				border-radius: 3px;
				transition: all 150ms ease-out 0s;
			}
		}

		.info__desc {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			width: 0px;
			height: 140px;
			padding-left: 20px;
			text-overflow: ellipsis;

			.desc__price {
				height: 27px;
				margin-bottom: 4px;
				font-size: 20px;
				font-weight: 600;
				line-height: 27px;
				color: rgb(34, 34, 34);
				text-overflow: ellipsis;
			}
			.desc__title {
				overflow: hidden;
				margin-bottom: 8px;
				font-size: 14px;
				font-weight: 400;
				line-height: 19px;
				color: rgb(34, 34, 34);
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.desc__sub-desc {
				overflow: hidden;
				margin-bottom: 0;
				font-size: 14px;
				font-weight: 200;
				line-height: 20px;
				color: rgb(34, 34, 34);
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.desc__badges {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				margin-top: auto;

				.badges__confirm-status {
					width: 100px;
					height: 20px;
					margin-right: 5px;
					margin-bottom: 0;
					padding: 0px 5px;
					border: 1px solid $light-orange-color;
					border-radius: 3px;
					background-color: rgb(255, 255, 255);
					font-size: 11px;
					font-weight: 300;
					line-height: 18px;
					color: $orange-color;
					text-align: center;
					letter-spacing: -0.2px;
				}
				.badges__lowest-price,
				.badges__highest-price {
					height: 20px;
					margin-bottom: 0;
					padding: 0px 5px;
					border-radius: 2px;
					background-color: rgb(255, 255, 255);
					font-size: 11px;
					font-weight: 400;
					line-height: 18px;
					text-align: center;
					letter-spacing: -0.2px;
				}
				.badges__lowest-price {
					border: 1px solid $light-blue-color;
					color: $blue-color;
				}
				.badges__highest-price {
					border: 1px solid rgb(255, 202, 199);
					color: rgb(244, 98, 91);
				}
			}
		}
	}
}
</style>
