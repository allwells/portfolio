import { BrowserRouter, Route, Routes } from "react-router-dom";

import AffiXx from "./components/AffiXx";
import Home from "./pages/Home";
import { MantineProvider } from "@mantine/core";
import NotFound from "./pages/NotFound";
import React from "react";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <AffiXx />
    </MantineProvider>
  );
}

export default App;
