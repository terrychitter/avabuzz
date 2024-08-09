import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DownloadApp from "./DownloadApp";

interface AsideProps {
  children?: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
  return (
    <Box
      component={"aside"}
      height={"100%"}
      sx={{
        position: "sticky",
        top: 0,
        alignSelf: "start",
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
