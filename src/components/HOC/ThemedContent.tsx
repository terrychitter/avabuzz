import React from "react";
import { Palette } from "color-thief-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { adjustVibrancy } from "../../utils/ColorUtils";
import { useTheme } from "@mui/material";

interface ThemedContentProps {
  children?: React.ReactNode;
  imageUrl: string;
}

export const ThemedContent: React.FC<ThemedContentProps> = ({
  children,
  imageUrl,
}) => {
  const mainTheme = useTheme();

  return (
    <Palette
      src={imageUrl}
      format="hex"
      crossOrigin="anonymous"
      colorCount={2}
      quality={1000}
    >
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error loading image</div>;

        // Make the color more vibrant
        const color1 = adjustVibrancy(data?.[0] ?? "#000000", 0.3, 0.2);
        const color2 = adjustVibrancy(data?.[1] ?? "#000000", 0.3, 0.2);

        // Create a new theme based on the existing theme
        const theme = createTheme({
          ...mainTheme,
          palette: {
            ...mainTheme.palette,
            primary: {
              main: color1,
            },
            secondary: {
              main: color2,
            },
          },
        });

        return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
      }}
    </Palette>
  );
};
