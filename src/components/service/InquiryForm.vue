<template>
	<div class="inquiry-container">
		<div class="inquiry-form">
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
					<select
						name="type"
						id="inquiry-type-select"
						v-model="inquiry.inquiryType"
					>
						<option value="">선택</option>
						<option value="일반문의">일반문의</option>
						<option value="허위매물 신고">허위매물 신고</option>
						<option value="이벤트 문의">이벤트 문의</option>
					</select>
				</li>
				<li class="inquiry-form__item">
					<div class="item__title">제목</div>
					<input type="text" class="item__input" v-model="inquiry.title" />
				</li>
				<li class="inquiry-form__item">
					<div class="item__title">문의내용</div>
					<textarea
						name="content"
						type="content"
						class="item__textarea"
						placeholder="내용을 입력하세요."
						v-model="inquiry.content"
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
								id="inquiry__file"
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
			<template v-if="!onEdit">
				<div class="inquiry-form__footer">
					<button
						type="submit"
						class="inquiry-form__submit-btn"
						@click.prevent="submitInquiry"
					>
						문의하기
					</button>
				</div>
			</template>
			<template v-else>
				<div class="inquiry-form__footer">
					<button
						type="submit"
						class="inquiry-form__cancel-btn"
						@click="cancelEdit"
					>
						취소
					</button>
					<button
						type="submit"
						class="inquiry-form__edit-btn"
						@click="updateInquiryItem"
					>
						수정하기
					</button>
				</div>
			</template>
		</div>
		<div class="contact-info">
			<p>고객센터 : <strong>02-1234-5678</strong></p>
			<p>평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)</p>
		</div>
	</div>
</template>

<script>
import {
	registerInquiry,
	getInquiryItemDetail,
	updateInquiry,
} from '@/api/inquiry';
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			inquiry: {
				inquiryType: '',
				title: '',
				content: '',
				file: '',
			},
			onEdit: false,
			editInquiryId: '',
		};
	},
	created() {
		if (!isNaN(this.$route.params.id)) {
			this.initEditForm();
			this.onEdit = true;
		}
	},
	methods: {
		async submitInquiry() {
			try {
				const inquiryData = {
					userId: this.$store.getters['userStore/getId'],
					inquiryType: this.inquiry.inquiryType,
					title: this.inquiry.title,
					content: this.inquiry.content,
				};

				await registerInquiry(inquiryData);
				this.initForm();

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">1대1 문의 등록 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});

				this.$router.push('/account/inquiry-list');
			} catch (error) {
				const errorMessage = error.data;

				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${errorMessage}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		async initEditForm() {
			try {
				this.editInquiryId = this.$route.params.id;
				const { data } = await getInquiryItemDetail(this.editInquiryId);
				this.inquiry = data;
			} catch (error) {
				const errorMessage = error.data;

				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${errorMessage}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
		initForm() {
			this.inquiry.inquiryType = '';
			this.inquiry.title = '';
			this.inquiry.content = '';
			this.inquiry.file = '';
		},
		cancelEdit() {
			this.$router.push('/account/inquiry-list');
		},
		async updateInquiryItem() {
			try {
				const updatedInquiryData = {
					id: this.editInquiryId,
					userId: this.$store.getters['userStore/getId'],
					inquiryType: this.inquiry.inquiryType,
					title: this.inquiry.title,
					content: this.inquiry.content,
					file: this.inquiry.file,
				};

				await updateInquiry(updatedInquiryData);
				this.initForm();

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">1대1 문의 수정 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});

				this.$router.push('/account/inquiry-list');
			} catch (error) {
				const errorMessage = error.data;

				Swal.fire({
					position: 'center',
					icon: 'error',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">${errorMessage}<div>`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/inquiryForm.scss';
</style>
