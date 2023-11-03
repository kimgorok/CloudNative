import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyHeader from "./components/Header";
import MainPage from "./pages/MainPage";
import MyNav from "./components/Nav";
import MovieList from "./pages/MovieList";
import FloatButton from "./components/FloatButton";
import BoardPage from "./pages/BoardPage";

import Join from "./pages/Join";
import Chat from "./pages/Chat";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";
import { darkTheme, lightTheme } from "./theme";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  * {
    font-family: Inter;
  }
`;

function App() {
  const isPink = useRecoilValue(isDarkAtom);
  return (
    <Router>
      <ThemeProvider theme={isPink ? lightTheme : darkTheme}>
        <GlobalStyle />
        <MyHeader />
        <MyNav />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/movielist" element={<MovieList />} />
          <Route path="movielist/:id" element={<MovieList />} />
          <Route path="/board" element={<BoardPage />}></Route>
          <Route path="/join/chat" element={<Chat />}></Route>
          <Route path="/join" element={<Join />}></Route>
        </Routes>
        <FloatButton />
      </ThemeProvider>
    </Router>
  );
}

export default App;
