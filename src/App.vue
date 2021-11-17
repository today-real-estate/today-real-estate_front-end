<template>
	<div id="app">
		<Header />
		<div class="app__contents">
			<RouterView />
		</div>
	</div>
</template>

<script>
import Header from '@/components/common/Header.vue';

export default {
	name: 'App',
	components: {
		Header,
	},
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
