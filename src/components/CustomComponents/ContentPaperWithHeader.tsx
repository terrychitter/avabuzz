import React from "react";
import ContentPaper from "../HOC/ContentPaper";
import { Stack, Typography } from "@mui/material";

interface ContentPaperWithHeaderProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
}

const ContentPaperWithHeader: React.FC<ContentPaperWithHeaderProps> = ({
  children,
  header,
}) => {
  return (
    <ContentPaper>
      <Stack
        direction={"column"}
        gap={1}
        textAlign={{ xs: "left", sm: "center", md: "left" }}
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
