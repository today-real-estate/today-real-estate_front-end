<template>
	<div class="map-container">
		<MapHeader />
		<MapMain />
	</div>
</template>

<script>
import MapHeader from '@/components/search/MapHeader.vue';
import MapMain from '@/components/search/MapMain.vue';

export default {
	components: {
		MapHeader,
		MapMain,
	},
};
</script>

<style lang="scss" scoped>
@import '@/scss/reset.scss';
.map-container {
	width: 100%;
	height: 100%;
}
</style>
