/* eslint-disable default-case */
import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import IdeaCard from "../components/IdeaCard";

export default class InventoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTypeDisplay: "pending",
    };
    this.setCardType = this.setCardType.bind(this);
  }

  setCardType(e, cardType) {
    if (cardType === null) {
      this.setState({ cardTypeDisplay: "pending" });
    } else {
      this.setState({
        cardTypeDisplay: cardType,
      });
    }
  }

  currentCardDisplay() {
    switch (this.state.cardTypeDisplay) {
      case "pending":
        if (this.props.ideas.pending.length === 0) {
          return (
            <Typography align="center">
              You do not currently have any pending ideas!
            </Typography>
          );
        }
        return this.props.ideas.pending.map((idea, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <IdeaCard idea={idea} cardType={this.state.cardTypeDisplay} />
          </Grid>
        ));

      case "draft":
        if (this.props.ideas.draft.length === 0) {
          return (
            <Typography align="center">
              You do not currently have any draft ideas!
            </Typography>
          );
        }
        return this.props.ideas.draft.map((idea, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <IdeaCard idea={idea} cardType={this.state.cardTypeDisplay} />
          </Grid>
        ));

      case "listed":
        if (this.props.ideas.listed.length === 0) {
          return (
            <Typography align="center">
              You do not currently have any listed ideas!
            </Typography>
          );
        }
        return this.props.ideas.listed.map((idea, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <IdeaCard idea={idea} cardType={this.state.cardTypeDisplay} />
          </Grid>
        ));

      case "bought":
        if (this.props.ideas.bought.length === 0) {
          return (
            <Typography align="center">
              You do not currently have any bought ideas!
            </Typography>
          );
        }
        return this.props.ideas.bought.map((idea, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <IdeaCard idea={idea} cardType={this.state.cardTypeDisplay} />
          </Grid>
        ));
    }
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
          <WorkOutlineOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            value={this.state.cardTypeDisplay}
            exclusive
            onChange={this.setCardType}
            size="small"
          >
            <ToggleButton value="pending">Pending</ToggleButton>
            <ToggleButton value="draft">Draft</ToggleButton>
            <ToggleButton value="listed">Listed</ToggleButton>
            <ToggleButton value="bought">Bought</ToggleButton>
          </ToggleButtonGroup>
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
