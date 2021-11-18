<template>
	<div class="account-container">
		<AccountHeader />
		<AccountEditForm />
	</div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import AccountEditForm from '@/components/account/AccountEditForm.vue';

export default {
	components: {
		AccountHeader,
		AccountEditForm,
	},
};
</script>

<style lang="scss" scoped>
@import './scss/account.scss';
</style>
