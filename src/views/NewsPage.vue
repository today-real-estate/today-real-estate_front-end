<template>
	<div class="news-container">
		<div class="news-container__inner">
			<div class="news__header">
				<h1>오늘의 부동산 뉴스</h1>
			</div>
			<div class="news__main">
				<ul class="contents__list">
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
					<li class="list__item">
						<div class="item__image">
							<img src="@/images/apt-ad-banner.jpg" alt="" />
						</div>
						<div class="item__contents">
							<a href="" class="contents__title">
								5000억 송현동 부지와 바꿀 삼성동 서울의료원 땅 다음달 확정
							</a>
							<p class="contents__text">
								[서울시, 삼성동 서울의료원 남측 부지 특별계획구역 변경] 약
								5000억원 규모로 추정되는 종로구 송현동 대한항공 부지와 맞바꿀
								강남구 삼성동 옛 서울의료원 남측 부지의 구체적인 면적이
								...머니투데이
							</p>
							<span class="contents__date">2021.11.25</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="news__pagination">
				<APagination v-model="current" :total="50" show-less-items />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			current: 1,
		};
	},
};
</script>

<style lang="scss" scoped>
.news-container {
	background-color: #f9f9f9;
	padding: 100px 0;

	.news-container__inner {
		max-width: 1100px;
		min-width: 900px;
		margin: 0 auto;
		padding: 0 10px;

		.news__header {
			margin-bottom: 50px;

			h1 {
				margin-bottom: 0;
				padding: 10px;
				border-bottom: 3px solid #e8e8e8;
				border-radius: 3px;
				font-size: 36px;
				font-weight: 500;
			}
		}

		.news__main {
			.contents__list {
				padding: 0 12px;

				.list__item {
					display: flex;
					height: 130px;
					margin-bottom: 14px;

					.item__image {
						margin-right: 18px;

						img {
							width: 240px;
							border-radius: 3px;
						}
					}
					.item__contents {
						.contents__title {
							font-size: 18px;
							font-weight: 500;
							color: #019cdc;
						}
						.contents__text {
							font-weight: 300;
							margin-bottom: 8px;
						}
						.contents__date {
							font-size: 13px;
							font-weight: 300;
						}
					}
				}
			}
		}

		.news__pagination {
			margin-top: 80px;
			text-align: center;
		}
	}
}
</style>
