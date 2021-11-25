<template>
	<header id="header">
		<RouterLink to="/" class="header__title">오늘의 부동산</RouterLink>
		<HeaderNavigation />
	</header>
</template>

<script>
import HeaderNavigation from '@/components/common/HeaderNavigation.vue';

export default {
	components: {
		HeaderNavigation,
	},
};
</script>

<style lang="scss" scoped>
@import './scss/header.scss';
</style>
