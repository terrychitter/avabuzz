import React from "react";
import MetaIcon from "./ProfileMetaIcon";

const CountryIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MetaIcon type="country" children={children} placement="right" />;
};

export default CountryIcon;
