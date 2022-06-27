/* eslint-disable default-case */
import React from "react";
import UserInfo from "../components/UserInfo";
import { Grid } from "@mui/material";
import AccountMenu from "../drawers/AccountMenu";
import MainTab from "../tabs/MainTab";
import PatentsPage from "./PatentsPage";
import NewIdeaPage from "./NewIdeaPage";
import InventoryPage from "./InventoryPage";
import MarketplacePage from "./MarketplacePage";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabDisplay: 0,
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(e, newTab) {
    this.setState({ tabDisplay: newTab });
  }

  currentTabDisplay() {
    switch (this.state.tabDisplay) {
      case 0:
        return <NewIdeaPage />;

      case 1:
        return <InventoryPage />;

      case 2:
        return <MarketplacePage />;

      case 3:
        return <PatentsPage />;
    }
  }

  render() {
    return (
      <Grid container direction="column" sx={{ border: 1, maxWidth: "100vw" }}>
        <Grid item container>
          <Grid item xs={3}>
            <UserInfo userInfo={this.props.userInfo} />
          </Grid>
          <Grid item xs={7}></Grid>
          <Grid item xs={2} sx={{ border: 1 }}>
            <AccountMenu />
          </Grid>
        </Grid>
        <Grid item>
          <MainTab onChange={this.changeTab} value={this.state.tabDisplay} />
        </Grid>
        <Grid item>{this.currentTabDisplay()}</Grid>
      </Grid>
    );
  }
}
