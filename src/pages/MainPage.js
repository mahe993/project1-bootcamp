/* eslint-disable default-case */
import React from "react";
import UserInfo from "../components/UserInfo";
import { Box, Grid } from "@mui/material";
import AccountMenu from "../drawers/AccountMenu";
import MainTab from "../tabs/MainTab";
import PatentsPage from "./PatentsPage";
import NewIdeaPage from "./NewIdeaPage";
import InventoryPage from "./InventoryPage";
import MarketplacePage from "./MarketplacePage";
import styled from "@emotion/styled";

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
    console.log(ideaType, idea);
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
      <Grid container direction="column" sx={{ width: "100%" }}>
        <Grid item xs={12} lg={8} container>
          <Grid item xs={6}>
            <UserInfo userInfo={this.props.userInfo} />
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1} alignSelf="center">
            <AccountMenu />
          </Grid>
        </Grid>
        <TestGrid item xs={12}>
          <MainTab onChange={this.changeTab} value={this.state.tabDisplay} />
        </TestGrid>
        <Grid item xs={12} lg={8}>
          {this.currentTabDisplay()}
        </Grid>
      </Grid>
    );
  }
}

const TestGrid = styled(Grid)`
  max-width: 100%;
`;
