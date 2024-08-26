import React, { ReactElement } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

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
  return (
    <PullToRefresh onRefresh={handleRefresh} pullingContent={""}>
      {children as ReactElement}
    </PullToRefresh>
  );
};

export default CustomPullToRefresh;
