import { Box, Stack, Typography, useTheme } from "@mui/material";

interface DefaultLoaderProps {
  loadText?: string;
}

const DefaultLoader: React.FC<DefaultLoaderProps> = ({ loadText }) => {
  const theme = useTheme();

  const primaryLoaderColor = theme.palette.getContrastText(
    theme.palette.background.default
  );

  return (
    <Stack
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction={"column"}
    >
      <style>
        {`
        .loader {
            width: 4px;
            height: 20px;
            border-radius: 4px;
            display: block;
            margin: 20px auto;
            position: relative;
            background: currentColor;
            color: ${primaryLoaderColor};
            box-sizing: border-box;
            animation: animloader 0.3s 0.3s linear infinite alternate;
            }

            .loader::after, .loader::before {
            content: '';
            width: 4px;
            height: 20px;
            border-radius: 4px;
            background: currentColor;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            box-sizing: border-box;
            animation: animloader 0.3s  0.45s  linear infinite alternate;
            }
            .loader::before {
            left: -20px;
            animation-delay: 0s;
            }

            @keyframes animloader {
            0%   { height: 48px} 
            100% { height: 4px}
            }
      
        `}
      </style>
      <Box height={100}>
        <span className="loader"></span>
      </Box>
      <Typography variant="h6" color="textPrimary">
        {loadText || "Loading..."}
      </Typography>
    </Stack>
  );
};

export default DefaultLoader;
