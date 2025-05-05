import "./app.css";
import { Routes, Route } from "react-router-dom";
import "katex/dist/katex.min.css";

import ContentPage from "./pages/contentPage";
import HomePage from "./pages/homePage";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/physics"
          element={<ContentPage file="physics.md" pathname="physics" />}
        />
        <Route
          path="/cs"
          element={<ContentPage file="cs.md" pathname="cs" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
