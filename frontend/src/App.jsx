import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyHeader from "./components/Header";
import MainPage from "./pages/MainPage";
import MyNav from "./components/Nav";
import MovieList from "./pages/MovieList";
import FloatButton from "./components/FloatButton";
import BoardPage from "./pages/BoardPage";

import Join from "./pages/Join";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
