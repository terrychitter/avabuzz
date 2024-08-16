import React from "react";
import ContentPaper from "../HOC/ContentPaper";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";

interface ContentPaperWithHeaderProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  sx?: React.CSSProperties;
}

const ContentPaperWithHeader: React.FC<ContentPaperWithHeaderProps> = ({
  children,
  header,
  sx,
}) => {
  const theme = useTheme();
  return (
    <ContentPaper sx={{ ...sx }}>
      <Stack
        direction={"column"}
        gap={1}
        textAlign={{ xs: "left", sm: "center", md: "left" }}
        paddingInline={theme.spacing(1)}
      >
        <Typography
          variant="h6"
          component="h3"
          fontWeight={"bold"}
          gutterBottom
        >
          {header}
        </Typography>
        {children}
      </Stack>
    </ContentPaper>
  );
};

export default ContentPaperWithHeader;
