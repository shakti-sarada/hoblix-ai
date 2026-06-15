import api from "../lib/axios";

import type {
  OnboardingRequest,
  OnboardingResponse,
} from "../types/onboarding.types";

class OnboardingService {
  async sendMessage(
    payload: OnboardingRequest
  ): Promise<OnboardingResponse> {
    const response =
      await api.post<
        OnboardingResponse
      >(
        "/onboarding/message",
        payload
      );

    return response.data;
  }
}

export default new OnboardingService();