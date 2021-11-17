<template>
	<div class="terms-form">
		<h1 class="terms-form__title">회원가입</h1>
		<h2 class="terms-form__desc">
			환영합니다! 다방 서비스 이용약관에 동의해주세요.
		</h2>
		<div class="terms-form__all-check-btn">
			<input
				type="checkbox"
				id="terms-all-check"
				v-model="allChecked"
				@click="checkAllTerms"
			/>
			<label for="terms-all-check">모두 동의합니다.</label>
		</div>
		<div class="terms-form__terms-group">
			<div class="terms-group__term">
				<div class="term__input">
					<input type="checkbox" id="term-age-check" v-model="ageTermStatus" />
					<label for="term-age-check"> [필수] 만 14세 이상입니다. </label>
				</div>
				<a href="#" target="_blank">
					<a-icon type="right" />
				</a>
			</div>
			<div class="terms-group__term">
				<div class="term__input">
					<input
						type="checkbox"
						id="term-service-check"
						v-model="serviceTermStatus"
					/>
					<label for="term-service-check">
						[필수] 오늘의 부동산 서비스 이용약관 동의
					</label>
				</div>
				<a href="#" target="_blank">
					<a-icon type="right" />
				</a>
			</div>
			<div class="terms-group__term">
				<div class="term__input">
					<input
						type="checkbox"
						id="term-info-check"
						v-model="infoTermStatus"
					/>
					<label for="term-info-check">
						[필수] 개인정보 수집 및 이용 동의
					</label>
				</div>
				<a href="#" target="_blank">
					<AIcon type="right" />
				</a>
			</div>
		</div>
		<div class="terms-form__desc">
			<p>만 14세 이상 회원 가입 가능합니다.</p>
			<p>
				해당 내용은
				<a href="#" target="_blank">이용약관 및 정책</a>
				에서도 확인이 가능합니다.
			</p>
		</div>
		<button
			class="terms-form__submit-btn"
			@click="submitTerms"
			:disabled="!isCheckedTerms"
		>
			동의하고 진행하기
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allChecked: false,
			ageTermStatus: false,
			serviceTermStatus: false,
			infoTermStatus: false,
		};
	},
	computed: {
		isCheckedTerms() {
			return this.ageTermStatus && this.serviceTermStatus && this.infoTermStatus
				? true
				: false;
		},
	},
	methods: {
		checkAllTerms() {
			if (this.allChecked) {
				this.ageTermStatus = false;
				this.serviceTermStatus = false;
				this.infoTermStatus = false;
			} else {
				this.ageTermStatus = true;
				this.serviceTermStatus = true;
				this.infoTermStatus = true;
			}
		},
		submitTerms() {
			this.$emit('submitTerms');
		},
	},
};
</script>

<style lang="scss" scoped>
$light-dark: #3a3a3a;
$light-grey: #979797;

.terms-form {
	max-width: 590px;
	margin: 0 auto;
	padding: 64px;
	border: 2px solid #f5f5f5;
	border-radius: 3px;

	.terms-form__title {
		padding-bottom: 24px;
		border-bottom: 1.5px solid #f5f5f5;
		font-size: 30px;
		color: $light-dark;
		line-height: 48px;
	}
	.terms-form__desc {
		padding: 32px 0 48px;
		font-size: 16px;
		color: $light-dark;
	}
	.terms-form__all-check-btn {
		display: flex;
		align-items: center;

		label {
			font-size: 16px;
			color: $light-dark;
		}

		#terms-all-check {
			margin-right: 5px;
			width: 18px;
			height: 18px;
			border: 1px solid #d2d2d2;
			border-radius: 4px;
			cursor: pointer;
		}
	}
	.terms-form__terms-group {
		display: flex;
		flex-direction: column;
		margin-top: 16px;
		padding: 16px 0;
		border-top: 1.5px solid #f5f5f5;

		.terms-group__term {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0;
			font-size: 16px;
			font-weight: 300;
			color: $light-dark;

			a {
				color: $light-grey;
			}

			.term__input {
				display: flex;
				align-items: center;

				input {
					width: 18px;
					height: 18px;
					margin-right: 5px;
					border: 1px solid #d2d2d2;
					border-radius: 4px;
					cursor: pointer;
				}
			}
		}
	}
	.terms-form__desc {
		margin-bottom: 32px;
		padding: 0;

		p {
			margin-bottom: 2px;
			font-size: 14px;
			font-weight: 300;
			color: $light-grey;
		}
	}
	.terms-form__submit-btn {
		width: 100%;
		min-width: 80px;
		padding: 0px 16px;
		height: 56px;
		border: 1px solid rgba(50, 108, 249, 0.9);
		border-radius: 3px;
		background-color: rgba(50, 108, 249, 0.9);
		font-size: 16px;
		font-weight: 700;
		color: rgb(255, 255, 255);
		transition: all 150ms ease-out 0s;
		cursor: pointer;

		&:disabled {
			border: 1px solid #dfdfdf;
			background-color: #dfdfdf;
		}
		&:hover {
			border: 1px solid rgb(50, 108, 249);
			background-color: rgb(50, 108, 249);
		}
	}
}
</style>
