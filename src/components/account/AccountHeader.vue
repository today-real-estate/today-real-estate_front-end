<template>
	<div class="account-header">
		<h1 class="account-header__title">마이페이지</h1>
		<ul class="account-header__nav">
			<li class="nav__link">
				<RouterLink to="">관심목록</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">1:1 문의</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">내 정보</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$light-dark: #3a3a3a;

.account-header {
	width: 1100px;
	margin: 0 auto;

	.account-header__title {
		padding: 10px 0;
		font-size: 36px;
		font-weight: 400;
		text-align: center;
	}
	.account-header__nav {
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
