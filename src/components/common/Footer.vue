<template>
	<footer id="footer">
		<div class="footer__inner">
			<div class="footer__top">
				<nav>
					<ul>
						<li>
							<RouterLink to="#"> 개발팀 소개 </RouterLink>
						</li>
						<li>
							<RouterLink to="#"> 이용약관 </RouterLink>
						</li>
						<li>
							<RouterLink to="#"> 개인정보처리방침 </RouterLink>
						</li>
						<li>
							<RouterLink to="#"> 매물관리규정 </RouterLink>
						</li>
					</ul>
				</nav>
				<button class="top__move-to-top-btn" @click="toTop">
					<AIcon type="caret-up" class="move-to-top-btn__icon" />
					TOP
				</button>
			</div>
			<div class="footer__content">
				<div class="content__info">
					<ul>
						<li>(주)오늘의 부동산</li>
						<li>대표: 박정환, 진형준</li>
						<li>
							사업자 번호: 123-45-6789 통신판매업신고번호 : 제2021-서울
							강남-00000호
						</li>
						<li>
							주소 : 서울 강남구 테헤란로 212 멀티캠퍼스 역삼 10층 (주)오늘의
							부동산
						</li>
						<li></li>
						<li>
							고객센터 : 02-1234-5678 (평일 10:00 ~ 18:30 토·일요일, 공휴일
							휴무)
						</li>
						<li>팩스 : 02-123-4567 허위매물 신고 : clean@dabangapp.com</li>
					</ul>
					<div class="content__btn-group">
						<RouterLink to="/service/qna">자주묻는 질문</RouterLink>
						<RouterLink to="/service/inquiry">1:1문의</RouterLink>
					</div>
				</div>
				<div class="content__contact">
					<div class="contact__nav">
						<RouterLink to="#">
							<AIcon type="facebook" />
						</RouterLink>
						<RouterLink to="https://www.instagram.com/jeonghwan.dev">
							<AIcon type="instagram" />
						</RouterLink>
						<RouterLink to="#">
							<AIcon type="twitter" />
						</RouterLink>
						<RouterLink to="https://github.com/today-real-estate">
							<AIcon type="github" />
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			scrollTimer: 0,
			scrollY: 0,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (this.scrollTimer) {
				return;
			}

			this.scrollTimer = setTimeout(() => {
				this.scrollY = window.scrollY;
				clearInterval(this.scrollTimer);
				this.scrollTimer = 0;
			}, 100);
		},
		toTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/footer.scss';
</style>
