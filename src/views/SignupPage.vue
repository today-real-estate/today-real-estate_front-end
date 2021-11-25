<template>
	<div class="signup-container">
		<TermsForm @submitTerms="passSignupForm" v-if="!isCheckedTerms" />
		<SignupForm v-else />
	</div>
</template>

<script>
import TermsForm from '@/components/user/TermsForm.vue';
import SignupForm from '@/components/user/SignupForm.vue';

export default {
	components: {
		TermsForm,
		SignupForm,
	},
	data() {
		return {
			isCheckedTerms: false,
		};
	},
	methods: {
		passSignupForm() {
			this.isCheckedTerms = true;
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/signupPage.scss';
</style>
