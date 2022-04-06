import { BrowserRouter, Route, Routes } from "react-router-dom";

import AffiXx from "./components/AffiXx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AffiXx />
    </div>
  );
}

export default App;
