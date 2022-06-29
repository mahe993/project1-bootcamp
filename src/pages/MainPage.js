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
      ideas: {
        pending: [],
        draft: [],
        listed: [
          {
            ideaName: "Make-up Shop",
            ideaSummary: `Storefront for people to get their make-up done for the day!`,
            ideaDescription: `Set up shop at Orchard\n\nHire many makeup artists\n\nOpen shop wait for customers!`,
            ideaPrice: 8888,
          },
          {
            ideaName: "Bubbletack",
            ideaSummary: "The whole new edible blutack!",
            ideaDescription: `Something like bubblegum except after you are done with it, use it as a blutack instead of sticking it everywhere`,
            ideaPrice: 99998,
          },
        ],
        bought: [
          {
            ideaName: "Very Expensive Idea",
            ideaSummary:
              "The whole idea behind this idea is that it is expensive!",
            ideaDescription:
              "sell this empty idea at a premium as marketing psychology dictates that a premium price imposes a premium look and feel unto the customer",
            ideaPrice: 99,
          },
        ],
      },
    };
    this.changeTab = this.changeTab.bind(this);
    this.handleIdea = this.handleIdea.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  changeTab(e, newTab) {
    this.setState({ tabDisplay: newTab });
  }

  handleRemove(removeIdeaName) {
    let ideaIndex = 0;
    for (let i = 0; i < this.state.ideas.listed.length; i += 1) {
      if (this.state.ideas.listed[i].ideaName === removeIdeaName) {
        ideaIndex = i;
        break;
      }
    }
    const newListedArr = [...this.state.ideas.listed];
    newListedArr.splice(ideaIndex, 1);
    this.setState({ ideas: { ...this.state.ideas, listed: newListedArr } });
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
        return (
          <NewIdeaPage
            onSubmit={this.handleIdea}
            logUserInfo={this.props.logUserInfo}
            userInfo={this.props.userInfo}
          />
        );

      case 1:
        return (
          <InventoryPage onSubmit={this.handleIdea} ideas={this.state.ideas} />
        );

      case 2:
        return (
          <MarketplacePage
            ideas={this.state.ideas.listed}
            logUserInfo={this.props.logUserInfo}
            userInfo={this.props.userInfo}
            buyIdea={this.handleIdea}
            removeIdea={this.handleRemove}
          />
        );

      case 3:
        return <PatentsPage />;
    }
  }

  render() {
    return (
      <Grid container direction="column" sx={{ width: "100%" }}>
        <Grid item container>
          <Grid item xs={6}>
            <UserInfo userInfo={this.props.userInfo} />
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1} alignSelf="center">
            <AccountMenu logUserInfo={this.props.logUserInfo} />
          </Grid>
        </Grid>
        <TabGrid item>
          <MainTab onChange={this.changeTab} value={this.state.tabDisplay} />
        </TabGrid>
        <Grid item>{this.currentTabDisplay()}</Grid>
      </Grid>
    );
  }
}

const TabGrid = styled(Grid)`
  max-width: 100%;
  margin-top: 6px;
`;
