import React from "react";
import NewIdeaTab from "../tabs/NewIdeaTab";
import UserInfo from "../components/UserInfo";
import { Grid } from "@mui/material";
import AccountMenu from "../drawers/AccountMenu";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return (
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={3}>
            <UserInfo userInfo={this.props.userInfo} />
          </Grid>
          <Grid item xs={7}></Grid>
          <Grid item xs={2}>
            <AccountMenu />
          </Grid>
        </Grid>
        <Grid item>{/* <TabsBar /> */}</Grid>
        <Grid item>{/* depending on state, render the tab */}</Grid>
      </Grid>
    );
  }
}
