<template>
	<div class="map__main">
		<div class="main__side-bar">
			<div class="side-bar__header">
				<span>검색된 방 234567개</span>
			</div>
			<div class="side-bar__content">
				<ul class="content__list">
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
					<li class="list__item">
						<div class="item__info">
							<img
								src="@/assets/sample-apt.jpg"
								alt="sample"
								class="info__image"
							/>
							<div class="info__desc">
								<h1 class="desc__title">매매 2억 8300</h1>
								<p class="desc__type">투룸</p>
								<p class="desc__sub-desc">2층, 42.78m², 관리비 5만</p>
								<p class="desc__sub-desc">
									길동역5분거리, 신축1년차, 발코니가 있는 풀옵션 방2개
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="main__map">
			<KakaoMap />
		</div>
	</div>
</template>

<script>
import KakaoMap from '@/components/search/KakaoMap.vue';

export default {
	components: {
		KakaoMap,
	},
};
</script>

<style lang="scss">
@import './scss/mapMain.scss';
</style>
