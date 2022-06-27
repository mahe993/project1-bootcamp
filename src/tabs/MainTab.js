import React from "react";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Tabs, Tab } from "@mui/material";

export default class MainTab extends React.Component {
  render() {
    return (
      <Tabs
        value={this.props.value}
        onChange={this.props.onChange}
        variant="fullWidth"
      >
        <Tab icon={<EmojiObjectsOutlinedIcon />} label="NEW IDEA" />
        <Tab icon={<WorkOutlineOutlinedIcon />} label="INVENTORY" />
        <Tab icon={<StorefrontOutlinedIcon />} label="MARKETPLACE" />
        <Tab icon={<HistoryEduOutlinedIcon />} label="PATENTS" />
      </Tabs>
    );
  }
}
