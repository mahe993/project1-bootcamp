import { Box } from "@mui/material";
import React from "react";

export default class UserInfo extends React.Component {
  render() {
    return (
      <>
        <Box>{this.props.userInfo[0].username}</Box>
        <Box>{"$" + this.props.userInfo[0].accountBalance}</Box>
      </>
    );
  }
}
