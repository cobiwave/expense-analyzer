import { useState } from "react";
import { Switch, ThemeProvider, createTheme } from "@mui/material";
import GlobalStyle from "./GlobalStyle";
import ExpenseAnalyzer from "./components/ExpenseAnalyzer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <ExpenseAnalyzer />
      </ThemeProvider>
    </>
  );
};

export default App;
