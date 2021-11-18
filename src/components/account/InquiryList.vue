<template>
	<div class="inquiry-list">
		<ul class="inquiry-list__inner">
			<li class="inquiry-list__header">
				<div class="header__type">문의유형</div>
				<div class="header__title">제목</div>
				<div class="header__date">등록일</div>
				<div class="header__answer">답변상태</div>
			</li>
			<li
				class="inquiry-list__item"
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
