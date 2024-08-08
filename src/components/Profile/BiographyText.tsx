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

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacus tempor, fermentum sapien sed, venenatis eros. Nam ultricies, mi eget ultrices fringilla, odio dui congue enim, eget pulvinar leo erat vitae diam. Aenean mattis ullamcorper felis eu imperdiet. Aliquam eleifend ac enim et consectetur. Etiam luctus risus vitae metus sollicitudin, non auctor turpis egestas. Nunc pulvinar et orci a dapibus. Duis at facilisis dui, eu fermentum est. Pellentesque nisl urna, vestibulum nec dolor non, dignissim mattis augue. Donec feugiat nulla felis, eget placerat neque iaculis vitae. Mauris interdum ultrices orci, vel cursus ligula porttitor non. Mauris vehicula quam lectus, sit amet condimentum elit mollis id. Proin tellus eros, efficitur et iaculis a, porttitor convallis leo. Aliquam dapibus elit nec magna ultrices dictum. In hac habitasse platea dictumst.

Mauris non erat cursus, blandit libero et, posuere turpis. Nulla luctus lobortis tortor, egestas semper elit molestie ac. Integer sit amet tellus sodales, ornare mauris vitae, malesuada elit. Vivamus ut venenatis mauris, sit amet faucibus quam. Phasellus fringilla ante diam, in iaculis arcu maximus et. Donec dapibus vel tellus sit amet porta. Donec feugiat aliquet est eget condimentum. Sed imperdiet ornare velit nec sollicitudin. Proin velit lectus, tempor id ex non, aliquet elementum ipsum. Aenean risus massa, pharetra eu pulvinar at, fermentum nec felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse tempor consequat dui non vestibulum. Integer libero ex, sodales sed placerat eget, consequat et lacus. Suspendisse orci sapien, tempor nec augue non, dictum tempus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Pellentesque ac facilisis nisi, sit amet sollicitudin ex. Cras quis lobortis mauris. Integer consectetur varius felis. Aliquam purus ex, pulvinar in est ut, fringilla molestie leo. Sed ullamcorper justo ac enim faucibus, quis molestie sem aliquet. Sed a leo molestie odio venenatis sagittis eget quis ipsum. Etiam egestas at nisi at viverra. Ut nec blandit libero. Sed in velit non neque porta aliquam. Ut luctus commodo tellus id dictum. Curabitur eget auctor augue. Integer vitae turpis ante. Sed volutpat, libero sed congue ultrices, erat libero lobortis risus, sed finibus augue est sed dolor. Sed a lacus quis orci congue faucibus.

Nulla facilisi. Proin quis scelerisque velit. In sed auctor elit. Maecenas sodales euismod velit eu eleifend. Curabitur nisi ex, tincidunt at lorem dignissim, faucibus placerat leo. Suspendisse potenti. Aenean non lobortis tortor. Nulla dapibus varius libero, et suscipit elit pellentesque nec. Sed ut pellentesque neque. Etiam fermentum condimentum porta. Cras in vulputate diam. Suspendisse finibus sem ac sapien porttitor blandit.

Vestibulum eget mi vel velit consequat bibendum. Pellentesque a eros ut massa tempor tincidunt. Nunc in ornare diam. Aliquam tempus sagittis nunc non mattis. Aenean velit mi, consequat id nisl sit amet, lacinia molestie tellus. Praesent accumsan vehicula nibh, pellentesque accumsan arcu commodo eleifend. Nulla eget nulla gravida, auctor quam id, scelerisque odio.`;
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
