import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DownloadApp from "./DownloadApp";
import { Grid, useTheme } from "@mui/material";
import AsideNav from "./AsideNav";
import PostNow from "./PostNow";

interface AsideProps {
  children?: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      component={"aside"}
      height={"100%"}
      sx={{
        position: "sticky",
        top: 0,
        alignSelf: "start",
        borderRadius: 1,
        padding: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack direction={"column"} gap={1}>
        <Grid container spacing={1}>
          <Grid item sm={4} md={12}>
            <AsideNav />
          </Grid>
          <Grid item sm={8} md>
            <PostNow />
          </Grid>
        </Grid>
        {children}
        <DownloadApp />
      </Stack>
    </Box>
  );
};

export default Aside;
