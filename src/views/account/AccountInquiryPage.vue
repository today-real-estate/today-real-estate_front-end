<template>
	<div class="account-container">
		<AccountHeader />
		<InquiryList :inquiries="inquiryList" />
	</div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import InquiryList from '@/components/account/InquiryList.vue';
import { getInquiryList } from '@/api/inquiry';

export default {
	components: {
		AccountHeader,
		InquiryList,
	},
	data() {
		return {
			inquiryList: [],
		};
	},
	created() {
		this.getInquiries();
	},
	methods: {
		async getInquiries() {
			try {
				const page = 1;
				const userId = this.$store.state.id;
				console.log(page, userId);
				const response = await getInquiryList(page, userId);

				this.inquiryList = response.data;
				console.log('[1대1 문의 리스트 조회]');
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.account-container {
	margin-top: 180px;
}
</style>
