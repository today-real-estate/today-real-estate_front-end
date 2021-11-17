<template>
	<div class="account-container">
		<AccountHeader />
		<InquiryList />
	</div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import InquiryList from '@/components/account/InquiryList.vue';

export default {
	components: {
		AccountHeader,
		InquiryList,
	},
};
</script>

<style lang="scss" scoped>
.account-container {
	margin-top: 180px;
}
</style>
