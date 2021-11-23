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
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			searchDongName: '',
		};
	},
	methods: {
		...mapActions('searchStore', ['GET_APT_LIST_BY_SEARCH']),
		async searchAptListByDong() {
			const searchData = {
				dongName: this.searchDongName,
			};

			try {
				await this.GET_APT_LIST_BY_SEARCH(searchData);
				this.$router.push('/search');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/scss/reset.scss';
@import './scss/mainPage.scss';
</style>
