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
.inquiry-list {
	.inquiry-list__inner {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		max-width: 1100px;
		margin: 50px auto 0;
		.inquiry-list__header {
			display: flex;
			align-items: center;
			width: 100%;
			height: 60px;
			border-top: 1px solid rgb(34, 34, 34);
			border-bottom: 1px solid rgb(204, 204, 204);
			font-size: 18px;

			.header__type {
				width: 150px;
				margin-left: 72px;
			}
			.header__title {
				width: 500px;
				margin-left: 72px;
			}
			.header__date {
				width: 200px;
				margin-left: 10px;
			}
			.header__answer {
				width: 200px;
				margin-left: 72px;
			}
		}
		.inquiry-list__item {
			display: flex;
			align-items: center;
			width: 100%;
			height: 60px;
			border-bottom: 1px solid rgb(238, 238, 238);
			font-size: 18px;
			cursor: pointer;

			.item__type {
				width: 150px;
				margin-left: 72px;
			}
			.item__title {
				width: 500px;
				margin-left: 72px;
			}
			.item__date {
				width: 200px;
				margin-left: 10px;
			}
			.item__answer {
				width: 200px;
				margin-left: 72px;
			}
		}
		.inquiry-list__item-detail {
			padding: 40px 50px;
			border-bottom: 1px solid rgb(238, 238, 238);
			background-color: rgb(250, 250, 250);
		}
	}
}
</style>
