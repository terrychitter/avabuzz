import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import logo from "/icons/logo.png";

interface AuthLayoutProps {
  heroContent?: string;
  formComponent: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  heroContent,
  formComponent,
}) => {
  // Use theme
  const theme = useTheme();

  // Media query for advanced media queries
  const isLargerScreenOrMore = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container height={"100vh"}>
      {isLargerScreenOrMore && (
        <Grid
          item
          xs={12}
          lg={7}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={logo} width={"100%"} style={{ maxWidth: "300px" }} />
            {heroContent && (
              <Typography variant="h3" component="h2">
                {heroContent}
              </Typography>
            )}
          </Stack>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        lg
        display={isLargerScreenOrMore ? "flex" : "block"}
        paddingBlockStart={isLargerScreenOrMore ? 0 : theme.spacing(3)}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={theme.spacing(3)}
        >
          {!isLargerScreenOrMore && (
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: "100%",
                maxWidth: { xs: "200px", sm: "250px", md: "200px" },
              }}
            />
          )}

          <Container maxWidth="sm">{formComponent}</Container>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
