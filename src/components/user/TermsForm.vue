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
@import './scss/termsForm.scss';
</style>
