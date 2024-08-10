import { Paper, Link, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemedMarkdown from "../HOC/ThemedMarkdown";

const BiographyText = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  // Toggle between full and truncated text
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const fullText = `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

[link text](http://dev.nodeca.com)


## Horizontal Rules

___

---

***


## Typographic replacements

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

\`\`\`
Sample text here...
\`\`\`

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
`;
  const maxLength = 400;
  const isTruncated = fullText.length > maxLength;
  const truncatedText = `${fullText.slice(0, maxLength)}`;

  return (
    <Paper sx={{ padding: 1, boxShadow: "none" }}>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: expanded ? "auto" : 50,
          opacity: expanded ? 1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <ThemedMarkdown>{expanded ? fullText : truncatedText}</ThemedMarkdown>
      </motion.div>
      {isTruncated && (
        <Link
          component="button"
          variant="body2"
          onClick={handleToggle}
          sx={{
            display: "block",
            marginTop: theme.spacing(1),
            cursor: "pointer",
          }}
        >
          {expanded ? "See Less..." : "See More..."}
        </Link>
      )}
    </Paper>
  );
};

export default BiographyText;
