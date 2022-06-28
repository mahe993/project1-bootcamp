import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountInfo: this.props.userInfo[0],
    };
  }

  render() {
    return (
      <Grid container spacing={1.5} sx={{ pt: 1.5, pl: 1.5 }}>
        <Grid item>
          <Avatar
            alt={this.state.accountInfo.username}
            src="https://picsum.photos/200"
            sx={{ width: 45, height: 45, boxShadow: 5 }}
          ></Avatar>
        </Grid>
        <Grid item>
          <UserDetails>{this.props.userInfo[0].username}</UserDetails>
          <UserDetails>
            {"$" + this.props.userInfo[0].accountBalance}
          </UserDetails>
        </Grid>
      </Grid>
    );
  }
}

const UserDetails = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
`;
