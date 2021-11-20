<template>
	<div class="map-container">
		<div class="map__header">
			<div class="map__search">
				<form class="search__form">
					<input type="text" placeholder="검색하세요" />
				</form>
			</div>
			<div class="map__filters">
				<div class="filters__select">
					<select name="" id=""></select>
					<select name="" id=""></select>
				</div>
				<div class="filters__btns">
					<button>
						<a-icon type="control" />
					</button>
					<button>
						<a-icon type="sync" />
					</button>
				</div>
			</div>
		</div>
		<div class="map__main">
			<div class="main__side-bar">
				<div class="side-bar__header">
					<span>검색된 방 234567개</span>
				</div>
				<div class="side-bar__content">
					<ul class="content__list">
						<li class="list__item">
							<div class="item__info">
								<img
									src="@/assets/sample-apt.jpg"
									alt="sample"
									class="info__image"
								/>
								<div class="info__desc">
									<h1 class="desc__title">매매 2억 8300</h1>
									<p class="desc__type">투룸</p>
									<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
									<p class="desc__sub-desc">
										길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
									</p>
								</div>
							</div>
						</li>
						<li class="list__item">
							<div class="item__info">
								<img
									src="@/assets/sample-apt.jpg"
									alt="sample"
									class="info__image"
								/>
								<div class="info__desc">
									<h1 class="desc__title">매매 2억 8300</h1>
									<p class="desc__type">투룸</p>
									<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
									<p class="desc__sub-desc">
										길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
									</p>
								</div>
							</div>
						</li>
						<li class="list__item">
							<div class="item__info">
								<img
									src="@/assets/sample-apt.jpg"
									alt="sample"
									class="info__image"
								/>
								<div class="info__desc">
									<h1 class="desc__title">매매 2억 8300</h1>
									<p class="desc__type">투룸</p>
									<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
									<p class="desc__sub-desc">
										길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
									</p>
								</div>
							</div>
						</li>
						<li class="list__item">
							<div class="item__info">
								<img
									src="@/assets/sample-apt.jpg"
									alt="sample"
									class="info__image"
								/>
								<div class="info__desc">
									<h1 class="desc__title">매매 2억 8300</h1>
									<p class="desc__type">투룸</p>
									<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
									<p class="desc__sub-desc">
										길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
									</p>
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
	</div>
</template>

<script>
import KakaoMap from '@/components/search/KakaoMap.vue';

export default {
	components: {
		KakaoMap,
	},
};
</script>

<style lang="scss" scoped>
.map-container {
	width: 100%;

	.map__header {
		display: flex;
		flex: 0 0 auto;
		z-index: 30;
		width: 100%;
		height: 64px;
		border-bottom: 1px solid rgb(205, 205, 205);
		background-color: rgb(255, 255, 255);

		.map__search {
			display: flex;
			flex: 0 0 auto;
			align-items: center;
			position: relative;
			width: 400px;
			height: 100%;
			padding: 0px 20px;
			border-right: 1px solid rgb(231, 231, 231);

			.search__form {
				display: flex;
				flex-grow: 1;
				width: 0px;
				height: 36px;
				padding-left: 30px;
				padding-right: 20px;
				background: url('~@/assets/search-icon.svg') left center / 16px 16px
					no-repeat transparent;

				.form__icon {
					width: 15px;
				}

				input {
					width: 100%;
					height: 36px;
					padding: 0px;
					color: rgb(34, 34, 34);
					font-size: 15px;
					border: 0px;
					outline: none;
					background-color: transparent;
				}
			}
		}

		.map__filters {
			display: flex;
			flex-grow: 1;
			justify-content: space-between;
			align-items: center;
			width: 0px;
			height: 100%;
			padding: 0px 12px 0px 8px;

			.filters__select {
				display: flex;

				select {
					display: flex;
					flex-grow: 0;
					flex-shrink: 1;
					position: relative;
					z-index: 950;
					width: 220px;
					height: 34px;
					margin-right: 8px;
					border: 1px solid rgb(223, 223, 223);
					border-radius: 3px;
				}
			}

			.filters__btns {
				display: flex;

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 36px;
					height: 36px;
					margin-left: 8px;
					border: 1px solid rgb(223, 223, 223);
					border-radius: 3px;
					background-color: #fff;
					font-size: 18px;

					&:nth-child(1) {
						font-size: 24px;
					}
				}
			}
		}
	}
	.map__main {
		display: flex;
		flex-grow: 1;
		position: relative;
		width: 100%;
		height: 100%;

		.main__side-bar {
			flex: 0 0 auto;
			display: flex;
			flex-direction: column;
			width: 400px;
			height: 100%;
			border-right: 1px solid rgb(231, 231, 231);
			position: relative;
			overflow: hidden;

			.side-bar__header {
				display: flex;
				align-items: center;
				height: 56px;
				padding: 3px 4px 0px;
				border-bottom: 1px solid rgb(231, 231, 231);

				span {
					margin: 0px 14px;
					color: rgb(34, 34, 34);
					font-size: 16px;
					font-weight: 400;
				}
			}
			.side-bar__content {
				display: flex;
				flex-direction: column;

				.content__list {
					flex-grow: 1;
					width: 100%;

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

							.info__image {
								flex: 0 0 auto;
								width: 140px;
								height: 140px;
								min-height: 140px;
								position: relative;
							}

							.info__desc {
								flex-grow: 1;
								display: flex;
								flex-direction: column;
								width: 0px;
								height: 100%;
								padding-left: 20px;

								.desc__title {
									color: rgb(34, 34, 34);
									font-size: 18px;
									font-weight: 700;
									height: 27px;
									margin-bottom: 4px;
									line-height: 27px;
								}
								.desc__type {
									overflow: hidden;
									margin-bottom: 8px;
									font-size: 13px;
									font-weight: 400;
									line-height: 19px;
									color: rgb(34, 34, 34);
									text-overflow: ellipsis;
									white-space: nowrap;
								}
								.desc__sub-desc {
									overflow: hidden;
									width: 212px;
									font-size: 14px;
									font-weight: 300;
									line-height: 20px;
									color: rgb(34, 34, 34);
									text-overflow: ellipsis;
									white-space: nowrap;
								}
							}
						}
					}
				}
			}
		}
		.main__map {
			flex-grow: 1;
			position: relative;
			z-index: 10;
		}
	}
}
</style>
