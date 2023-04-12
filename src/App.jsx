import { useState } from "react";
import "./App.css";
import { Footer, Header, Statistics } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
