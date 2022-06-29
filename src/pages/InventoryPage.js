import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export default class InventoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTypeDisplay: "pending",
    };
    this.setCardType = this.setCardType.bind(this);
  }
  setCardType(e, cardType) {
    this.setState({
      cardTypeDisplay: cardType,
    });
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
          id="cardCointainer"
          item
          container
          sx={{ mt: 1, p: 1, border: 1, width: "95vw" }}
        ></Grid>
      </Grid>
    );
  }
}
