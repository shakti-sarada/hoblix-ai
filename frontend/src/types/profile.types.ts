export interface Profile {
  id: number;
  user_id: number;

  full_name: string;
  organization: string;
  occupation: string;
  experience: string;
  skills: string;

  location: string;
  workspace_needs: string;
  work_timing: string;

  reason_for_coworking: string;
  virtual_office_interest: string;
  community_interest: string;

  contact_channel: string;
  phone: string;

  onboarding_completed: boolean;
}