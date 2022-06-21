import React from "react";
import Input from "../components/input";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: "password",
      accounts: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleSubmit(e) {
    console.log(e.target[0].value);
    //username and password validation
    if (
      e.target[0].value.indexOf(" ") >= 0 ||
      e.target[1].value.indexOf(" ") >= 0
    ) {
      return alert("No spaces allowed in username/password");
    }
    //log account info
    this.state.accounts.push({
      username: e.target[0].value,
      password: e.target[1].value,
      accountBalance: 0,
    });
    //enter to MainPage
    return this.props.changePage();
  }

  togglePasswordVisibility() {
    if (this.state.passwordType === "password") {
      this.setState({ passwordType: "text" });
    } else {
      this.setState({ passwordType: "password" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          for="username"
          label="Username"
          type="text"
          placeholder="Tommy Shelby"
          required="required"
        />
        <Input
          for="password"
          label="Password"
          type={this.state.passwordType}
          placeholder="Enter password"
          required="required"
        />
        <Input
          for="showPassword"
          type="checkbox"
          onClick={this.togglePasswordVisibility}
          label="Show Password"
        />
        <Input for="loginSubmit" type="submit" value="Login/Signup" />
      </form>
    );
  }
}
