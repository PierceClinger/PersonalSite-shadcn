export interface EmailRequest {
    name: string;
    email: string;
    message: string;
}

export interface EmailResponse {
    success: boolean;
    message: string;
}