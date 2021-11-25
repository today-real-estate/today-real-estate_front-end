<template>
	<li class="news-item">
		<div class="news-item__image">
			<img
				:src="news.imageUrl.replace('thumb100', 'thumb200')"
				:alt="news.newsTitle"
			/>
		</div>
		<div class="news-item__contents">
			<a :href="news.newsLink" target="_blank" class="contents__title">
				{{ news.newsTitle }}
			</a>
			<p class="contents__text">
				{{ news.newsContent }}
			</p>
			<span class="contents__date">{{ news.date }}</span>
			<span class="contents__writing">{{ news.writing }}</span>
		</div>
	</li>
</template>
<script>
export default {
	props: {
		news: {
			type: Object,
			default: () => ({}),
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/newsItem.scss';
</style>
