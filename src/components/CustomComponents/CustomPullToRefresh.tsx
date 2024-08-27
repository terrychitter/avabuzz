import React, { ReactElement } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import { tailspin } from "ldrs";
import { useTheme } from "@mui/material";

interface CustomPullToRefreshProps {
  children: React.ReactNode;
}

async function handleRefresh() {
  // Refresh the page
  window.location.reload();
}

const CustomPullToRefresh: React.FC<CustomPullToRefreshProps> = ({
  children,
}) => {
  const theme = useTheme();
  tailspin.register();

  return (
    <PullToRefresh
      onRefresh={handleRefresh}
      resistance={2.5}
      maxPullDownDistance={100}
      pullDownThreshold={100}
      pullingContent={""}
      refreshingContent={
        <l-tailspin size={30} color={theme.palette.primary.main} />
      }
    >
      {children as ReactElement}
    </PullToRefresh>
  );
};

export default CustomPullToRefresh;
