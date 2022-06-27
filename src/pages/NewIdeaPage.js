import React from "react";
import { Grid, Typography } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

export default class NewIdeaPage extends React.Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={4}>
          <EmojiObjectsOutlinedIcon fontSize="large" />
        </Grid>
      </Grid>
    );
  }
}
