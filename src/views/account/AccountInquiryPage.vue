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
import Swal from 'sweetalert2';

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
				const errorMessage = error.data;

				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${errorMessage}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/account.scss';
</style>
