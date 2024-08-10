import { styled } from "@mui/material/styles";

const StyledMarkdown = styled("div")(({ theme }) => ({
  "& .custom-color.c": {
    color: "inherit",
  },
  "& .custom-color.bc": {
    backgroundColor: "inherit",
    color: theme.palette.text.primary,
  },
  "& h1": {
    ...theme.typography.h1,
    marginBlockStart: 0,
    marginBlockEnd: theme.spacing(2),
    fontSize: "1.5rem",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  "& h2": {
    ...theme.typography.h2,
    marginBlockStart: 0,
    marginBlockEnd: theme.spacing(2),
    fontSize: "1.17rem",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  "& h3": {
    ...theme.typography.h3,
    marginBlockStart: 0,
    marginBlockEnd: theme.spacing(2),
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  "& h4": {
    ...theme.typography.h4,
    marginBlockStart: 0,
    marginBlockEnd: theme.spacing(2),
    fontSize: "1rem",
    color: theme.palette.text.primary,
  },
  "& p": {
    ...theme.typography.body1,
    marginBlockStart: 0,
    marginBlockEnd: theme.spacing(2),
  },
  "& a": {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&::before": {
      content: '"🔗"' /* Add the link emoji */,
      marginRight: "4px",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "& ul, & ol": {
    ...theme.typography.body1,
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  "& blockquote": {
    borderLeft: `4px solid ${theme.palette.divider}`,
    margin: 0,
    paddingLeft: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },
  "& code": {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "0.85em",
    padding: "0.2em 0.4em",
    margin: 0,
    borderRadius: 4,
    backgroundColor: theme.palette.action.hover,
  },
  "& pre": {
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "0.85em",
    padding: theme.spacing(1),
    marginBlockEnd: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.action.hover,
    overflow: "auto", // Ensure long code blocks are scrollable
  },
  "& pre code": {
    backgroundColor: "transparent", // Ensures code inside pre inherits the background
    padding: theme.spacing(0),
  },
  "& hr": {
    border: 0,
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBlockStart: theme.spacing(2),
    marginBlockEnd: theme.spacing(2),
  },
  "& table": {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
  "& th, & td": {
    padding: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.divider}`,
    textAlign: "left",
  },
  "& th": {
    backgroundColor: theme.palette.background.paper,
    fontWeight: 700,
  },
  "& tr:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
}));

export default StyledMarkdown;
