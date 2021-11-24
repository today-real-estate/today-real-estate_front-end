<template>
	<div class="account-container">
		<AccountHeader />
		<LikedList />
	</div>
</template>

<script>
import AccountHeader from '@/components/account/AccountHeader.vue';
import LikedList from '@/components/account/LikedList.vue';

export default {
	components: {
		AccountHeader,
		LikedList,
	},
};
</script>

<style lang="scss" scoped>
@import './scss/account.scss';
</style>
