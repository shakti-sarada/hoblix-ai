import type { Profile } from "../../types/profile.types";

interface Props {
  profile: Profile;
}

const ProfileCard = ({
  profile,
}: Props) => {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-bold">
        Profile
      </h2>

      <div className="space-y-2">
        <p>
          <strong>Name:</strong>{" "}
          {profile.full_name}
        </p>

        <p>
          <strong>Organization:</strong>{" "}
          {profile.organization}
        </p>

        <p>
          <strong>Occupation:</strong>{" "}
          {profile.occupation}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {profile.location}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;