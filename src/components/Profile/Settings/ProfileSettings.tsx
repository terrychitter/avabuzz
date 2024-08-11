import NakedContentContainer from "../../CustomComponents/NakedContentContainer";
import OptionsList from "../../CustomComponents/OptionsList";
import MainContentContainer from "../../HOC/MainContentContainer";
import ClearCacheButton from "./ClearCacheButton";
import SettingsControlItem from "./SettingsControlItem";
import SettingsLinkGroup from "./SettingsLinkGroup";
import SettingsLinkItem from "./SettingsLinkItem";

const ProfileSettings = () => {
  return (
    <MainContentContainer>
      <NakedContentContainer title="Settings">
        <OptionsList>
          <SettingsLinkItem link="appearance" title="Appearance" />
          <SettingsLinkGroup>
            <SettingsLinkItem
              link="account-management"
              title="Account Management"
            />
            <SettingsLinkItem link="notifications" title="Notifications" />
            <SettingsLinkItem link="privacy" title="Privacy Settings" />
            <SettingsLinkItem
              link="blocked-users"
              title="Manage Blocked Users"
            />
          </SettingsLinkGroup>
          <SettingsLinkGroup>
            <SettingsLinkItem link="feedback" title="Feedback" />
          </SettingsLinkGroup>
          <SettingsLinkGroup>
            <SettingsLinkItem link="guidelines" title="Community Guidelines" />
            <SettingsLinkItem link="about" title="About Avabuzz" />
            <SettingsControlItem
              title="Clear Cache"
              controlItem={<ClearCacheButton />}
            />
          </SettingsLinkGroup>
        </OptionsList>
      </NakedContentContainer>
    </MainContentContainer>
  );
};

export default ProfileSettings;
