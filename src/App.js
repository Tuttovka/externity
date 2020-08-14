import React from "react";
import "./App.scss";
import { Navigation } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
