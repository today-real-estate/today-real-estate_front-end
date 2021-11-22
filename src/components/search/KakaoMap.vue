<template>
	<div class="map_wrap">
		<div
			id="map"
			style="width: 100%; height: 100%; position: relative; overflow: hidden"
		></div>
		<div class="custom_typecontrol radius_border">
			<span id="btnRoadmap" class="selected_btn" @click="setMapType('roadmap')">
				지도
			</span>
			<span id="btnSkyview" class="btn" @click="setMapType('skyview')">
				스카이뷰
			</span>
		</div>
		<div class="custom_zoomcontrol radius_border">
			<span @click="zoomIn" class="zoomcontrol__btn zoomcontrol__btn--zoom-in">
			</span>
			<span
				@click="zoomOut"
				class="zoomcontrol__btn zoomcontrol__btn--zoom-out"
			>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'KakaoMap',
	data() {
		return {
			map: null,
			markerPositions1: [
				[33.452278, 126.567803],
				[33.452671, 126.574792],
				[33.451744, 126.572441],
			],
			markerPositions2: [
				[37.499590490909185, 127.0263723554437],
				[37.499427948430814, 127.02794423197847],
				[37.498553760499505, 127.02882598822454],
				[37.497625593121384, 127.02935713582038],
				[37.49629291770947, 127.02587362608637],
				[37.49754540521486, 127.02546694890695],
				[37.49646391248451, 127.02675574250912],
			],
			markers: [],
			infowindow: null,
		};
	},
	mounted() {
		if (window.kakao && window.kakao.maps) {
			this.initKakaoMap();
		} else {
			const script = document.createElement('script');

			/* global kakao */
			script.onload = () => kakao.maps.load(this.initKakaoMap);
			script.src =
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0f4c22d8cdfcb5038140db4f10d9fdcd';
			document.head.appendChild(script);
		}
	},
	methods: {
		initKakaoMap() {
			const mapContainer = document.getElementById('map');
			const mapOptions = {
				center: new kakao.maps.LatLng(37.5403169, 126.99526),
				level: 7,
			};
			this.map = new kakao.maps.Map(mapContainer, mapOptions);
		},
		setMapType(maptype) {
			const roadmapControl = document.getElementById('btnRoadmap');
			const skyviewControl = document.getElementById('btnSkyview');

			if (maptype === 'roadmap') {
				this.map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
				roadmapControl.className = 'selected_btn';
				skyviewControl.className = 'btn';
			} else {
				this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
				skyviewControl.className = 'selected_btn';
				roadmapControl.className = 'btn';
			}
		},
		zoomIn() {
			this.map.setLevel(this.map.getLevel() - 1);
		},
		zoomOut() {
			this.map.setLevel(this.map.getLevel() + 1);
		},
		changeSize(size) {
			const container = document.getElementById('map');
			container.style.width = `${size}px`;
			container.style.height = `${size}px`;
			this.map.relayout();
		},
		displayMarker(markerPositions) {
			if (this.markers.length > 0) {
				this.markers.forEach((marker) => marker.setMap(null));
			}

			const positions = markerPositions.map(
				(position) => new kakao.maps.LatLng(...position),
			);

			if (positions.length > 0) {
				this.markers = positions.map(
					(position) =>
						new kakao.maps.Marker({
							map: this.map,
							position,
						}),
				);

				const bounds = positions.reduce(
					(bounds, latlng) => bounds.extend(latlng),
					new kakao.maps.LatLngBounds(),
				);

				this.map.setBounds(bounds);
			}
		},
		displayInfoWindow() {
			if (this.infowindow && this.infowindow.getMap()) {
				this.map.setCenter(this.infowindow.getPosition());
				return;
			}

			const iwContent = '<div style="padding:5px;">Hello World!</div>',
				iwPosition = new kakao.maps.LatLng(33.450701, 126.570667),
				iwRemoveable = true;

			this.infowindow = new kakao.maps.InfoWindow({
				map: this.map,
				position: iwPosition,
				content: iwContent,
				removable: iwRemoveable,
			});

			this.map.setCenter(iwPosition);
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/kakaoMap.scss';
</style>
