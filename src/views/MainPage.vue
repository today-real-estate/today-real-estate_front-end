<template>
	<div>
		<MainSearch />
		<Recommendation />
	</div>
</template>

<script>
import MainSearch from '@/components/main/MainSearch.vue';
import Recommendation from '@/components/main/Recommendation.vue';

export default {
	components: {
		MainSearch,
		Recommendation,
	},
};
</script>

<style lang="scss" scoped></style>
