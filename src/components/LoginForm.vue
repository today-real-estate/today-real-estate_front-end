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
				type="text"
				id="login-password-input"
				placeholder="비밀번호 입력"
				v-model="password"
			/>
		</div>
		<div class="login-form__btn-group">
			<div class="btn-group__save-id">
				<input type="checkbox" id="save-id-check" />
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
export default {
	data() {
		return {
			userEmail: '',
			password: '',
		};
	},
	methods: {
		async submitLoginForm() {
			try {
				const loginUserData = {
					userEmail: this.userEmail,
					password: this.password,
				};

				await this.$store.dispatch('userStore/LOGIN', loginUserData);
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
$light-dark: #3a3a3a;
$light-grey: #979797;
$blue: #326cf9;

.login-form {
	max-width: 590px;
	margin: 0 auto;
	padding: 64px;
	border: 2px solid #f5f5f5;
	border-radius: 3px;

	.login-form__title {
		padding-bottom: 24px;
		border-bottom: 1.5px solid #f5f5f5;
		font-size: 30px;
		color: $light-dark;
		line-height: 48px;
	}

	.login-form__desc {
		padding: 32px 0 48px;
		font-size: 16px;
		color: $light-dark;
	}
	.login-form__input {
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
	}
	.login-form__btn-group {
		display: flex;
		justify-content: space-between;
		margin-bottom: 32px;

		.btn-group__save-id {
			display: flex;
			align-items: center;
			#save-id-check {
				margin-right: 4px;
				width: 16px;
				height: 16px;
				border: 1px solid $light-grey;
				border-radius: 3px;
			}
			label {
				color: $light-grey;
				font-size: 16px;
				font-weight: 300;
			}
		}
		.btn-group__nav {
			display: flex;
			align-items: center;
			a {
				color: $light-dark;
				transition: all 100ms ease-out 0s;

				&:hover {
					color: #000;
				}
			}
			.bar {
				margin-left: 8px;
				margin-right: 8px;
				width: 1px;
				height: 12px;
				background-color: rgb(223, 223, 223);
			}
		}
	}

	.login-form__submit-btn {
		width: 100%;
		min-width: 80px;
		padding: 0px 16px;
		height: 56px;
		border: 1px solid rgb(50, 108, 249);
		border-radius: 3px;
		background-color: rgba(50, 108, 249, 0.9);
		font-size: 16px;
		font-weight: 700;
		color: rgb(255, 255, 255);
		transition: all 150ms ease-out 0s;
		cursor: pointer;

		&:hover {
			border: 1px solid rgb(50, 108, 249);
			background-color: rgb(50, 108, 249);
		}
	}
}
</style>
