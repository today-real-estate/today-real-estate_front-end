<template>
	<div id="app">
		<Header />
		<RouterView />
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
