import React from "react";
import MetaIcon from "./MetaIcon";

const GenderIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MetaIcon
      type="gender"
      children={children}
      variant="square"
      width={20}
      height={20}
      sx={{
        marginBlockStart: 0.5,
        marginInlineStart: 0.2,
      }}
    />
  );
};

export default GenderIcon;
