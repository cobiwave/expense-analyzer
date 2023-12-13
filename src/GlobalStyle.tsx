import { Global, css } from "@emotion/react";
import { useTheme } from "@mui/material";

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          height: 100vh;
          color: ${theme.palette.mode === "dark" ? "#fff" : "#121212"};
          background-color: ${theme.palette.mode === "dark"
            ? "#121212"
            : "#fff"};
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        #root {
          height: 100%;
          display: flex;
        }
      `}
    />
  );
};

export default GlobalStyle;
