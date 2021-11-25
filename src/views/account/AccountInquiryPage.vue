<template>
	<div class="account-container">
		<AccountHeader />
		<InquiryList :inquiries="inquiryList" />
	</div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import InquiryList from '@/components/account/InquiryList.vue';
import { getAllInquiryList, getInquiryList } from '@/api/inquiry';
import { mapGetters } from 'vuex';
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
	computed: {
		...mapGetters('userStore', ['getId', 'getAuthority']),
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
				const response =
					this.getAuthority == 1
						? await getAllInquiryList()
						: await getInquiryList(params);

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
