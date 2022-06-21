import React from "react";
import Input from "../components/input";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //username and password validation
    //to enter to MainPage
    console.log("test");
    return this.props.changePage();
  }

  render() {
    return (
      <form>
        <Input
          for="username"
          label="Username"
          type="text"
          placeholder="Tommy Shelby"
        />
        <Input
          for="password"
          label="Password"
          type="text"
          placeholder="Enter password"
        />
        <Input
          for="loginSubmit"
          type="submit"
          value="Login/Signup"
          onSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}
