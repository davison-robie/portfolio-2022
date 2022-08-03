import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./Sass/App.scss";

import Header from "./components/Header";
import ContentBody from "./components/ContentBody";
import Footer from "./components/Footer";

function App() {
  let year = new Date().getFullYear();
  return (
    <Router>
      <div className={"page-container"}>
        <Header />
        <ContentBody />
        <Footer year={year} />
      </div>
    </Router>
  );
}

export default App;
