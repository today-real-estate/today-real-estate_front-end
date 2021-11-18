<template>
	<header id="header">
		<a href="/" class="header__title">오늘의 부동산</a>
		<nav class="header__nav">
			<RouterLink to="/" class="nav__link">지도</RouterLink>
			<RouterLink to="/" class="nav__link">분양</RouterLink>
			<RouterLink to="/" class="nav__link">분양 등록</RouterLink>
			<RouterLink to="/" class="nav__link">관심목록</RouterLink>
			<RouterLink to="/service/inquiry" class="nav__link">1:1 문의</RouterLink>
			<template v-if="!isLogin">
				<RouterLink to="/login" class="nav__link link--user">
					로그인 <span class="nav__bar"></span> 회원가입
				</RouterLink>
			</template>
			<template v-else>
				<div class="header__user">
					<ADropdown-button style="font-size: 16px">
						{{ getNickname }}
						<AMenu slot="overlay">
							<AMenu-item key="1">
								<RouterLink to="/account/inquiry-lise" style="font-size: 16px">
									내 정보
								</RouterLink>
							</AMenu-item>
							<AMenu-item key="2">
								<RouterLink
									to="/account/inquiry-list?page=1"
									style="font-size: 16px"
								>
									1:1 문의 내역
								</RouterLink>
							</AMenu-item>
							<AMenu-item key="3">
								<button
									@click="clickLogout"
									style="
										border: none;
										background-color: transparent;
										font-size: 16px;
										cursor: pointer;
									"
								>
									로그아웃
								</button>
							</AMenu-item>
						</AMenu>
						<AIcon slot="icon" type="user" />
					</ADropdown-button>
				</div>
			</template>
		</nav>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
import { clearAllCookies } from '@/utils/cookies';

export default {
	computed: {
		...mapGetters('userStore', ['getNickname', 'isLogin']),
	},
	methods: {
		clickLogout() {
			this.$store.dispatch('userStore/LOGOUT');
			clearAllCookies();
			this.$router.history.current.fullPath === '/'
				? this.$router.go()
				: this.$router.push('/');
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/header.scss';
</style>
