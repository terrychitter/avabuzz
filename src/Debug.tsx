import {
  Container,
  Grid,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Debug = () => {
  const theme = useTheme();
  const isMediumScreenOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rounded" animation={"wave"} height={110} />
        </Grid>
        {isMediumScreenOrLarger && (
          <Grid item xs={12} md={6}>
            <Skeleton variant="rounded" animation={"wave"} height={110} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Debug;
