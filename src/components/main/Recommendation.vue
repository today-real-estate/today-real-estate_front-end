<template>
	<div class="recommendation-container">
		<div class="recommendation-container__inner">
			<div class="recommendation__header">
				<div class="header__title">
					<h1><strong>용산역</strong> 추천매물</h1>
					<span>최근 검색조건으로 추천된 매물입니다.</span>
				</div>
				<RouterLink to="#" class="header__more-btn">
					더 많은 방 보기<AIcon type="right" />
				</RouterLink>
			</div>
			<div class="recommendation__list">
				<RouterLink to="#" class="list__apt">
					<img src="@/assets/sample-apt.jpg" alt="" class="apt__images" />
					<div class="apt__apt-info">
						<h2 class="apt-info__name">두산베어스타워</h2>
						<h1 class="apt-info__price">매매 5억 5500</h1>
						<p class="apt-info__build-year">건축연도: 1998년</p>
						<p class="apt-info__address">서울특별시 동대문구 용두동 138-41</p>
					</div>
				</RouterLink>
				<RouterLink to="#" class="list__apt">
					<img src="@/assets/sample-apt.jpg" alt="" class="apt__images" />
					<div class="apt__apt-info">
						<h2 class="apt-info__name">두산베어스타워</h2>
						<h1 class="apt-info__price">매매 5억 5500</h1>
						<p class="apt-info__build-year">건축연도: 1998년</p>
						<p class="apt-info__address">서울특별시 동대문구 용두동 138-41</p>
					</div>
				</RouterLink>
				<RouterLink to="#" class="list__apt">
					<img src="@/assets/sample-apt.jpg" alt="" class="apt__images" />
					<div class="apt__apt-info">
						<h2 class="apt-info__name">두산베어스타워</h2>
						<h1 class="apt-info__price">매매 5억 5500</h1>
						<p class="apt-info__build-year">건축연도: 1998년</p>
						<p class="apt-info__address">서울특별시 동대문구 용두동 138-41</p>
					</div>
				</RouterLink>
				<RouterLink to="#" class="list__apt">
					<img src="@/assets/sample-apt.jpg" alt="" class="apt__images" />
					<div class="apt__apt-info">
						<h2 class="apt-info__name">두산베어스타워</h2>
						<h1 class="apt-info__price">매매 5억 5500</h1>
						<p class="apt-info__build-year">건축연도: 1998년</p>
						<p class="apt-info__address">서울특별시 동대문구 용두동 138-41</p>
					</div>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './scss/recommendation.scss';
</style>
