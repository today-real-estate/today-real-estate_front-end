<template>
	<div class="inquiry-detail">
		<div class="inquiry-detail__info">
			<ul class="info__desc">
				<li>최근 6개월 이내의 문의 내역을 확인하실 수 있습니다.</li>
				<li>
					문의하신 내용에 대한 수정 및 삭제는 답변 등록 이전에 가능합니다.
				</li>
				<li>
					고객센터 답변 가능 시간 : 평일 10:00~18:30 (토, 일요일, 공휴일 휴무)
				</li>
			</ul>
			<RouterLink to="/service/inquiry">1:1 문의하기</RouterLink>
		</div>
		<ul class="inquiry-detail__table">
			<li class="table-header">
				<div class="table-header__main">
					<div class="table-header__type">[{{ inquiry.inquiryType }}]</div>
					<div class="table-header__title">{{ inquiry.title }}</div>
				</div>
				<div class="table-header__date">
					{{ new Date(inquiry.modifiedDate).toLocaleDateString() }}
				</div>
			</li>
			<li class="table__item">
				<div class="item__content">{{ inquiry.content }}</div>
			</li>
			<li class="table-footer">
				<RouterLink
					:to="`/service/inquiry/${inquiry.id}`"
					class="table-footer__edit-btn"
				>
					<AIcon type="edit" /> 수정
				</RouterLink>
				<span class="bar"></span>
				<button class="table-footer__delete-btn" @click="showConfirm">
					<AIcon type="delete" /> 삭제
				</button>
			</li>
		</ul>
		<div class="inquiry-detail__comment-input" v-if="getAuthority == 1">
			<ATextarea
				class="comment-input__textarea"
				v-model="commentText"
				:rows="4"
				placeholder="댓글을 입력하세요."
			/>
			<button class="comment-input__comment-submit-btn" @click="submitComment">
				등록
			</button>
		</div>
		<div class="inquiry-detail__comments">
			<ul class="comments__comment-list">
				<li
					class="comments__comment"
					v-for="comment in inquiry.inquiryAnswer"
					:key="comment.id"
				>
					<div class="comment__main">
						<div class="comment__writer">고객센터</div>
						<div class="comment__content">{{ comment.answerContent }}</div>
					</div>
					<button
						class="comment_delete-btn"
						v-if="getAuthority == 1"
						@click="removeComment(comment.id)"
					>
						<AIcon type="close" />
					</button>
				</li>
			</ul>
		</div>
		<div class="inquiry-detail__footer">
			<RouterLink to="/account/inquiry-list" class="footer__back-btn">
				목록
			</RouterLink>
		</div>
		<AAlert
			v-if="errorMsg"
			message="서버 에러"
			:description="errorMsg"
			type="error"
			show-icon
		/>
	</div>
</template>

<script>
import {
	getInquiryItemDetail,
	deleteInquiry,
	postInquiryComment,
	deleteInquiryComment,
} from '@/api/inquiry';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			inquiry: {},
			errorMsg: '',
			commentText: '',
		};
	},
	computed: {
		...mapGetters('userStore', ['getId', 'getAuthority']),
	},
	created() {
		this.getInquiryDetail();
	},
	methods: {
		showConfirm() {
			const inquiryDetailTable = this;

			this.$confirm({
				title: () => (
					<h1 style="font-size: 18px; font-weight: 200; font-family: 'Spoqa Han Sans Neo', 'sans-serif'; color: #000;">
						정말 삭제하시겠습니까?
					</h1>
				),
				okText: '확인',
				cancelText: '취소',
				onOk() {
					inquiryDetailTable.deleteItem();
				},
				onCancel() {},
				class: 'test',
			});
		},
		async getInquiryDetail() {
			try {
				const inquiryId = this.$route.params.id;
				const { data } = await getInquiryItemDetail(inquiryId);

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
		async deleteItem() {
			try {
				await deleteInquiry(this.inquiry.id);
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
		async submitComment() {
			try {
				const inquiryCommentData = {
					inquiryId: this.inquiry.id,
					answerContent: this.commentText,
				};

				await postInquiryComment(inquiryCommentData);

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">답변 등록 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});

				this.$router.push('/account/inquiry-list');
			} catch (error) {
				console.log(error);
			}
		},
		async removeComment(commentId) {
			try {
				const inquiryCommentData = {
					id: commentId,
					inquiryId: this.inquiry.id,
				};

				await deleteInquiryComment(inquiryCommentData);

				Swal.fire({
					position: 'center',
					icon: 'success',
					width: 350,
					title: `<div style="font-size: 18px; font-family: "Spoqa Han Sans Neo", "sans-serif"; ">답변 삭제 완료<div>`,
					showConfirmButton: false,
					timer: 1500,
				});

				this.$router.push('/account/inquiry-list');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/inquiryDetailTable.scss';
</style>
