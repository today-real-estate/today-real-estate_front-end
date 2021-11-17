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
				type="text"
				id="signup-password-input"
				placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
				v-model="password"
			/>
			<input
				type="text"
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
					password: this.password,
					nickname: this.nickname,
				};
				const { data } = await registerUser(signupUserData);

				console.log('로그인 성공');
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
$light-dark: #3a3a3a;
$normal-grey: #979797;
$lignt-gray: #f5f5f5;

.signup-form {
	max-width: 590px;
	margin: 0 auto;
	padding: 64px;
	border: 2px solid $lignt-gray;
	border-radius: 3px;

	.signup-form__title {
		padding-bottom: 24px;
		border-bottom: 1.5px solid $lignt-gray;
		font-size: 30px;
		color: $light-dark;
		line-height: 48px;
	}

	.signup-form__desc {
		padding: 32px 0 48px;
		font-size: 16px;
		color: $light-dark;
	}
	.signup-form__input {
		display: flex;
		flex-direction: column;
		margin-bottom: 24px;

		label {
			margin-bottom: 8px;
			font-size: 16px;
			color: $light-dark;
		}
		input {
			max-width: 460px;
			height: 44px;
			padding: 10px 16px;
			border: 1px solid rgb(237, 237, 237);
			border-radius: 3px;
			background-color: rgb(255, 255, 255);
			color: rgb(34, 34, 34);
			font-size: 16px;
			font-weight: 300;
			line-height: 24px;
			transition: all 150ms ease-out 0s;

			&:hover {
				outline: 1px solid rgba(50, 108, 249, 0.6);
			}
			&:focus {
				outline: 1.5px solid rgba(50, 108, 249, 0.9);
			}
		}

		.signup-form__input__main {
			display: flex;
			justify-content: space-between;

			#signup-user-email-input,
			#signup-nickname-input {
				width: 100%;
				margin-right: 5px;
			}

			.user-email-auth-btn,
			.duplication-check-btn {
				background-color: #f3f3f3;
				border: 1.5px solid #ededed;
				border-radius: 3px;
				color: $light-dark;
				cursor: pointer;
			}
			.user-email-auth-btn {
				width: 65px;
			}
			.duplication-check-btn {
				width: 100px;
			}
		}
		#signup-password-input {
			margin-bottom: 8px;
		}
	}

	.signup-form__submit-btn {
		width: 100%;
		min-width: 80px;
		margin-top: 32px;
		padding: 0px 16px;
		height: 56px;
		border: 1px solid rgb(50, 108, 249);
		border-radius: 3px;
		background-color: rgba(50, 108, 249, 0.9);
		font-size: 16px;
		font-weight: 700;
		color: #fff;
		transition: all 150ms ease-out 0s;
		cursor: pointer;

		&:hover {
			border: 1px solid rgb(50, 108, 249);
			background-color: rgb(50, 108, 249);
		}
	}
}
</style>
