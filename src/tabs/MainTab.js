import React from "react";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Tabs, Tab, Divider } from "@mui/material";
import styled from "@emotion/styled";

export default class MainTab extends React.Component {
  render() {
    return (
      <>
        <Tabs value={this.props.value} onChange={this.props.onChange} centered>
          <SmallTab icon={<EmojiObjectsOutlinedIcon />} label="NEW IDEA" />
          <SmallTab icon={<WorkOutlineOutlinedIcon />} label="INVENTORY" />
          <SmallTab icon={<StorefrontOutlinedIcon />} label="MARKETPLACE" />
          <SmallTab icon={<HistoryEduOutlinedIcon />} label="PATENTS" />
        </Tabs>

        <Divider />
      </>
    );
  }
}

const SmallTab = styled(Tab)`
  @media screen and (max-width: 600px) {
    min-width: 0;
    letter-spacing: 0;
    font-size: 60%;
    min-height: 10px;
  }
  max-width: 100vw;
`;
