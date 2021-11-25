<template>
	<div class="sub-menu-container">
		<div class="sub-menu-container__inner">
			<div class="sub-menu__item sub-menu__ad">
				<div class="item__header ad__header">분양 소개</div>
				<div class="item__contents ad__contents">
					<a href="https://www.i-park.com/cheongna/index" target="_blank">
						<img src="@/images/apt-ad-banner.jpg" alt="청라국제도시 아이파크" />
					</a>
				</div>
			</div>
			<div class="sub-menu__item sub-menu__news">
				<div class="item__header news__header">
					<div>오늘의 부동산 뉴스</div>
					<div>
						<RouterLink to="/news">더보기</RouterLink>
					</div>
				</div>
				<div class="item__contents news__contents">
					<ul>
						<li v-for="(news, index) in newsList" :key="index">
							<a :href="news.newsLink" target="_blank">{{ news.newsTitle }}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="sub-menu__item sub-menu__notice">
				<div class="item__header notice__header">
					<div>공지사항</div>
					<div>
						<RouterLink to="#">더보기</RouterLink>
					</div>
				</div>
				<div class="item__contents notice__contents">
					<ul>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
						<li>[공지] 오늘의 부동산 개인정보 처리방침</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { fetchNewsList } from '@/api/news';

export default {
	data() {
		return {
			newsList: [],
		};
	},
	created() {
		this.initNewsList();
	},
	methods: {
		async initNewsList() {
			try {
				const { data } = await fetchNewsList();
				this.newsList = data.splice(0, 5);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/subMenu.scss';
</style>
