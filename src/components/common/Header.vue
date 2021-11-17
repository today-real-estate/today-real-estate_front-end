<template>
	<header id="header">
		<a href="/" class="header__title">오늘의 부동산</a>
		<nav class="header__nav">
			<RouterLink to="/" class="nav__link">지도</RouterLink>
			<RouterLink to="/" class="nav__link">분양</RouterLink>
			<RouterLink to="/" class="nav__link">분양 등록</RouterLink>
			<RouterLink to="/" class="nav__link">관심목록</RouterLink>
			<RouterLink to="/login" class="nav__link link--user">
				로그인 <span class="nav__bar"></span> 회원가입
			</RouterLink>
			<!-- <div></div> -->
		</nav>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	height: 80px;
	border-bottom: 1px solid transparent;
	padding: 0 30px;
	// background-color: transparent;
	background-image: linear-gradient(
		134deg,
		rgb(19, 183, 207) -5%,
		rgb(54, 91, 180) 56%,
		rgb(54, 91, 180) 56%
	);

	.header__title {
		font-size: 26px;
		font-weight: 600;
		color: #fff;
	}
	.header__nav {
		display: flex;
		align-items: center;

		.nav__link {
			font-size: 16px;
			color: #f3f3f3;
			margin-left: 40px;
			transition: all 0.3;

			&:hover {
				font-weight: 600;
				color: #fff;
			}

			&.link--user {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 40px;
				padding: 0px 20px;
				border: 1px solid rgb(223, 223, 223);
				border-radius: 3px;
				font-size: 14px;
				font-weight: 700;
				line-height: 24px;
				color: #f3f3f3;
				transition: all 150ms ease-out 0s;

				&:hover {
					background-color: rgb(255, 255, 255, 0.2);
					color: #fff;
				}

				.nav__bar {
					display: block;
					position: relative;
					top: 1px;
					margin: 0px 14px;
					width: 1px;
					height: 14px;
					background-color: rgb(223, 223, 223);
				}
			}
		}
	}
}
</style>
