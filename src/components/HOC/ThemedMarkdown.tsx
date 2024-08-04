import React from "react";
import ReactMarkdown from "react-markdown";
import StyledMarkdown from "../../theme/markdown/StyledMarkdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkDefList from "remark-deflist";
import customHighlightPlugin from "../../theme/markdown/customHighlightPlugin";
import remarkParse from "remark-parse";

interface ThemedMarkdownProps {
  children?: React.ReactNode;
}

const ThemedMarkdown: React.FC<ThemedMarkdownProps> = ({ children }) => {
  const markdownContent = children ? children.toString() : "";
  return (
    <StyledMarkdown>
      <ReactMarkdown
        remarkPlugins={[
          remarkParse,
          remarkGfm,
          remarkEmoji,
          remarkDefList,
          customHighlightPlugin,
        ]}
      >
        {markdownContent}
      </ReactMarkdown>
    </StyledMarkdown>
  );
};

export default ThemedMarkdown;
