<template>
	<div class="account-header">
		<h1 class="account-header__title">마이페이지</h1>
		<ul class="account-header__nav">
			<li class="nav__link" :class="{ active: likedStatus }">
				<RouterLink to="/account/liked">관심목록</RouterLink>
			</li>
			<li class="nav__link" :class="{ active: inquiryListStatus }">
				<RouterLink to="/account/inquiry-list">1:1 문의 내역</RouterLink>
			</li>
			<li class="nav__link" :class="{ active: editStatus }">
				<RouterLink to="/account/edit">내 정보</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			likedStatus: false,
			inquiryListStatus: false,
			editStatus: false,
		};
	},
	created() {
		switch (this.$route.fullPath) {
			case '/account/liked':
				this.likedStatus = true;
				break;
			case '/account/inquiry-list':
				this.inquiryListStatus = true;
				break;
			case '/account/edit':
				this.editStatus = true;
				break;
		}
	},
};
</script>

<style lang="scss" scoped>
@import './scss/accountHeader.scss';
</style>
