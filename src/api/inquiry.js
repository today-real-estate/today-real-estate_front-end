import { instanceWithAuth } from '@/api/index';

function registerInquiry(inquiryData) {
	return instanceWithAuth.post('/inquiries/create', inquiryData);
}

function getInquiryList(params) {
	return instanceWithAuth.get('/inquiries', { params: params });
}

function getInquiryItemDetail(inquiryId) {
	return instanceWithAuth.get(`/inquiries/detail/${inquiryId}`);
}

function deleteInquiry(inquiryId) {
	return instanceWithAuth.delete('/inquiries/delete', inquiryId);
}

export { registerInquiry, getInquiryList, getInquiryItemDetail, deleteInquiry };
