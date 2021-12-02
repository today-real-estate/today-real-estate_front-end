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
import Swal from 'sweetalert2';

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
				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${error}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/likedList.scss';
</style>
