import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DownloadApp from "../CustomComponents/DownloadApp";
import theme from "../../theme/abz_default_theme";

interface AsideProps {
  children?: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
  return (
    <Box
      component={"aside"}
      paddingInline={{ sm: 1, md: 2 }}
      paddingBlock={1}
      height={"100%"}
      sx={{
        backgroundColor: theme.palette.custom.lightBlack,
        position: "sticky", // Make the sidebar sticky
        top: 0, // Stick the sidebar to the top of the viewport
        alignSelf: "start", // Ensure the sidebar aligns properly in the flex container
      }}
    >
      <Stack direction={"row"}>
        {children}
        <DownloadApp />
      </Stack>
    </Box>
  );
};

export default Aside;
