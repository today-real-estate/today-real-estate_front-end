<template>
	<form class="login-form" @submit.prevent="submitLoginForm">
		<h1 class="login-form__title">로그인</h1>
		<h2 class="login-form__desc">
			오늘의 부동산 서비스 이용을 위해 로그인해주세요.
		</h2>
		<div class="login-form__input">
			<label for="login-userEmail-input">아이디</label>
			<input
				type="text"
				id="login-userEmail-input"
				placeholder="이메일 주소 입력"
				v-model="userEmail"
			/>
		</div>
		<div class="login-form__input">
			<label for="login-password-input">비밀번호</label>
			<input
				type="password"
				id="login-password-input"
				placeholder="비밀번호 입력"
				v-model="password"
			/>
		</div>
		<div class="login-form__btn-group">
			<div class="btn-group__save-id">
				<input type="checkbox" id="save-id-check" v-model="saveIdStatus" />
				<label for="save-id-check">아이디 저장</label>
			</div>
			<div class="btn-group__nav">
				<RouterLink to="/signup">회원가입</RouterLink>
				<span class="bar"></span>
				<RouterLink to="#">아이디 찾기</RouterLink>
				<span class="bar"></span>
				<RouterLink to="#">비밀번호 재설정</RouterLink>
			</div>
		</div>
		<button type="submit" class="login-form__submit-btn">로그인</button>
	</form>
</template>

<script>
import {
	saveUserEmailToCookie,
	getUserEmailFromCookie,
	deleteCookie,
} from '@/utils/cookies';
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			userEmail: getUserEmailFromCookie() || '',
			password: '',
			saveIdStatus: getUserEmailFromCookie() && true,
		};
	},
	methods: {
		async submitLoginForm() {
			try {
				const loginUserData = {
					userEmail: this.userEmail,
					password: this.password,
				};

				this.saveIdStatus
					? saveUserEmailToCookie(this.userEmail)
					: deleteCookie('userEmail');
				await this.$store.dispatch('userStore/LOGIN', loginUserData);

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">로그인 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});

				this.$router.push('/');
			} catch (error) {
				console.log(error);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.userEmail = '';
			this.password = '';
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/LoginForm.scss';
</style>
