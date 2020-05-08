import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import PageTop from "./components/PageTop/PageTop";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";
import "./components/helpers/initFA";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
