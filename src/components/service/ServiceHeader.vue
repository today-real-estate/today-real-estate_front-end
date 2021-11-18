<template>
	<div class="service-header">
		<h1 class="service-header__title">문의하기</h1>
		<ul class="service-header__nav">
			<li class="nav__link">
				<RouterLink to="">자주 묻는 질문</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">1:1 문의</RouterLink>
			</li>
			<li class="nav__link">
				<RouterLink to="">공지사항</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './scss/serviceHeader.scss';
</style>
