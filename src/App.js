import "./App.css";
import React from "react";
import { GlobalProvider } from "./Context/GlobalState";

import NavBar from "./Components/NavBar";
import PageView from "./Components/PageView";
import Footer from "./Components/Footer"

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <PageView />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
