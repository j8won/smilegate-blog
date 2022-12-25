import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { useRecoilValue } from "recoil";

import { darkTheme, lightTheme } from './styles/Theme';
import GlobalStyle from "./styles/GlobalStyle";
import routes from "./routes";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Post from "./pages/Post";
import darkModeState from "./recoil/atoms/darkModeState";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.write} element={<Write />} />
        <Route path={`${routes.post}/:id`} element={<Post />} />
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
