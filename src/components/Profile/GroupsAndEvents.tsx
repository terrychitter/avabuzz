import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomCarousel from "../CustomComponents/CustomCarousel";
import { ThemedContent } from "../HOC/ThemedContent";
import Events from "./Events";
import Group from "./Group";

const eventBackgroundUrl =
  "https://media.giphy.com/media/Zvx0Sn91iQ3Odrp8GR/giphy.gif?cid=ecf05e47om8r8eurl5yi43w5zz01g6g9foa561xoq1d7jfmk&ep=v1_gifs_search&rid=giphy.gif&ct=g";
const groupBackgroundUrl =
  "https://media.giphy.com/media/AS9LIFttYzkc0/giphy.gif?cid=ecf05e4740tlgunme2ar7hp32bejdtg5y6kdj3rzad8cpl2t&ep=v1_gifs_search&rid=giphy.gif&ct=g";

const GroupsAndEvents = () => {
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isMediumScreenOrLarger && (
        <Grid container spacing={1}>
          {/* Groups */}
          <Grid item xs={12} md={6}>
            <ThemedContent imageUrl={groupBackgroundUrl}>
              <Group background={groupBackgroundUrl} />
            </ThemedContent>
          </Grid>
          {/* Events */}
          <Grid item xs={12} md={6}>
            <ThemedContent imageUrl={eventBackgroundUrl}>
              <Events background={eventBackgroundUrl} />
            </ThemedContent>
          </Grid>
        </Grid>
      )}
      {!isMediumScreenOrLarger && (
        <CustomCarousel infinite>
          <ThemedContent imageUrl={groupBackgroundUrl}>
            <Group background={groupBackgroundUrl} />
          </ThemedContent>
          <ThemedContent imageUrl={eventBackgroundUrl}>
            <Events background={eventBackgroundUrl} />
          </ThemedContent>
        </CustomCarousel>
      )}
    </>
  );
};

export default GroupsAndEvents;
