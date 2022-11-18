import Landing from "./PAGES/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./PAGES/Lesson";
import Test from "./PAGES/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
