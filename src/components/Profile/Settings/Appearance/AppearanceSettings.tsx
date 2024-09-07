import { Stack, Typography } from "@mui/material";
import NakedContentContainer from "../../../CustomComponents/NakedContentContainer";
import AnimatedPage from "../../../HOC/AnimatedPage";
import ItemList from "../../../HOC/ItemList";
import MainContentContainer from "../../../HOC/MainContentContainer";

const AppearanceSettings = () => {
  return (
    <AnimatedPage>
      <MainContentContainer>
        <NakedContentContainer title="Appearance">
          <Stack direction={"column"} gap={3}>
            <Typography sx={{ paddingInlineStart: 2 }} fontWeight={"bold"}>
              Select a theme to apply it
            </Typography>
            <ItemList sx={{ gap: 6, paddingInline: 2 }} items={null}>
              {/* Render the ThemeList component */}
              {/* {ThemeList()} */}
            </ItemList>
          </Stack>
        </NakedContentContainer>
      </MainContentContainer>
    </AnimatedPage>
  );
};

export default AppearanceSettings;
