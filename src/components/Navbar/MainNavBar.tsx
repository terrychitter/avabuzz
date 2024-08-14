import { Box, Stack, useTheme } from "@mui/material";
import Link from "../CustomComponents/CustomLink";
import {
  IconHome,
  IconMessageCircle,
  IconPlanet,
  IconSquareRoundedPlus,
  IconUser,
} from "@tabler/icons-react";

const MainNavBar = () => {
  const theme = useTheme();

  const iconSize = "35px";
  const iconStroke = 1.2;

  return (
    <Box
      position="fixed"
      bottom={0}
      width="100%"
      zIndex={200}
      padding={theme.spacing(1)}
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Link to="/">
          <IconHome size={iconSize} stroke={iconStroke} />
        </Link>
        <Link to="/discover">
          <IconPlanet size={iconSize} stroke={iconStroke} />
        </Link>
        <Link to="/add">
          <IconSquareRoundedPlus size={iconSize} stroke={iconStroke} />
        </Link>
        <Link to="/chat">
          <IconMessageCircle size={iconSize} stroke={iconStroke} />
        </Link>
        <Link to="/profile">
          <IconUser size={iconSize} stroke={iconStroke} />
        </Link>
      </Stack>
    </Box>
  );
};

export default MainNavBar;
