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
					userId: this.$store.state.id,
					inquiryType: this.inquiryType,
					title: this.title,
					content: this.content,
				};
				const response = await registerInquiry(inquiryData);

				console.log('[게시물 등록 완료]', response);

				this.initForm();
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
$light-dark: #3a3a3a;
$blue-color: #326cf9;

.inquiry-container {
	.inquiry-form {
		max-width: 850px;
		margin: 0 auto;

		.inquiry-form__desc {
			padding: 50px 0;

			p {
				margin: 0;
				font-size: 24px;
				font-weight: 300;
				text-align: center;

				strong {
					font-weight: 300;
					color: $blue-color;
				}
			}
		}
		.inquiry-form__list {
			border-bottom: 1px solid rgb(231, 231, 231);
			border-top: 1px solid rgb(231, 231, 231);
			.inquiry-form__item {
				display: flex;
				align-items: center;
				padding: 16px 0px;
				border-bottom: 1px solid rgb(231, 231, 231);

				#inquiry-type-select {
					flex-grow: 1;
					width: 100%;
					height: 44px;
					padding: 0px 8px 0px 10px;
					border: 1px solid rgb(223, 223, 223);
					border-radius: 3px;
					box-sizing: border-box;
					background: url('~@/assets/select_arrow.svg') right 8px center / 10px
						6px no-repeat rgb(255, 255, 255);
					outline: none;
					font-size: 14px;
					font-weight: 300;
					color: rgb(76, 76, 76);
					appearance: none;
				}
				.item__title {
					width: 130px;
					font-size: 15px;
					font-weight: 300;
					color: $light-dark;
					text-align: center;
				}
				.item__input {
					flex-grow: 1;
					height: 44px;
					width: 100%;
					padding: 0px 16px;
					border: 1px solid rgb(223, 223, 223);
					border-radius: 3px;
					background-color: rgb(255, 255, 255);
					font-size: 14px;
					font-weight: 300;
					color: rgb(76, 76, 76);
				}
				.item__textarea {
					flex-grow: 1;
					width: 100%;
					height: 263px;
					padding: 16px;
					border: 1px solid rgb(223, 223, 223);
					border-radius: 3px;
					background-color: rgb(255, 255, 255);
					font-size: 14px;
					font-weight: 300;
					color: rgb(76, 76, 76);
					resize: none;
				}
				.item__uploader {
					flex-grow: 1;
					width: 100%;
					display: flex;
					flex-direction: column;

					.item__uploader__input {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 106px;
						height: 106px;
						border-radius: 3px;
						border: 1px solid rgb(223, 223, 223);
						cursor: pointer;
					}
					.item__uploader__desc {
						margin-top: 16px;

						p {
							margin-bottom: 0;
							font-size: 12px;
							font-weight: 300;
							color: $light-dark;
						}
					}
				}
			}
		}
		.inquiry-form__footer {
			display: flex;
			justify-content: center;
			margin: 50px 0;

			.inquiry-form__submit-btn {
				color: rgb(255, 255, 255);
				font-size: 15px;
				font-weight: 400;
				width: 216px;
				height: 52px;
				line-height: 52px;
				border: 0px;
				border-radius: 2px;
				background-color: rgba(50, 108, 249, 0.9);
				transition: all 150ms ease-out 0s;
				cursor: pointer;

				&:hover {
					background-color: rgb(50, 108, 249);
				}
			}
		}
	}

	.contact-info {
		max-width: 850px;
		margin: 0px auto 20px;
		padding: 25px 0px;
		border: 1px solid rgb(231, 231, 231);
		border-radius: 2px;
		text-align: center;

		p {
			margin-bottom: 0;

			&:nth-child(1) {
				font-size: 18px;
				font-weight: 300;
				line-height: 27px;
				color: $light-dark;
			}
			&:nth-child(2) {
				margin-top: 4px;
				font-size: 14px;
				font-weight: 300;
				line-height: 24px;
				color: rgb(134, 134, 134);
			}

			strong {
				font-weight: 300;
				color: $blue-color;
			}
		}
	}
}
</style>
