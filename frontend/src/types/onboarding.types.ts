export interface OnboardingRequest {
  user_id: number;
  message: string;
}

export interface OnboardingResponse {
  reply: string;
}

export interface OnboardingMessage {
  id: string;
  sender: "user" | "assistant";
  content: string;
}