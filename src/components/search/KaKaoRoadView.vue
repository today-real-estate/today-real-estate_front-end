<template>
	<div id="roadview"></div>
</template>

<script>
export default {
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.initKakaoRoadview();
		} else {
			const script = document.createElement('script');

			/* global kakao */
			script.onload = () => kakao.maps.load(this.initKakaoRoadview);
			script.src =
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0f4c22d8cdfcb5038140db4f10d9fdcd';
			document.head.appendChild(script);
		}
	},
	methods: {
		initKakaoRoadview() {
			const roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
			const roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
			const roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

			const position = new kakao.maps.LatLng(33.450701, 126.570667);

			// 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
			roadviewClient.getNearestPanoId(position, 50, function (panoId) {
				roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
			});
		},
	},
};
</script>

<style lang="scss"></style>
