/* eslint-disable default-case */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageDisplay: 0,
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    this.setState({ pageDisplay: this.state.pageDisplay + 1 });
  }

  currentPage() {
    console.log(this.state.pageDisplay);
    switch (this.state.pageDisplay) {
      case 0:
        return <LoginPage changePage={this.changePage} />;

      case 1:
        return <MainPage changePage={this.changePage} />;
    }
  }

  render() {
    return this.currentPage();
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
