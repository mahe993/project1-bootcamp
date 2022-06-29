import React from "react";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Grid, Typography } from "@mui/material";

export default class InventoryPage extends React.Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item sx={{ mt: 1 }}>
          <WorkOutlineOutlinedIcon fontSize="large" />
        </Grid>
      </Grid>
    );
  }
}
