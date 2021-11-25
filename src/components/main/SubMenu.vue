<template>
	<div class="sub-menu-container">
		<div class="sub-menu-container__inner">
			<div class="sub-menu__item sub-menu__ad">
				<div class="item__header ad__header">분양 안내</div>
				<div class="item__contents ad__contents">
					<a href="https://www.i-park.com/cheongna/index" to="_blank">
						<img src="@/images/apt-ad-banner.jpg" alt="청라국제도시 아이파크" />
					</a>
				</div>
			</div>
			<div class="sub-menu__item sub-menu__news">
				<div class="item__header news__header">
					<div>뉴스</div>
					<div><RouterLink to="#">더보기</RouterLink></div>
				</div>
				<div class="item__contents news__contents">
					<ul>
						<li>들이 함께하는 홈트 노하우</li>
						<li>들이 함께하는 홈트 노하우</li>
						<li>들이 함께하는 홈트 노하우</li>
						<li>들이 함께하는 홈트 노하우</li>
						<li>들이 함께하는 홈트 노하우</li>
					</ul>
				</div>
			</div>
			<div class="sub-menu__item sub-menu__notice">
				<div class="item__header notice__header">
					<div>공지사항</div>
					<div><RouterLink to="#">더보기</RouterLink></div>
				</div>
				<div class="item__contents notice__contents">
					<ul>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import './scss/subMenu.scss';
</style>
