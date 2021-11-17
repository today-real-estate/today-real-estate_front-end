<template>
	<div class="service-header">
		<h1 class="service-header__title">문의하기</h1>
		<ul class="service-header__nav">
			<li class="nav__link">
				<RouterLink to="">자주 묻는 질문</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">1:1 문의</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">공지사항</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$light-dark: #3a3a3a;

.service-header {
	width: 1100px;
	margin: 0 auto;

	.service-header__title {
		padding: 10px 0;
		font-size: 36px;
		font-weight: 400;
		text-align: center;
	}
	.service-header__nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 48px;
		margin-bottom: 0;
		border-bottom: 1px solid #cacaca;
		font-size: 18px;
		text-align: center;

		.nav__link {
			width: 200px;
			margin: 0 auto;
		}

		a {
			color: $light-dark;
			text-align: center;
		}
	}
}
</style>
