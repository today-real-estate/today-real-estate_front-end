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
				<button class="table-footer__delete-btn" @click="clickDeleteBtn">
					<AIcon type="delete" /> 삭제
				</button>
			</li>
		</ul>
		<div class="inquiry-detail__footer">
			<RouterLink to="/account/inquiry-list" class="footer__back-btn">
				목록
			</RouterLink>
		</div>
	</div>
</template>

<script>
import { getInquiryItemDetail, deleteInquiry } from '@/api/inquiry';

export default {
	data() {
		return {
			inquiry: {},
		};
	},
	created() {
		this.getInquiryDetail();
	},
	methods: {
		async getInquiryDetail() {
			try {
				const inquiryId = this.$route.params.id;
				const { data } = await getInquiryItemDetail(inquiryId);

				this.inquiry = data;
				console.log('[1대1 문의 상세 정보 조회]');
			} catch (error) {
				console.log(error);
			}
		},
		async clickDeleteBtn() {
			try {
				if (confirm('삭제하시겠습니까?')) {
					await deleteInquiry(this.inquiry.id);
					this.$router.push('/account/inquiry-list');
				}
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
