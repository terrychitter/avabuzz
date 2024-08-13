import React from "react";
import MainContentContainer from "../../HOC/MainContentContainer";
import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import ProfileInformationForm from "./ProfileInformationForm";

const EditProfile = () => {
  return (
    <MainContentContainer>
      <NakedContentContainer title="Profile Information">
        {/* Profile Information Form */}
        <ProfileInformationForm />
      </NakedContentContainer>
    </MainContentContainer>
  );
};

export default EditProfile;
