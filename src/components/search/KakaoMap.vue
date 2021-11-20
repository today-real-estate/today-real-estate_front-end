<template>
	<div>
		<div id="map"></div>
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
			this.initMap();
		} else {
			const script = document.createElement('script');
			/* global kakao */
			script.onload = () => kakao.maps.load(this.initMap);
			script.src =
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0';
			document.head.appendChild(script);
		}
	},
	methods: {
		initMap() {
			const container = document.getElementById('map');
			const options = {
				center: new kakao.maps.LatLng(37.5403169, 126.99526),
				level: 7,
			};
			this.map = new kakao.maps.Map(container, options);
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

<style scoped>
#map {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	box-sizing: border-box;
}

/* .button-group {
	margin: 10px 0px;
}

button {
	margin: 0 3px;
} */
</style>
