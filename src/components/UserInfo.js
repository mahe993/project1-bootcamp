import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

export default class UserInfo extends React.Component {
  render() {
    return (
      <Grid container spacing={1.5} sx={{ pt: 1.5, pl: 1.5 }}>
        <Grid item>
          <Avatar
            alt={this.props.userInfo.username}
            src="https://picsum.photos/200"
            sx={{ width: 45, height: 45, boxShadow: 5 }}
          ></Avatar>
        </Grid>
        <Grid item>
          <UserDetails>{this.props.userInfo.username}</UserDetails>
          <UserDetails>{"$" + this.props.userInfo.accountBalance}</UserDetails>
        </Grid>
      </Grid>
    );
  }
}

const UserDetails = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
`;
