import React from "react";
import Link from "./CustomLink";
import Box from "@mui/material/Box";

interface LogoProps {
  width?: string;
  maxWidth?: string;
}

const Logo: React.FC<LogoProps> = ({ width, maxWidth }) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        component="img"
        src="./logo.png"
        alt="Logo"
        sx={{
          height: "auto",
          width: width,
          maxWidth: maxWidth,
        }}
      />
    </Link>
  );
};

export default Logo;
