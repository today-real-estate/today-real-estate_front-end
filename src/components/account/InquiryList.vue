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
			<li class="table__item" v-for="inquiry in inquiries" :key="inquiry.id">
				<div class="item__type">{{ inquiry.inquiryType }}</div>
				<div class="item__title">
					<RouterLink :to="`/account/inquiry-list/detail/${inquiry.id}`">
						{{ inquiry.title }}
					</RouterLink>
				</div>
				<div class="item__date">
					{{
						inquiry.createdDate
							? new Date(inquiry.createdDate).toLocaleDateString()
							: new Date(inquiry.modifiedDate).toLocaleDateString()
					}}
				</div>
				<div class="item__answer">
					{{ inquiry.complete ? '답변완료' : '답변예정' }}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		inquiries: {
			type: Array,
			required: false,
		},
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import './scss/inquiryList.scss';
</style>
