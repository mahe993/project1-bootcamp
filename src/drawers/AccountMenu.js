import { Drawer } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuDrawer: false,
    };
    this.drawerList = ["Inbox", "Top-Up", "Account Summary", "Logout"];
    this.toggleMenuDrawer = this.toggleMenuDrawer.bind(this);
  }

  toggleMenuDrawer(toggle) {
    this.setState({ menuDrawer: toggle });
  }

  render() {
    return (
      <>
        <MenuIcon
          onClick={() => {
            this.toggleMenuDrawer(true);
          }}
        />
        <Drawer
          variant="temporary"
          anchor="right"
          open={this.state.menuDrawer}
          onClose={() => {
            this.toggleMenuDrawer(false);
          }}
        >
          {this.drawerList.map((x) => (
            <ListItem key={x} button>
              <ListItemText
                primary={x}
                // sx={{
                //   width: "auto",
                //   maxWidth: 2500,
                // }}
              />
            </ListItem>
          ))}
        </Drawer>
      </>
    );
  }
}
