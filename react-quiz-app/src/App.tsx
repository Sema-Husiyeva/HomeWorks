import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect} from "react";
import { useSelector } from 'react-redux';
import type { RootState } from "./store/store";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";
import Result from "./components/score/score";


function App() {
  const mode = useSelector((state: RootState) => state.theme.mode);


  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:subject" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
