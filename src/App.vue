<template>
	<div id="app">
		<Header />
		<div class="app__contents">
			<RouterView />
		</div>
		<Footer v-if="exceptFooter" />
	</div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			exceptFooter: false,
		};
	},
	created() {
		if (document.location.pathname === '/search') {
			this.exceptFooter = true;
		}
	},
};
</script>

<style lang="scss">
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
@import './scss/antDesign.scss';
@import './scss/reset.scss';
@import './scss/common.scss';
</style>
