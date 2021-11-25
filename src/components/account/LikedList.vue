<template>
	<div class="liked-list-container">
		<div class="liked-list-container___inner">
			<LikedItem
				v-for="(item, index) in getAptList"
				:key="index"
				:apt="item"
				:index="index"
			/>
		</div>
	</div>
</template>

<script>
import { fetchUserLikedList } from '@/api/account/accountLiked';
import { mapGetters, mapMutations } from 'vuex';
import LikedItem from '@/components/account/LikedItem.vue';

export default {
	components: {
		LikedItem,
	},
	computed: {
		...mapGetters('userStore', ['getId']),
		...mapGetters('searchStore', ['getAptList']),
	},
	created() {
		this.initLiked();
	},
	methods: {
		...mapMutations('searchStore', ['SET_APT_LIST']),
		async initLiked() {
			const userData = {
				userId: this.getId,
			};

			try {
				const { data } = await fetchUserLikedList(userData);

				this.SET_APT_LIST(data);
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
