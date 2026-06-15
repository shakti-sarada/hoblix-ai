import { create } from "zustand";
import type { Profile } from "../types/profile.types";

interface ProfileState {
  profile: Profile | null;
  loading: boolean;

  setProfile: (
    profile: Profile
  ) => void;

  setLoading: (
    loading: boolean
  ) => void;
}

export const useProfileStore =
  create<ProfileState>((set) => ({
    profile: null,
    loading: false,

    setProfile: (profile) =>
      set({ profile }),

    setLoading: (loading) =>
      set({ loading }),
  }));