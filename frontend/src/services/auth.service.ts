import api from "../lib/axios";
import type {
  AuthResponse,
} from "../types/auth.types";

class AuthService {
  async googleLogin(
    token: string
  ): Promise<AuthResponse> {
    const response =
      await api.post<AuthResponse>(
        "/auth/google",
        {
          token,
        }
      );

    return response.data;
  }
}

export default new AuthService();