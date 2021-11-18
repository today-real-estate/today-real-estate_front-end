<template>
	<div class="edit-container">
		<div class="edit-form">
			<div class="edit-form__item item--profile-image">
				<AAvatar :size="64" icon="user" />
			</div>
			<div class="edit-form__input">
				<label for="edit-form__email-input">아이디</label>
				<input type="text" id="edit-form__email-input" placeholder="이메일" />
			</div>
			<div class="edit-form__input">
				<label for="edit-form__email-input">이름</label>
				<div class="edit-form__input__main">
					<input type="text" id="edit-form__email-input" placeholder="이름" />
					<button class="user-email-auth-btn">수정</button>
				</div>
			</div>
			<div class="edit-form__input">
				<label for="edit-form__email-input">닉네임</label>
				<div class="edit-form__input__main">
					<input type="text" id="edit-form__email-input" placeholder="닉네임" />
					<button class="user-email-auth-btn">수정</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$light-dark: #3a3a3a;
$light-grey: #979797;
$blue: #326cf9;

.edit-form {
	display: flex;
	flex-direction: column;
	max-width: 608px;
	margin: 80px auto 0;
	padding: 64px;
	border: 2px solid #f5f5f5;

	.edit-form__item {
		display: flex;
		flex-direction: column;

		&.item--profile-image {
			margin: 0 auto 64px;
		}
	}

	.edit-form__input {
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

		.edit-form__input__main {
			display: flex;
			justify-content: space-between;

			#edit-form__email-input {
				width: 100%;
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
			margin-bottom: 10px;
		}
	}
}
</style>
