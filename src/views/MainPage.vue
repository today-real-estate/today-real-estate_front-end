<template>
	<div>
		<MainSearch />
		<Recommendation />
		<SubMenu />
		<EventBanner />
		<ApplicationAd />
	</div>
</template>

<script>
import MainSearch from '@/components/main/MainSearch.vue';
import Recommendation from '@/components/main/Recommendation.vue';
import SubMenu from '@/components/main/SubMenu.vue';
import EventBanner from '@/components/main/EventBanner.vue';
import ApplicationAd from '@/components/main/ApplicationAd.vue';

export default {
	components: {
		MainSearch,
		Recommendation,
		SubMenu,
		EventBanner,
		ApplicationAd,
	},
};
</script>

<style lang="scss" scoped></style>
