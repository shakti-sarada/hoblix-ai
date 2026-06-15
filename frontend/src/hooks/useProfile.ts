import { useProfileStore } from "../store/profile.store";

export const useProfile = () => {
  return useProfileStore();
};