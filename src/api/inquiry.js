import { instanceWithAuth } from '@/api/index';

function getAllInquiryList() {
	return instanceWithAuth.get('/inquiries/admin');
}

function registerInquiry(inquiryData) {
	return instanceWithAuth.post('/inquiries/create', inquiryData);
}

function getInquiryList(params) {
	return instanceWithAuth.get('/inquiries', { params: params });
}

function getInquiryItemDetail(inquiryId) {
	return instanceWithAuth.get(`/inquiries/detail/${inquiryId}`);
}

function updateInquiry(updatedInquiryData) {
	return instanceWithAuth.put('/inquiries/update', updatedInquiryData);
}

function deleteInquiry(inquiryId) {
	return instanceWithAuth.delete(`/inquiries/delete/${inquiryId}`);
}

function postInquiryComment(inquiryCommentData) {
	return instanceWithAuth.post('/inquiries/answer', inquiryCommentData);
}

function updateInquiryComment(inquiryCommentData) {
	return instanceWithAuth.put('/inquiries/answer', inquiryCommentData);
}

function deleteInquiryComment(inquiryCommentData) {
	return instanceWithAuth.delete('/inquiries/answer', {
		params: inquiryCommentData,
	});
}

export {
	getAllInquiryList,
	registerInquiry,
	getInquiryList,
	getInquiryItemDetail,
	updateInquiry,
	deleteInquiry,
	postInquiryComment,
	updateInquiryComment,
	deleteInquiryComment,
};
