import React from "react";

import { TabsPanel } from "./components/TabsPanel";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <section className="App-section">
        <TabsPanel>
          <div label="Самый дешевый">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Самый быстрый">
            See ya later, <em>Alligator</em>!
          </div>
        </TabsPanel>
      </section>
    </div>
  );
}

export default App;
