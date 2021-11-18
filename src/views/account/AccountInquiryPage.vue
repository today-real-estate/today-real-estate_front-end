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
				const userId = this.$store.getters['userStore/getId'];
				const params = {
					userId: userId,
				};
				const response = await getInquiryList(params);

				console.log('[1대1 문의 리스트 조회]', response);

				this.inquiryList = response.data;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/account.scss';
</style>
