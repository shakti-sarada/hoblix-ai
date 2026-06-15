export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (
    user: User,
    token: string
  ) => void;

  logout: () => void;
}