import { useState } from "react";
import "./App.css";
import { Boosts, Footer, Header, Statistics } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Statistics />
      <Boosts />
      <Footer />
    </div>
  );
}

export default App;
