<template>
	<div class="map_wrap">
		<div
			id="map"
			style="width: 100%; height: 100%; position: relative; overflow: hidden"
		></div>
		<ul id="category">
			<li id="BK9" data-order="0" @click="onClickCategory('BK9', 'bank')">
				<span class="category_bg bank"></span>
				은행
			</li>
			<li id="MT1" data-order="1" @click="onClickCategory('MT1', 'mart')">
				<span class="category_bg mart"></span>
				마트
			</li>
			<li id="PM9" data-order="2" @click="onClickCategory('PM9', 'pharmacy')">
				<span class="category_bg pharmacy"></span>
				약국
			</li>
			<li id="OL7" data-order="3" @click="onClickCategory('OL7', 'gasStation')">
				<span class="category_bg oil"></span>
				주유소
			</li>
			<li id="CE7" data-order="4" @click="onClickCategory('CE7', 'cafe')">
				<span class="category_bg cafe"></span>
				카페
			</li>
			<li
				id="CS2"
				data-order="5"
				@click="onClickCategory('CS2', 'convenienceStore')"
			>
				<span class="category_bg store"></span>
				편의점
			</li>
		</ul>
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
			placeOverlay: null,
			contentNode: null,
			markers: [],
			currCategory: '',
			infowindow: null,
			ps: null,
			categories: [
				'bank',
				'mart',
				'pharmacy',
				'gasStation',
				'cafe',
				'convenienceStore',
			],
			categoryStatus: {
				bank: 'off',
				mart: 'off',
				pharmacy: 'off',
				gasStation: 'off',
				cafe: 'off',
				convenienceStore: 'off',
			},
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
				'//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0f4c22d8cdfcb5038140db4f10d9fdcd&libraries=services';
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

			this.placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 });
			this.map = new kakao.maps.Map(mapContainer, mapOptions);
			this.ps = new kakao.maps.services.Places(this.map);
			this.contentNode = document.createElement('div');
			kakao.maps.event.addListener(this.map, 'idle', this.searchPlaces);
			this.contentNode.className = 'placeinfo_wrap';
			this.addEventHandle(
				this.contentNode,
				'mousedown',
				kakao.maps.event.preventMap,
			);
			this.addEventHandle(
				this.contentNode,
				'touchstart',
				kakao.maps.event.preventMap,
			);
			this.placeOverlay.setContent(this.contentNode);
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
		addEventHandle(target, type, callback) {
			if (target.addEventListener) {
				target.addEventListener(type, callback);
			} else {
				target.attachEvent('on' + type, callback);
			}
		},
		searchPlaces() {
			if (!this.currCategory) {
				return;
			}

			this.placeOverlay.setMap(null);
			this.removeMarker();
			this.ps.categorySearch(this.currCategory, this.placesSearchCB, {
				useMapBounds: true,
			});
		},
		placesSearchCB(data, status) {
			if (status === kakao.maps.services.Status.OK) {
				this.displayPlaces(data);
			} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
				// 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
			} else if (status === kakao.maps.services.Status.ERROR) {
				// 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
			}
		},
		displayPlaces(places) {
			const kakaoMap = this;
			const order = document
				.getElementById(this.currCategory)
				.getAttribute('data-order');

			for (let i = 0; i < places.length; i++) {
				const marker = this.addMarker(
					new kakao.maps.LatLng(places[i].y, places[i].x),
					order,
				);

				(function (marker, place) {
					kakao.maps.event.addListener(marker, 'click', function () {
						kakaoMap.displayPlaceInfo(place);
					});
				})(marker, places[i]);
			}
		},
		addMarker(position, order) {
			const imageSrc =
					'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png',
				imageSize = new kakao.maps.Size(27, 28),
				imgOptions = {
					spriteSize: new kakao.maps.Size(72, 208),
					spriteOrigin: new kakao.maps.Point(46, order * 36),
					offset: new kakao.maps.Point(11, 28),
				},
				markerImage = new kakao.maps.MarkerImage(
					imageSrc,
					imageSize,
					imgOptions,
				),
				marker = new kakao.maps.Marker({
					position: position,
					image: markerImage,
				});

			marker.setMap(this.map);
			this.markers.push(marker);

			return marker;
		},
		removeMarker() {
			for (let i = 0; i < this.markers.length; i++) {
				this.markers[i].setMap(null);
			}
			this.markers = [];
		},
		displayPlaceInfo(place) {
			let content =
				'<div class="placeinfo">' +
				'   <a class="title" href="' +
				place.place_url +
				'" target="_blank" title="' +
				place.place_name +
				'">' +
				place.place_name +
				'</a>';

			if (place.road_address_name) {
				content +=
					'    <span title="' +
					place.road_address_name +
					'">' +
					place.road_address_name +
					'</span>' +
					'  <span class="jibun" title="' +
					place.address_name +
					'">(지번 : ' +
					place.address_name +
					')</span>';
			} else {
				content +=
					'    <span title="' +
					place.address_name +
					'">' +
					place.address_name +
					'</span>';
			}

			content +=
				'    <span class="tel">' +
				place.phone +
				'</span>' +
				'</div>' +
				'<div class="after"></div>';

			this.contentNode.innerHTML = content;
			this.placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
			this.placeOverlay.setMap(this.map);
		},
		onClickCategory(selectedId, key) {
			const id = selectedId;

			if (this.categoryStatus[key] === 'off') {
				this.offAllCategoryStatus();
				this.categoryStatus[key] = 'on';
			} else {
				this.categoryStatus[key] = 'off';
			}

			this.placeOverlay.setMap(null);

			if (this.categoryStatus[key] === 'on') {
				this.currCategory = id;
				this.searchPlaces();
			} else {
				this.currCategory = '';
				this.removeMarker();
			}
		},
		offAllCategoryStatus() {
			this.categories.forEach((category) => {
				this.categoryStatus[category] = 'off';
			});
		},
		// displayMarker(markerPositions) {
		// 	if (this.markers.length > 0) {
		// 		this.markers.forEach((marker) => marker.setMap(null));
		// 	}

		// 	const positions = markerPositions.map(
		// 		(position) => new kakao.maps.LatLng(...position),
		// 	);

		// 	if (positions.length > 0) {
		// 		this.markers = positions.map(
		// 			(position) =>
		// 				new kakao.maps.Marker({
		// 					map: this.map,
		// 					position,
		// 				}),
		// 		);

		// 		const bounds = positions.reduce(
		// 			(bounds, latlng) => bounds.extend(latlng),
		// 			new kakao.maps.LatLngBounds(),
		// 		);

		// 		this.map.setBounds(bounds);
		// 	}
		// },
		// displayInfoWindow() {
		// 	if (this.infowindow && this.infowindow.getMap()) {
		// 		this.map.setCenter(this.infowindow.getPosition());
		// 		return;
		// 	}

		// 	const iwContent = '<div style="padding:5px;">Hello World!</div>',
		// 		iwPosition = new kakao.maps.LatLng(33.450701, 126.570667),
		// 		iwRemoveable = true;

		// 	this.infowindow = new kakao.maps.InfoWindow({
		// 		map: this.map,
		// 		position: iwPosition,
		// 		content: iwContent,
		// 		removable: iwRemoveable,
		// 	});

		// 	this.map.setCenter(iwPosition);
		// },
	},
};
</script>

<style lang="scss">
@import './scss/kakaoMap.scss';
</style>
