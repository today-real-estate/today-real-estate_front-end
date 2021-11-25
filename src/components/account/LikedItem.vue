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
.list__apt {
	overflow: hidden;
	width: 240px;
	margin: 0 6px 26px 6px;
	cursor: pointer;

	&:hover {
		.apt__images {
			img {
				transform: scale(1.15);
			}
		}
	}

	.apt__images {
		width: 260px;
		height: 180px;
		border-radius: 3px;
		overflow: hidden;

		img {
			width: 260px;
			height: 180px;
			border-radius: 3px;
			transition: all 150ms ease-out 0s;
		}
	}

	.apt__apt-info {
		margin-top: 20px;

		.apt-info__name {
			display: flex;
			align-items: center;
			margin-bottom: 4px;
			font-size: 14px;
			font-weight: 300;
			line-height: 19px;
			color: rgb(34, 34, 34);
		}
		.apt-info__price {
			margin-bottom: 4px;
			font-size: 20px;
			line-height: 29px;
			color: rgb(34, 34, 34);
		}
		.apt-info__build-year,
		.apt-info__address {
			overflow: hidden;
			margin-bottom: 0;
			font-size: 14px;
			font-weight: 200;
			line-height: 20px;
			color: rgb(34, 34, 34);
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
