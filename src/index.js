import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class App extends React.Component {
  render() {
    return <div className="App"></div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
