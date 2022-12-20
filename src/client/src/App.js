import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";
import { HelmetProvider } from "react-helmet-async";

import Theme from './styles/Theme';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<div>dd</div>} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <StyledThemeProvider theme={Theme}>
          <GlobalStyle />
          <AppRouter />
      </StyledThemeProvider>
    </HelmetProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    color: ${Theme.placeholderColor};
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    letter-spacing: -0.017em;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
  }

  button {
    padding: 0;
  }
`;

export default App;
