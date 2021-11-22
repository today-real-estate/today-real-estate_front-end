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
#map {
	overflow: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}

.map_wrap {
	overflow: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
.radius_border {
	border: 1px solid #919191;
	border-radius: 5px;
}
.custom_typecontrol {
	display: flex;
	overflow: hidden;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1;
	width: 130px;
	height: 30px;
	margin: 0;
	padding: 0;
	font-size: 12px;

	span {
		display: block;
		float: left;
		width: 65px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}

	.btn {
		background: #fff;
		background: linear-gradient(#fff, #e6e6e6);

		&:hover {
			background: #f5f5f5;
			background: linear-gradient(#f5f5f5, #e3e3e3);
		}
		&:active {
			background: #e6e6e6;
			background: linear-gradient(#e6e6e6, #fff);
		}
	}
	.selected_btn {
		background: #425470;
		background: linear-gradient(#425470, #5b6d8a);
		color: #fff;

		&:hover {
			color: #fff;
		}
	}
}

.custom_zoomcontrol {
	overflow: hidden;
	position: absolute;
	top: 50px;
	right: 10px;
	z-index: 1;
	width: 38px;
	height: 80px;
	background-color: #f5f5f5;

	span:first-child {
		border-bottom: 1px solid #bfbfbf;
	}

	.zoomcontrol__btn {
		display: block;
		width: 36px;
		height: 40px;
		margin: 0;
		text-align: center;
		cursor: pointer;
		transition: all 100ms ease-out 0s;

		&.zoomcontrol__btn--zoom-in {
			background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png)
				no-repeat;
			background-position: center;
			background-size: 40%;

			&:hover {
				background-size: 50%;
			}
		}
		&.zoomcontrol__btn--zoom-out {
			background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png)
				no-repeat;
			background-position: center;
			background-size: 40%;

			&:hover {
				background-size: 50%;
			}
		}
	}
}
</style>
