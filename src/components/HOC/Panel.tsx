import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface PanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: any;
}

const Panel: React.FC<PanelProps> = ({
  children,
  value,
  index,
  sx,
  ...other
}) => {
  const theme = useTheme();
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{
        paddingBlock: theme.spacing(2),
        minHeight: "500px",
        overflow: "hidden",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

export default Panel;
