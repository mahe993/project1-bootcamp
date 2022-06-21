import React from "react";
import Input from "../components/input";
import NewIdeaTab from "../tabs/NewIdeaTab";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //to enter to MainPage
  }

  render() {
    return <NewIdeaTab />;
  }
}
