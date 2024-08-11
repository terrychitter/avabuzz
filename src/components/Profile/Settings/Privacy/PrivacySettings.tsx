import { Switch } from "@mui/material";
import NakedContentContainer from "../../../CustomComponents/NakedContentContainer";
import OptionsList from "../../../CustomComponents/OptionsList";
import MainContentContainer from "../../../HOC/MainContentContainer";
import SettingsControlItem from "../SettingsControlItem";
import SettingsLinkGroup from "../SettingsLinkGroup";

const PrivacySettings = () => {
  return (
    <MainContentContainer>
      <NakedContentContainer title="Privacy Settings">
        <OptionsList>
          <SettingsLinkGroup heading="Image Settings">
            <SettingsControlItem
              title="Add water mark when uploading images"
              controlItem={<Switch defaultChecked />}
            />
          </SettingsLinkGroup>
          <SettingsLinkGroup heading="Personal Information Settings">
            <SettingsControlItem
              title="Show posts I've published in my profile"
              controlItem={<Switch defaultChecked />}
            />
            <SettingsControlItem
              title="Show comments I've published in my profile"
              controlItem={<Switch defaultChecked />}
            />
            <SettingsControlItem
              title="Show favorites in my profile"
              controlItem={<Switch defaultChecked />}
            />
            <SettingsControlItem
              title="Show the users I follow on my profile"
              controlItem={<Switch defaultChecked />}
            />
            <SettingsControlItem
              title="Show my followers on my profile"
              controlItem={<Switch defaultChecked />}
            />
          </SettingsLinkGroup>
          <SettingsLinkGroup heading="Recommendation Settings">
            <SettingsControlItem
              title="Agree to recieve promotional messages via email"
              controlItem={<Switch defaultChecked />}
            />
          </SettingsLinkGroup>
        </OptionsList>
      </NakedContentContainer>
    </MainContentContainer>
  );
};

export default PrivacySettings;
