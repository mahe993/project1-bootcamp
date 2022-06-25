import React from "react";
import NewIdeaTab from "../tabs/NewIdeaTab";
import AccountPage from "./AccountPage";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return (
      <div>
        <AccountPage userInfo={this.props.userInfo} />
        <NewIdeaTab />
      </div>
    );
  }
}
