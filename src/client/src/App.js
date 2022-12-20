import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { useRecoilValue } from "recoil";

import { darkTheme, lightTheme } from './styles/Theme';
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import darkModeState from "./recoil/atoms/darkModeState";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </Router>
  );
}

function App() {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <HelmetProvider>
      <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <AppRouter />
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

export default App;
