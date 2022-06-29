import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

import { Grid, Typography } from "@mui/material";
import IdeaCard from "../components/IdeaCard";

export default class MarketplacePage extends React.Component {
  currentCardDisplay() {
    if (this.props.ideas.length === 0) {
      return (
        <Typography align="center">
          There are no ideas on the market currently!
        </Typography>
      );
    }
    return this.props.ideas.map((idea, index) => (
      <Grid key={index} item xs={12} sm={6} md={3}>
        <IdeaCard
          idea={idea}
          cardType="price"
          logUserInfo={this.props.logUserInfo}
          userInfo={this.props.userInfo}
          buyIdea={this.props.buyIdea}
          removeIdea={this.props.removeIdea}
        />
      </Grid>
    ));
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth: "100vw" }}
      >
        <Grid item sx={{ mt: 1 }}>
          <StorefrontOutlinedIcon fontSize="large" />
        </Grid>
        <Grid
          id="cardContainer"
          item
          container
          sx={{ mt: 1, p: 1, border: 1, width: "95vw" }}
        >
          {this.currentCardDisplay()}
        </Grid>
      </Grid>
    );
  }
}
