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
      ideas: { pending: [], draft: [], listed: [], bought: [] },
    };
    this.changeTab = this.changeTab.bind(this);
    this.handleIdea = this.handleIdea.bind(this);
  }

  changeTab(e, newTab) {
    this.setState({ tabDisplay: newTab });
  }

  handleIdea(ideaType, idea) {
    switch (ideaType) {
      case "pending":
        this.state.ideas.pending.push(idea);
        break;

      case "draft":
        this.state.ideas.draft.push(idea);
        break;

      case "listed":
        this.state.ideas.listed.push(idea);
        break;

      case "bought":
        this.state.ideas.bought.push(idea);
        break;
    }
  }

  currentTabDisplay() {
    switch (this.state.tabDisplay) {
      case 0:
        return <NewIdeaPage onSubmit={this.handleIdea} />;

      case 1:
        return (
          <InventoryPage onSubmit={this.handleIdea} ideas={this.state.ideas} />
        );

      case 2:
        return <MarketplacePage onSubmit={this.handleIdea} />;

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
          <Grid item xs={2}>
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
