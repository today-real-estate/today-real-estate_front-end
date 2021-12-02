<template>
	<div class="news-container">
		<div class="news-container__inner">
			<div class="news__header">
				<h1>오늘의 부동산 뉴스</h1>
			</div>
			<div class="news__main">
				<ul class="main__list">
					<NewsItem
						v-for="(newsItem, index) in newsList[current]"
						:key="index"
						:news="newsItem"
					/>
				</ul>
			</div>
			<div class="news__pagination">
				<APagination v-model="current" :total="30" show-less-items />
			</div>
		</div>
	</div>
</template>

<script>
import { fetchNewsList } from '@/api/news';
import NewsItem from '@/components/news/NewsItem.vue';
import Swal from 'sweetalert2';

export default {
	components: {
		NewsItem,
	},
	data() {
		return {
			currentPageNewsList: [],
			newsList: [],
			current: 1,
		};
	},
	created() {
		this.initNewsList();
	},
	methods: {
		division(array, n) {
			const len = array.length;
			const count = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
			const temp = [];

			for (let i = 0; i < count; i++) {
				temp.push(array.splice(0, n));
			}

			return temp;
		},
		async initNewsList() {
			try {
				const { data } = await fetchNewsList();
				this.newsList = data;
				const filteredNewsList = data.filter((news) => news.imageUrl);

				this.newsList = this.division(filteredNewsList, 6);
			} catch (error) {
				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${error}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/newsPage.scss';
</style>
