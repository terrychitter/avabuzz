import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IconConfetti } from "@tabler/icons-react";
import Button from "../CustomComponents/AnimatedButton";
import Link from "../CustomComponents/CustomLink";

interface EventsProps {
  background: string;
}

const Events: React.FC<EventsProps> = ({ background }) => {
  const gradient =
    "linear-gradient(90deg, rgba(0,0,0,0.6629026610644257) 3%, rgba(0,0,0,0) 42%)";
  const filter =
    "progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000',endColorstr='#000000',GradientType=1)";
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "110px",
        backgroundImage: `url(${background}), ${gradient}`,
        backgroundSize: "cover, cover",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundBlendMode: "overlay",
        filter: filter,
        border: `2px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(1),
        borderRadius: theme.spacing(2),
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"} height={"100%"}>
        {/* Left side of the group */}
        <Stack direction={"column"} color={"white"}>
          <IconConfetti size={"1.2rem"} />
          <Stack direction={"column"}>
            <Typography color={"primary"} fontWeight={"bold"}>
              Dance Competition!
            </Typography>
            <Typography fontSize={"0.8rem"}>1 Sep - 3 Sep 2021</Typography>
          </Stack>
        </Stack>
        {/* Right side of the group */}
        <Box alignContent={"end"}>
          <Link to="/post/:post_id">
            <Button>Check out</Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Events;
