<template>
	<div class="application-ad-container">
		<div class="application-ad-container__inner">
			<div class="application-ad-container__image">
				<img src="@/images/download_application.png" alt="오늘의 부동산 앱" />
			</div>
			<div class="application-ad-container__links">
				<h1 class="links__title">
					<strong>오늘의 부동산앱</strong>을 다운받으세요!
				</h1>
				<nav class="links__links-group">
					<a
						href="https://play.google.com/"
						target="_blank"
						class="links-group__link-btn"
					>
						<img src="@/images/download_android.png" alt="구글 플레이스토어" />
					</a>
					<a
						href="https://www.apple.com/kr/app-store/"
						target="_blank"
						class="links-group__link-btn"
					>
						<img src="@/images/download_iOS.png" alt="앱 스토어" />
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './scss/applicationAd.scss';
</style>
