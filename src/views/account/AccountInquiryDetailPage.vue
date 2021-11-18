<template>
	<div class="account-container">
		<AccountHeader />
		<InquiryDetailTable />
	</div>
</template>
<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import InquiryDetailTable from '@/components/account/InquiryDetailTable.vue';

export default {
	components: {
		AccountHeader,
		InquiryDetailTable,
	},
};
</script>
<style lang="scss">
@import './scss/account.scss';
</style>
