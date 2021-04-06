import "./App.css";
import React from "react";
import { GlobalProvider } from "./Context/GlobalState";

import NavBar from "./Components/NavBar";
import PageView from "./Components/PageView";

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <PageView />
    </GlobalProvider>
  );
}

export default App;
