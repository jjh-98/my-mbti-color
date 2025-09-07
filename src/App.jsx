import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import New from "./New.jsx";
import Intro from "./Intro.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로를 Intro 컴포넌트로 변경 */}
        <Route path="/" element={<Intro />} />
        {/* 기존 Home 컴포넌트 경로를 /home으로 변경 */}
        <Route path="/home" element={<Home />} />
        {/* 기존 New 컴포넌트 경로 */}
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
