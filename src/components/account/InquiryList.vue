<template>
	<div class="inquiry-list">
		<div class="inquiry-list__info">
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
		<ul class="inquiry-list__table">
			<li class="table-header">
				<div class="header__type">문의유형</div>
				<div class="header__title">제목</div>
				<div class="header__date">등록일</div>
				<div class="header__answer">답변상태</div>
			</li>
			<li
				class="table__item"
				v-for="inquiry in inquiries"
				:key="inquiry.id"
				@click="showDetail(inquiry.id, inquiry.content)"
			>
				<div class="item__type">{{ inquiry.inquiryType }}</div>
				<div class="item__title">
					{{ inquiry.title }}
				</div>
				<div class="item__date">
					{{ new Date(inquiry.createdDate).toLocaleDateString() }}
				</div>
				<div class="item__answer">
					{{ inquiry.complete ? '답변완료' : '답변예정' }}
				</div>
			</li>
			<template v-if="isShow">
				<div class="inquiry-list__item-detail">
					<p>문의 내용</p>
					<p>{{ targetContents }}</p>
					<div class="item-detail__btns">
						<button>수정</button>
						<button @click="deleteInquiry(targetId)">삭제</button>
					</div>
				</div>
			</template>
		</ul>
	</div>
</template>

<script>
import { deleteInquiry } from '@/api/inquiry';

export default {
	props: {
		inquiries: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isShow: false,
			targetId: '',
			targetContents: '',
		};
	},
	methods: {
		showDetail(id, content) {
			this.isShow = !this.isShow;
			this.targetContents = content;
			this.targetId = id;
		},
		closeDetail() {
			this.isShow = false;
			this.targetContents = '';
		},
		async deleteInquiry(inquiryId) {
			try {
				const inquiryData = {
					id: inquiryId,
				};
				const response = await deleteInquiry(inquiryData);

				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import './scss/inquiryList.scss';
</style>
