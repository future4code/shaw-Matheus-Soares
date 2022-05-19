import React from "react"
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme"
import Router from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
