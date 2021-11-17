import { instance } from '@/api/index';

function registerInquiry(inquiryData) {
	return instance.post('/inquiry', inquiryData);
}

export { registerInquiry };
