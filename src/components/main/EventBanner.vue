<template>
	<div class="event-banner-container">
		<div class="event-banner-container__inner">
			<a
				href="https://apply.lh.or.kr/LH/index.html?gv_url=SIL::CLCC_SIL_0030.xfdl&gv_menuId=1010204&gv_param=UPP_AIS_TP_CD:13,AIS_TP_CD:17,CCR_CNNT_SYS_DS_CD:03,LCC:Y"
				target="_blank"
			>
				<img
					src="@/images/event-banner-1.jpeg"
					alt="청년전세임대(1순위) 수시모집"
				/>
			</a>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.event-banner-container {
	background-color: #d9f1fd;

	.event-banner-container__inner {
		max-width: 1100px;
		min-width: 900px;
		margin: 0 auto;

		a {
			cursor: pointer;

			img {
				max-width: 1100px;
				min-width: 900px;
				margin: 0 auto;
				text-align: center;
			}
		}
	}
}
</style>
