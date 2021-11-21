<template>
	<div class="search-container">
		<div class="search__inner">
			<h1 class="search__title">어떤 아파트를 찾으세요?</h1>
			<div class="search__option-btn-group">
				<p class="search__option-btn">매물</p>
				<p class="search__option-btn">분양</p>
			</div>
			<form class="search__form">
				<label for="search-input">
					<AIcon type="search" class="search__form__icon" />
				</label>
				<input
					type="text"
					id="search-input"
					placeholder="지역 또는 단지명을 입력하세요."
				/>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './scss/mainPage.scss';
</style>
