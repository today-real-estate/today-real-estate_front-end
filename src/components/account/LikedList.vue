<template>
	<div class="liked-list-container">
		<div class="liked-list-container___inner">
			<LikedItem v-for="(item, index) in likedList" :key="index" :apt="item" />
		</div>
	</div>
</template>

<script>
import { fetchUserLikedList } from '@/api/account/accountLiked';
import { mapGetters } from 'vuex';
import LikedItem from '@/components/account/LikedItem.vue';

export default {
	components: {
		LikedItem,
	},
	data() {
		return {
			likedList: [],
		};
	},
	computed: {
		...mapGetters('userStore', ['getId']),
	},
	created() {
		this.initLiked();
	},
	methods: {
		async initLiked() {
			const userData = {
				userId: this.getId,
			};

			try {
				const { data } = await fetchUserLikedList(userData);
				this.likedList = data;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/likedList.scss';
</style>
