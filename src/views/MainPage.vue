<template>
	<div>
		<MainSearch />
		<Recommendation />
		<EventBanner />
		<ApplicationAd />
	</div>
</template>

<script>
import MainSearch from '@/components/main/MainSearch.vue';
import Recommendation from '@/components/main/Recommendation.vue';
import EventBanner from '@/components/main/EventBanner.vue';
import ApplicationAd from '@/components/main/ApplicationAd.vue';

export default {
	components: {
		MainSearch,
		Recommendation,
		EventBanner,
		ApplicationAd,
	},
};
</script>

<style lang="scss" scoped></style>
