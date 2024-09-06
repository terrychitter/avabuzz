import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the profile data
export interface Profile {
  active_accessories: {
    active_badge_url: string;
    active_banner_url: string;
    active_profile_picture_border_url: string;
  };
  biography: string;
  birth_date: string;
  country: string;
  created_at: string;
  email: string;
  gender: string;
  orientation: string;
  private_user_id: string;
  name: string;
  public_user_id: string;
  profile_picture_url: string;
  user_stats: {
    follower_count: number;
    following_count: number;
    post_count: number;
  };
  user_type: string;
  username: string;
}

// Define the shape of the context value
interface ProfileContextType {
  profile: Profile;
  updateProfile: (newData: Partial<Profile>) => void;
}

// Create the context with a default value of undefined
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

// Define the provider props type
interface ProfileProviderProps {
  children: ReactNode;
  profileData: Profile;
}

// Create the provider component
const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
  profileData,
}) => {
  const [profile, setProfile] = useState<Profile>(profileData);

  const updateProfile = (newData: Partial<Profile>) => {
    setProfile((prevProfile) => ({ ...prevProfile, ...newData }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the ProfileContext
const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export { ProfileProvider, useProfile };
