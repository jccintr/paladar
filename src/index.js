//import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
