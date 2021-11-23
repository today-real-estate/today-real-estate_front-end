<template>
	<div class="service-container">
		<ServiceHeader />
		<InquiryForm />
	</div>
</template>

<script>
import ServiceHeader from '@/components/service/ServiceHeader.vue';
import InquiryForm from '@/components/service/InquiryForm.vue';

export default {
	components: {
		ServiceHeader,
		InquiryForm,
	},
};
</script>

<style lang="scss" scoped>
@import './scss/serviceInquiryPage.scss';
</style>
