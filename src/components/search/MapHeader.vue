<template>
	<div class="map__header">
		<div class="map__search">
			<div class="search__form">
				<input
					type="text"
					v-model="searchDong"
					@keyup.enter.prevent="searchAptListByDong"
					placeholder="동 이름을 검색하세요."
				/>
			</div>
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
import EventBus from '@/utils/eventBus';

export default {
	data() {
		return {
			searchDong: this.searchDongName,
			selectedSidoCode: '시를 선택하세요',
			selectedGugunCode: '구를 선택하세요',
			selectedDongCode: '동을 선택하세요',
		};
	},
	computed: {
		...mapState('searchStore', [
			'searchDongName',
			'sidoList',
			'gugunList',
			'dongList',
		]),
	},
	methods: {
		...mapMutations('searchStore', [
			'CLEAR_SIDO_LIST',
			'CLEAR_GUGUN_LIST',
			'CLEAR_DONG_LIST',
			'CLEAR_APT_LIST',
			'BACK_TO_ITEM_LIST',
			'OFF_ROAD_VIEW',
		]),
		...mapActions('searchStore', [
			'GET_SIDO_LIST',
			'GET_GUGUN_LIST',
			'GET_DONG_LIST',
			'GET_APT_LIST_BY_GUGUN',
			'GET_APT_LIST_BY_DONG',
			'GET_APT_LIST_BY_SEARCH',
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
		async getAptListByGugun(gugunCode) {
			const gugunData = {
				gugun: gugunCode,
			};

			try {
				this.BACK_TO_ITEM_LIST();
				await this.GET_APT_LIST_BY_GUGUN(gugunData);
			} catch (error) {
				console.log(error);
			}
		},
		async getAptListByDong(dongCode) {
			const dongData = {
				dong: dongCode,
			};

			try {
				this.BACK_TO_ITEM_LIST();
				await this.GET_APT_LIST_BY_DONG(dongData);
			} catch (error) {
				console.log(error);
			}
		},
		async searchAptListByDong() {
			const searchData = {
				dongName: this.searchDong,
			};

			try {
				await this.GET_APT_LIST_BY_SEARCH(searchData);
				EventBus.$emit('displayKakaoMapMarker');
				this.BACK_TO_ITEM_LIST();
			} catch (error) {
				console.log(error);
			}
		},
		selectSido() {
			this.CLEAR_GUGUN_LIST();
			this.CLEAR_DONG_LIST();
			this.selectedGugunCode = '구를 선택하세요';
			this.selectedDongCode = '동을 선택하세요';

			if (!isNaN(this.selectedSidoCode)) {
				this.getGugunList(this.selectedSidoCode);
			}
		},
		async selectGugun() {
			this.CLEAR_DONG_LIST();
			this.selectedDongCode = '동을 선택하세요';

			if (!isNaN(this.selectedGugunCode)) {
				this.getDongList(this.selectedGugunCode);
				await this.getAptListByGugun(this.selectedGugunCode);
			}
		},
		async selectDong() {
			if (!isNaN(this.selectedDongCode)) {
				await this.getAptListByDong(this.selectedDongCode);
				EventBus.$emit('displayKakaoMapMarker');
			}
		},
		clearSearch() {
			this.CLEAR_APT_LIST();
			this.selectedSidoCode = '시를 선택하세요';
			this.selectedGugunCode = '구를 선택하세요';
			this.selectedDongCode = '동을 선택하세요';
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
