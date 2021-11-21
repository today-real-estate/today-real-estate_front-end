<template>
	<div class="map__header">
		<div class="map__search">
			<form class="search__form">
				<input type="text" placeholder="검색하세요" />
			</form>
		</div>
		<div class="map__filters">
			<div class="filters__select">
				<ASelect
					v-model="selectedSidoCode"
					@change="selectSido"
					style="
						position: relative;
						z-index: 30;
						width: 220px;
						height: 34px;
						margin-right: 8px;
					"
				>
					<ASelectOption v-for="sido in sidoList" :key="sido.code">
						{{ sido.sidoName }}
					</ASelectOption>
				</ASelect>
				<ASelect
					v-model="selectedGugunCode"
					@change="selectGugun"
					style="
						position: relative;
						z-index: 30;
						width: 220px;
						height: 34px;
						margin-right: 8px;
					"
				>
					<ASelectOption v-for="gugun in gugunList" :key="gugun.code">
						{{ gugun.gugunName }}
					</ASelectOption>
				</ASelect>
				<ASelect
					v-model="selectedDongCode"
					@change="selectDong"
					style="
						position: relative;
						z-index: 30;
						width: 220px;
						height: 34px;
						margin-right: 8px;
					"
				>
					<ASelectOption v-for="dong in dongList" :key="dong.code">
						{{ dong.dongName }}
					</ASelectOption>
				</ASelect>
			</div>
			<div class="filters__btns">
				<button>
					<a-icon type="control" />
				</button>
				<button class="btns__clear-btn" @click="clearSearch">
					<a-icon type="sync" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
	data() {
		return {
			selectedSidoCode: '선택하세요',
			selectedGugunCode: '선택하세요',
			selectedDongCode: '선택하세요',
		};
	},
	computed: {
		...mapState('searchStore', ['sidoList', 'gugunList', 'dongList']),
	},
	methods: {
		...mapActions('searchStore', [
			'GET_SIDO_LIST',
			'GET_GUGUN_LIST',
			'GET_DONG_LIST',
			'GET_APT_LIST',
		]),
		...mapMutations('searchStore', [
			'CLEAR_SIDO_LIST',
			'CLEAR_GUGUN_LIST',
			'CLEAR_DONG_LIST',
			'CLEAR_APT_LIST',
		]),
		async getSidoList() {
			try {
				await this.GET_SIDO_LIST();
			} catch (error) {
				console.log(error);
			}
		},
		async getGugunList(sidoCode) {
			const sidoData = {
				sido: sidoCode,
			};

			try {
				await this.GET_GUGUN_LIST(sidoData);
			} catch (error) {
				console.log(error);
			}
		},
		async getDongList(gugunCode) {
			const gugunData = {
				gugun: gugunCode,
			};

			try {
				await this.GET_DONG_LIST(gugunData);
			} catch (error) {
				console.log(error);
			}
		},
		async getAptList(dongCode) {
			const dongData = {
				dong: dongCode,
			};

			try {
				await this.GET_APT_LIST(dongData);
			} catch (error) {
				console.log(error);
			}
		},
		selectSido() {
			this.CLEAR_GUGUN_LIST();
			this.CLEAR_DONG_LIST();
			this.selectedGugunCode = '선택하세요';
			this.selectedDongCode = '선택하세요';

			if (!isNaN(this.selectedSidoCode)) {
				this.getGugunList(this.selectedSidoCode);
			}
		},
		selectGugun() {
			this.CLEAR_DONG_LIST();
			this.selectedDongCode = '선택하세요';

			if (!isNaN(this.selectedGugunCode)) {
				this.getDongList(this.selectedGugunCode);
			}
		},
		selectDong() {
			if (!isNaN(this.selectedDongCode)) {
				this.getAptList(this.selectedDongCode);
			}
		},
		clearSearch() {
			this.CLEAR_APT_LIST();
			this.selectedSidoCode = '선택하세요';
			this.selectedGugunCode = '선택하세요';
			this.selectedDongCode = '선택하세요';
		},
	},
	created() {
		this.getSidoList();
	},
};
</script>

<style lang="scss" scoped>
@import './scss/mapHeader.scss';
</style>
