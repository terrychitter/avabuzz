import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import ContentPaper from "../HOC/ContentPaper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "../CustomComponents/AnimatedButton";
import Link from "../CustomComponents/CustomLink";
import Typography from "@mui/material/Typography";
import { Color } from "color-thief-react";
import { adjustVibrancy, hexToRgba } from "../../utils/ColorUtils";
import GroupMembersGrouped from "./GroupMembersGrouped";

const Group = () => {
  const imageUrl =
    "https://media.giphy.com/media/K0BdoHFYz2tU7kynzV/giphy.gif?cid=790b7611zjyg1a08x7mj5mc0xadqhqnaqip6ny2ppy17j0jz&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  const gradient =
    "linear-gradient(90deg, rgba(0,0,0,0.6629026610644257) 3%, rgba(0,0,0,0) 42%)";
  const filter =
    "progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#000000',GradientType=1)";

  // Fetch the main theme for use
  const mainTheme = useTheme();

  return (
    <Color src={imageUrl} format="hex" crossOrigin="anonymous">
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error loading image</div>;

        // Make the color more vibrant
        const vibrantColor = adjustVibrancy(data, 0.3, 0.2);

        // Get the border color with 0.6 alpha
        const borderColor = hexToRgba(vibrantColor, 0.6);

        // Create a new theme based on the existing theme
        const theme = createTheme({
          ...mainTheme,
          palette: {
            ...mainTheme.palette,
            primary: {
              main: vibrantColor || "#000000",
            },
          },
        });

        return (
          <ThemeProvider theme={theme}>
            <ContentPaper
              sx={{
                height: "110px",
                backgroundImage: `url(${imageUrl}), ${gradient}`,
                backgroundSize: "cover, cover",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundBlendMode: "overlay",
                filter: { filter },
                border: `2px solid ${borderColor}`,
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                height={"100%"}
              >
                {/* Left side of the group */}
                <Stack direction={"column"}>
                  <Typography fontSize={"0.7rem"}>My group</Typography>
                  <Stack direction={"column"}>
                    <Typography color={"primary"} fontWeight={"bold"}>
                      The Leftovers
                    </Typography>
                    <GroupMembersGrouped />
                  </Stack>
                </Stack>
                {/* Right side of the group */}
                <Box alignContent={"end"}>
                  <Link to="/groups/group_id">
                    <Button>View Group</Button>
                  </Link>
                </Box>
              </Stack>
            </ContentPaper>
          </ThemeProvider>
        );
      }}
    </Color>
  );
};

export default Group;
