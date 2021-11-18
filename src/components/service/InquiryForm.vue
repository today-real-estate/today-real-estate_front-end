<template>
	<div class="inquiry-container">
		<form class="inquiry-form" @submit.prevent="submitInquiry">
			<div class="inquiry-form__desc">
				<p>오늘의 부동산에 궁금하신 점을 문의해주세요.</p>
				<p>
					문의내용과 답변은 <strong>'1:1 문의내역'</strong>에서 확인하실 수
					있습니다.
				</p>
			</div>
			<ul class="inquiry-form__list">
				<li class="inquiry-form__item">
					<div class="item__title">문의유형</div>
					<select name="type" id="inquiry-type-select" v-model="inquiryType">
						<option value="">선택</option>
						<option value="일반문의">일반문의</option>
						<option value="허위매물 신고">허위매물 신고</option>
						<option value="이벤트 문의">이벤트 문의</option>
					</select>
				</li>
				<li class="inquiry-form__item">
					<div class="item__title">제목</div>
					<input type="text" class="item__input" v-model="title" />
				</li>
				<li class="inquiry-form__item">
					<div class="item__title">문의내용</div>
					<textarea
						name="content"
						type="content"
						class="item__textarea"
						placeholder="내용을 입력하세요."
						v-model="content"
					></textarea>
				</li>
				<li class="inquiry-form__item">
					<div class="item__title">사진</div>
					<div class="item__uploader">
						<div class="item__uploader__input">
							<AIcon type="camera" />
							<input
								type="file"
								accept="image/png, image/jpeg, image/jpg"
								id="inquriy__file"
								style="display: none"
							/>
						</div>
						<div class="item__uploader__desc">
							<p>- 사진 용량은 10MB 까지 등록이 가능합니다.</p>
							<p>- 사진은 최대 1장까지 등록이 가능합니다.</p>
						</div>
					</div>
				</li>
			</ul>
			<div class="inquiry-form__footer">
				<button type="submit" class="inquiry-form__submit-btn">문의하기</button>
			</div>
		</form>

		<div class="contact-info">
			<p>고객센터 : <strong>02-1234-5678</strong></p>
			<p>평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)</p>
		</div>
	</div>
</template>

<script>
import { registerInquiry } from '@/api/inquiry';

export default {
	data() {
		return {
			inquiryType: '',
			title: '',
			content: '',
			file: '',
		};
	},
	methods: {
		async submitInquiry() {
			try {
				const inquiryData = {
					userId: this.$store.getters['userStore/getId'],
					inquiryType: this.inquiryType,
					title: this.title,
					content: this.content,
				};
				const response = await registerInquiry(inquiryData);

				console.log('[게시물 등록 완료]', response);

				this.initForm();
				this.$router.push('/account/inquiry-list');

				alert('게시물 등록 완료');
			} catch (error) {
				console.log(error);
			}
		},
		initForm() {
			this.inquiryType = '';
			this.title = '';
			this.content = '';
			this.file = '';
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/inquiryForm.scss';
</style>
