import React from "react";
import { Divider, Box } from "@mui/material";

interface OptionsListProps {
  children?: React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({ children }) => {
  return (
    <Box paddingInline={2}>
      {children &&
        React.Children.map(children, (child, index) => (
          <>
            {child}
            {index !== (children as React.ReactElement[]).length - 1 && (
              <Divider sx={{ marginBlock: 2 }} />
            )}
          </>
        ))}
    </Box>
  );
};

export default OptionsList;
