import React from "react";
import Input from "../components/input";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //to enter to MainPage
  }

  render() {
    return (
      <form>
        <Input
          for="username"
          label="Username"
          type="text"
          placeholder="Arthur Shelby"
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
          value="Submit Idea"
          onSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}
