import { useState } from "react";

import type { Profile } from "../../types/profile.types";

interface Props {
  profile: Profile;
  open: boolean;
  onClose: () => void;
  onSave: (data: Partial<Profile>) => Promise<void>;
}

const EditProfileModal = ({
  profile,
  open,
  onClose,
  onSave,
}: Props) => {
  const [formData, setFormData] =
    useState({
      full_name:
        profile.full_name || "",
      organization:
        profile.organization || "",
      occupation:
        profile.occupation || "",
      experience:
        profile.experience || "",
      location:
        profile.location || "",
      phone:
        profile.phone || "",
    });

  if (!open) return null;

  const handleChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave =
    async () => {
      await onSave(formData);
      onClose();
    };

  return (
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/50
      "
    >
      <div
        className="
        glass
        w-full max-w-2xl
        rounded-3xl
        p-6
        "
      >
        <h2 className="mb-6 text-2xl font-bold text-white">
          Edit Profile
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <InputField
            label="Full Name"
            value={
              formData.full_name
            }
            onChange={(value) =>
              handleChange(
                "full_name",
                value
              )
            }
          />

          <InputField
            label="Organization"
            value={
              formData.organization
            }
            onChange={(value) =>
              handleChange(
                "organization",
                value
              )
            }
          />

          <InputField
            label="Occupation"
            value={
              formData.occupation
            }
            onChange={(value) =>
              handleChange(
                "occupation",
                value
              )
            }
          />

          <InputField
            label="Experience"
            value={
              formData.experience
            }
            onChange={(value) =>
              handleChange(
                "experience",
                value
              )
            }
          />

          <InputField
            label="Location"
            value={
              formData.location
            }
            onChange={(value) =>
              handleChange(
                "location",
                value
              )
            }
          />

          <InputField
            label="Phone"
            value={
              formData.phone
            }
            onChange={(value) =>
              handleChange(
                "phone",
                value
              )
            }
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
            rounded-xl
            border
            border-white/10
            px-4
            py-2
            text-white
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
            rounded-xl
            bg-indigo-600
            px-4
            py-2
            text-white
            hover:bg-indigo-500
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (
    value: string
  ) => void;
}

const InputField = ({
  label,
  value,
  onChange,
}: InputFieldProps) => (
  <div>
    <label className="mb-2 block text-sm text-slate-400">
      {label}
    </label>

    <input
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value
        )
      }
      className="
      w-full
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-4
      py-3
      text-white
      "
    />
  </div>
);

export default EditProfileModal;