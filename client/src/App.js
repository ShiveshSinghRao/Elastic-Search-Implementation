import "./App.css";
import React from "react";
import { InputMessage } from "./components/InputMessage.jsx";

import DisplayMessage from "./components/DisplayMessage.jsx";
import QueryMessage from "./components/QueryMessage.jsx";
import MessageSearch from "./components/MessageSearch.jsx";

function App() {
  return (
    <div className="container">
      <div className="component">
        <InputMessage />

        <hr />
      </div>
      <div className="component">
        <QueryMessage />

        <hr />
      </div>
      <div className="component">
        <MessageSearch />
        <hr />
      </div>
      <div className="component">
        <DisplayMessage />
      </div>
    </div>
  );
}

export default App;
