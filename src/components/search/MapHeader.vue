<template>
	<div class="map__header">
		<div class="map__search">
			<form class="search__form">
				<input type="text" placeholder="검색하세요" />
			</form>
		</div>
		<div class="map__filters">
			<div class="filters__select">
				<select name="" id=""></select>
				<select name="" id=""></select>
			</div>
			<div class="filters__btns">
				<button>
					<a-icon type="control" />
				</button>
				<button>
					<a-icon type="sync" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './scss/mapHeader.scss';
</style>
