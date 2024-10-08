import { Grid, Divider, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import CustomPullToRefresh from "../CustomComponents/CustomPullToRefresh";

interface ItemListProps {
  items?: React.ReactNode | React.ReactNode[]; // Allow single or multiple ReactNodes
  noItemsMessage?: string;
  showEndDivider?: boolean;
  pullToRefresh?: boolean;
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
  items = [],
  noItemsMessage = "No items",
  columns = { xs: 1 },
  showEndDivider = true,
  pullToRefresh = false,
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

  const GridContent = () => {
    const itemsArray = items ? React.Children.toArray(items) : [];
    return itemsArray.length > 0 && itemsArray.length !== 0 ? (
      <>
        {itemsArray.map((item, index) => (
          <Grid
            item
            {...getGridItemProps()}
            key={index}
            marginInlineStart={pullToRefresh ? 1 : 0.5}
          >
            {item}
          </Grid>
        ))}
        {showEndDivider && (
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" width="100%">
              <Divider sx={{ width: "60%", maxWidth: "200px" }}>
                <Typography color={theme.palette.text.secondary}>
                  End
                </Typography>
              </Divider>
            </Box>
          </Grid>
        )}
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
    );
  };

  const ItemGrid = () => {
    return (
      <Grid
        container
        spacing={1}
        sx={{
          marginInlineStart: pullToRefresh ? 0 : -1.5,
          ...sx,
        }}
      >
        <GridContent />
      </Grid>
    );
  };

  return pullToRefresh ? (
    <CustomPullToRefresh>
      <ItemGrid />
    </CustomPullToRefresh>
  ) : (
    <ItemGrid />
  );
};

export default ItemList;
