import { instanceWithAuth } from '@/api/index';

function registerInquiry(inquiryData) {
	return instanceWithAuth.post('/inquiries/create', inquiryData);
}

export { registerInquiry };
