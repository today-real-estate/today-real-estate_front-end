<template>
	<div class="service-container">
		<ServiceHeader />
	</div>
</template>

<script>
import ServiceHeader from '@/components/service/ServiceHeader.vue';

export default {
	components: {
		ServiceHeader,
	},
};
</script>

<style lang="scss" scoped>
.service-container {
	margin-top: 180px;
}
</style>
