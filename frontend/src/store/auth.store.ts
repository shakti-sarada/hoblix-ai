import { create } from "zustand";
import type {
  AuthState,
  User,
} from "../types/auth.types";
import { storage } from "../utils/storage";

export const useAuthStore =
  create<AuthState>((set) => ({
    user: storage.getUser(),
    token: storage.getToken(),
    isAuthenticated:
      !!storage.getToken(),

    login: (
      user: User,
      token: string
    ) => {
      storage.setUser(user);
      storage.setToken(token);

      set({
        user,
        token,
        isAuthenticated: true,
      });
    },

    logout: () => {
      storage.clear();

      set({
        user: null,
        token: null,
        isAuthenticated: false,
      });
    },
  }));