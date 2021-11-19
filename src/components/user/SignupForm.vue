<template>
	<form class="signup-form" @submit.prevent="submitSignupForm">
		<h1 class="signup-form__title">회원정보 입력</h1>
		<h2 class="signup-form__desc">
			오늘의 부동산 서비스 이용을 위해 정보를 입력해주세요.
		</h2>
		<div class="signup-form__input">
			<label for="signup-user-email-input">아이디</label>
			<div class="signup-form__input__main">
				<input
					type="text"
					id="signup-user-email-input"
					placeholder="이메일 주소 입력"
					v-model="userEmail"
				/>
				<button class="user-email-auth-btn">인증</button>
			</div>
		</div>
		<div class="signup-form__input">
			<label for="signup-user-name-input">이름</label>
			<input
				type="text"
				id="signup-user-name-input"
				placeholder="이름 입력"
				v-model="userName"
			/>
		</div>
		<div class="signup-form__input">
			<label for="signup-nickname-input">닉네임</label>
			<div class="signup-form__input__main">
				<input
					type="text"
					id="signup-nickname-input"
					placeholder="한글 또는 영문만 가능"
					v-model="nickname"
				/>
				<button class="duplication-check-btn">중복 검사</button>
			</div>
		</div>
		<div class="signup-form__input">
			<label for="signup-password-input">비밀번호</label>
			<input
				type="password"
				id="signup-password-input"
				placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
				v-model="password"
			/>
			<input
				type="password"
				id="signup-password-input--check"
				placeholder="비밀번호 확인"
				v-model="passwordConfirm"
			/>
		</div>
		<button type="submit" class="signup-form__submit-btn">확인</button>
	</form>
</template>

<script>
import { registerUser } from '@/api/auth';

export default {
	data() {
		return {
			userEmail: '',
			userName: '',
			nickname: '',
			password: '',
			passwordConfirm: '',
		};
	},
	methods: {
		async submitSignupForm() {
			try {
				const signupUserData = {
					userEmail: this.userEmail,
					userName: this.userName,
					nickname: this.nickname,
					password: this.password,
				};
				const Swal = require('sweetalert2');

				await registerUser(signupUserData);
				this.$router.push('/login');
				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">회원가입 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				console.log('[회원가입 실패]', error);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.userEmail = '';
			this.userName = '';
			this.nickname = '';
			this.password = '';
			this.passwordConfirm = '';
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/signupForm.scss';
</style>
