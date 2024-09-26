import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the profile data
export interface UserType {
  active_accessories: {
    active_badge_url: string;
    active_banner_url: string;
    active_profile_picture_border_url: string;
  };
  biography: string | null;
  birth_date: string | null;
  country: string | null;
  created_at: string;
  email: string;
  friend_code: string | null;
  gender: string | null;
  orientation: string | null;
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
interface UserContextType {
  user: UserType | null;
  updateUser: (newData: Partial<UserType> | null) => void;
}

// Create the context with a default value of undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider props type
interface UserProviderProps {
  children: ReactNode;
  userData: UserType | null;
}

// Create the provider component
const UserProvider: React.FC<UserProviderProps> = ({ children, userData }) => {
  const [user, setUser] = useState<UserType | null>(userData);

  const updateUser = (newData: Partial<UserType> | null) => {
    if (newData === null) {
      setUser(null);
    } else {
      setUser((prevUser) => (prevUser ? { ...prevUser, ...newData } : null));
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
