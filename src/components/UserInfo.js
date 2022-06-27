import { Avatar, Box, Grid } from "@mui/material";
import React from "react";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountInfo: this.props.userInfo[0],
    };
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <Avatar
            alt={this.state.accountInfo.username}
            src="https://picsum.photos/200"
          ></Avatar>
        </Grid>
        <Grid item>
          <Box>{this.props.userInfo[0].username}</Box>
          <Box>{"$" + this.props.userInfo[0].accountBalance}</Box>
        </Grid>
      </Grid>
    );
  }
}
