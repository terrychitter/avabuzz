import React from "react";
import MetaIcon from "./MetaIcon";

const SexualityIcon: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MetaIcon type="sexuality" children={children} />;
};

export default SexualityIcon;
