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
      currentUser: "",
    };
    this.changePage = this.changePage.bind(this);
    this.logUserInfo = this.logUserInfo.bind(this);
  }

  changePage() {
    this.setState({ pageDisplay: this.state.pageDisplay + 1 });
  }

  logUserInfo(userObj) {
    this.setState({ currentUser: userObj });
  }

  currentPage() {
    switch (this.state.pageDisplay) {
      case 0:
        return (
          <LoginPage
            changePage={this.changePage}
            logUserInfo={this.logUserInfo}
          />
        );

      case 1:
        return (
          <MainPage
            changePage={this.changePage}
            userInfo={this.state.currentUser}
            logUserInfo={this.logUserInfo}
          />
        );
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
