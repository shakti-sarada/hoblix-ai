import { useState } from "react";

import type { Profile } from "../../types/profile.types";

import ProfileCard from "./ProfileCard";
import ProfileProgress from "./ProfileProgress";
import EditProfileModal from "./EditProfileModal";

import profileService from "../../services/profile.service";

interface Props {
  profile: Profile;
}

const ProfileView = ({
  profile,
}: Props) => {
  const [isEditing, setIsEditing] =
    useState(false);

  const [currentProfile, setCurrentProfile] =
    useState(profile);

  const handleSave =
    async (
      data: Partial<Profile>
    ) => {

      console.log("PROFILE:", currentProfile);
      console.log("UPDATE DATA:", data);

      try {
        const updatedProfile =
          await profileService.updateProfile(
            currentProfile.user_id,
            data
          );

        setCurrentProfile(
          updatedProfile
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">

      <ProfileProgress
        completed={
          currentProfile.onboarding_completed
        }
        percentage={100}
      />

      <ProfileCard
        profile={currentProfile}
      />

      <div className="grid gap-4 md:grid-cols-2">

        <InfoCard
          title="Experience"
          value={
            currentProfile.experience
          }
        />

        <InfoCard
          title="Skills"
          value={
            Array.isArray(
              currentProfile.skills
            )
              ? currentProfile.skills.join(
                  ", "
                )
              : currentProfile.skills
          }
        />

        <InfoCard
          title="Workspace Needs"
          value={
            currentProfile.workspace_needs
          }
        />

        <InfoCard
          title="Work Timing"
          value={
            currentProfile.work_timing
          }
        />

        <InfoCard
          title="Contact Channel"
          value={
            currentProfile.contact_channel
          }
        />

        <InfoCard
          title="Phone"
          value={
            currentProfile.phone
          }
        />

      </div>

      <div className="flex justify-end">
        <button
          onClick={() =>
            setIsEditing(true)
          }
          className="
          rounded-xl
          bg-indigo-600
          px-5
          py-3
          text-white
          hover:bg-indigo-500
          "
        >
          Edit Profile
        </button>
      </div>

      <EditProfileModal
        profile={currentProfile}
        open={isEditing}
        onClose={() =>
          setIsEditing(false)
        }
        onSave={handleSave}
      />

    </div>
  );
};

interface InfoCardProps {
  title: string;
  value: string | null;
}

const InfoCard = ({
  title,
  value,
}: InfoCardProps) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="mb-2 text-sm text-slate-400">
      {title}
    </p>

    <p className="text-white">
      {value || "-"}
    </p>
  </div>
);

export default ProfileView;