import axios from "axios";
import type { EmailRequest, EmailResponse } from "../../common/dataStructures/email";

const baseUrl = 'https://www.pierceclinger.com';

export class ApiService {
    static async sendEmail(data: EmailRequest): Promise<EmailResponse> {
        try {
            const response = await axios.post<EmailResponse>(`${baseUrl}/api/email`, data);
            return response.data;
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }
    }
}
