<template>
	<div class="liked-list-container">
		<div class="liked-list-container___inner">
			<div class="list__apt">
				<div class="apt__images">
					<img src="@/assets/sample-apt.jpg" alt="sample" />
				</div>
				<div class="apt__apt-info">
					<h2 class="apt-info__name">용산파크타워(24-0)</h2>
					<h1 class="apt-info__price">
						{{ apt.recentPrice | convertAptPrice }}
					</h1>
					<p class="apt-info__build-year">건축연도: {{ apt.buildYear }}</p>
					<p class="apt-info__address">
						{{ apt.sidoName }} {{ apt.gugunName }} {{ apt.dongName }}
						{{ apt.jibun }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.liked-list-container {
	max-width: 1100px;
	margin: 0 auto 300px;
	padding: 0 20px;

	.liked-list-container___inner {
		height: 200px;
	}
}
</style>
