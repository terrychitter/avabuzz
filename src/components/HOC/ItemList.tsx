import { Grid, Divider, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

interface ItemListProps {
  children?: React.ReactNode | React.ReactNode[];
  noItemsMessage?: string;
  columns?: {
    xs: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  sx?: any;
}

const ItemList: React.FC<ItemListProps> = ({
  children,
  noItemsMessage = "No items",
  columns = { xs: 1 },
  sx,
}) => {
  const theme = useTheme();

  const getGridItemProps = () => {
    const props: Record<string, number> = {};
    for (const [breakpoint, value] of Object.entries(columns)) {
      props[breakpoint] = 12 / value;
    }
    return props;
  };

  return (
    <Grid container spacing={2} sx={{ ...sx }}>
      {React.Children.count(children) > 0 ? (
        <>
          {React.Children.map(children, (child, index) => (
            <Grid item {...getGridItemProps()} key={index}>
              {child}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" width="100%">
              <Divider sx={{ width: "60%", maxWidth: "200px" }}>
                <Typography color={theme.palette.text.secondary}>
                  End
                </Typography>
              </Divider>
            </Box>
          </Grid>
        </>
      ) : (
        <Grid
          item
          xs={12}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Box>
            <img
              src="/avabuzz_mascot/doughnut-14.png"
              alt="No items"
              style={{ width: 100, height: 100, marginBlockStart: 10 }}
            />
            <Typography
              variant="h6"
              color={theme.palette.text.secondary}
              sx={{ mt: 2 }}
            >
              {noItemsMessage}
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ItemList;
