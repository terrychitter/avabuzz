import { Stack } from "@mui/material";
import ContentPaper from "../../HOC/ContentPaper";
import {
  ChatNavItem,
  DiscoverNavItem,
  HomeNavItem,
  ProfileNavItem,
} from "../../Navbar/NavLinkItems";

const AsideNav = () => {
  return (
    <ContentPaper sx={{ paddingBlock: 2, height: "100%" }}>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignContent={"center"}
        textAlign={"center"}
        justifyContent={"space-around"}
        gap={2}
        height={"100%"}
      >
        <HomeNavItem />
        <DiscoverNavItem />
        <ChatNavItem />
        <ProfileNavItem />
      </Stack>
    </ContentPaper>
  );
};

export default AsideNav;
