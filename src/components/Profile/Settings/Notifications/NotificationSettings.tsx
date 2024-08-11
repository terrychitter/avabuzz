import { Switch } from "@mui/material";
import NakedContentContainer from "../../../CustomComponents/NakedContentContainer";
import OptionsList from "../../../CustomComponents/OptionsList";
import MainContentContainer from "../../../HOC/MainContentContainer";
import SettingsControlItem from "../SettingsControlItem";
import SettingsLinkGroup from "../SettingsLinkGroup";
import AnimatedPage from "../../../HOC/AnimatedPage";

const NotificationSettings = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Notifications">
          <OptionsList>
            <SettingsLinkGroup heading="Relevant to you">
              <SettingsControlItem
                title="New comments or replies"
                controlItem={<Switch defaultChecked />}
              />
              <SettingsControlItem
                title="New likes"
                controlItem={<Switch defaultChecked />}
              />
              <SettingsControlItem
                title="New Followers"
                controlItem={<Switch defaultChecked />}
              />
            </SettingsLinkGroup>
            <SettingsLinkGroup heading="In-App Notifications">
              <SettingsControlItem
                title="Event Notifications"
                controlItem={<Switch defaultChecked />}
              />
            </SettingsLinkGroup>
          </OptionsList>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default NotificationSettings;
