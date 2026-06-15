import {
  useEffect,
  useState,
} from "react";

import { useAuth } from "../../hooks/useAuth";

import profileService from "../../services/profile.service";

import type {
  Profile,
} from "../../types/profile.types";

import OnboardingFlow from "../../components/profile/OnboardingFlow";

import ProfileView from "../../components/profile/ProfileView";

const ProfilePage = () => {
  const { user } = useAuth();

  const [profile, setProfile] =
    useState<Profile | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProfile =
      async () => {
        if (!user) {
          setLoading(false);
          return;
        }

        try {
          const data =
            await profileService.getProfile(
              user.id
            );

          setProfile(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    loadProfile();
  }, [user]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <OnboardingFlow />
    );
  }

  if (
    !profile.onboarding_completed
  ) {
    return (
      <OnboardingFlow />
    );
  }

  return (
    <ProfileView
      profile={profile}
    />
  );
};

export default ProfilePage;