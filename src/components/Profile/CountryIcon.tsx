import { Avatar } from "@mui/material";
import React from "react";

interface CountryIconProps {
  children?: React.ReactNode;
}

const CountryIcon: React.FC<CountryIconProps> = ({ children }) => {
  const countryImagePath = "src/assets/countries/" + children + ".png";
  console.log(countryImagePath);
  return (
    <Avatar
      alt="{children}"
      src={countryImagePath}
      sx={{ width: 24, height: 24 }}
    ></Avatar>
  );
};

export default CountryIcon;
