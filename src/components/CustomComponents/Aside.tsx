import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DownloadApp from "./DownloadApp";
import { useTheme } from "@mui/material";

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
      <Stack direction={{ xs: "column", sm: "row" }}>
        {children}
        <DownloadApp />
      </Stack>
    </Box>
  );
};

export default Aside;
