<template>
	<div class="search-container">
		<div class="search__inner">
			<h1 class="search__title">어떤 아파트를 찾으세요?</h1>
			<div class="search__option-btn-group">
				<p class="search__option-btn">매물</p>
				<p class="search__option-btn">분양</p>
			</div>
			<div class="search__form">
				<label for="search-input">
					<AIcon type="search" class="search__form__icon" />
				</label>
				<input
					type="text"
					v-model="searchDongName"
					@keyup.enter.prevent="searchAptListByDong"
					id="search-input"
					placeholder="동 이름을 검색하세요."
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { putRecentSearch } from '@/api/user';
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			searchDongName: '',
		};
	},
	computed: {
		...mapGetters('userStore', ['isLogin', 'getId']),
	},
	methods: {
		...mapMutations('userStore', ['SET_RECENT_SEARCH']),
		...mapActions('searchStore', [
			'GET_APT_LIST_BY_SEARCH',
			'GET_APT_LIST_BY_SEARCH_WITH_AUTH',
		]),
		async searchAptListByDong() {
			try {
				if (this.isLogin) {
					const searchData = {
						userId: this.getId,
						dongName: this.searchDongName,
					};
					const recentSearchData = {
						id: this.getId,
						recentSearch: this.searchDongName,
					};

					await this.GET_APT_LIST_BY_SEARCH_WITH_AUTH(searchData);
					putRecentSearch(recentSearchData);
					this.SET_RECENT_SEARCH(this.searchDongName);
				} else {
					const searchData = {
						dongName: this.searchDongName,
					};

					await this.GET_APT_LIST_BY_SEARCH(searchData);
				}

				this.$router.push('/search');
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
@import '@/scss/reset.scss';
@import './scss/mainSearch.scss';
</style>
