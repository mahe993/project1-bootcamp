/* eslint-disable default-case */
import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styled from "@emotion/styled";

export default class IdeaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      likeButton: false,
    };
    this.handleDialog = this.handleDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.clickLike = this.clickLike.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleDialog() {
    this.setState({ openDialog: true });
  }

  closeDialog() {
    this.setState({ openDialog: false });
  }

  clickLike() {
    this.setState({ likeButton: !this.state.likeButton });
  }

  handleBuy(e) {
    console.log(e);
    //deduct sale price
    this.props.logUserInfo({
      ...this.props.userInfo,
      accountBalance:
        this.props.userInfo.accountBalance - this.props.idea.ideaPrice,
    });

    //move the idea to bought inventory
    this.props.buyIdea("bought", this.props.idea);
    this.closeDialog();
    this.props.removeIdea(this.props.idea.ideaName);
  }

  dynamicDialogActionButtons() {
    switch (this.props.cardType) {
      case "pending":
        return <Button onClick={this.closeDialog}>EDIT</Button>;

      case "draft":
        return (
          <>
            <Button onClick={this.closeDialog}>
              <DeleteOutlineIcon />
            </Button>
            <Button onClick={this.closeDialog}>EDIT</Button>
          </>
        );

      case "listed":
        return (
          <>
            <Button onClick={this.closeDialog}>
              <DeleteOutlineIcon />
            </Button>
            <Button onClick={this.closeDialog}>EDIT</Button>
          </>
        );

      case "bought":
        return <Button onClick={this.closeDialog}>PATENTS</Button>;

      case "price":
        return <Button onClick={this.handleBuy}>BUY</Button>;
    }
  }

  render() {
    return (
      <FlexCard
        sx={{ maxWidth: "100%", minWidth: "200px", minHeight: "265px", m: 0.2 }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="link to user who submitted"
              src="https://picsum.photos/200"
            ></Avatar>
          }
          title={this.props.idea.ideaName}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {this.props.idea.ideaSummary}
          </Typography>
          <br />
          <ItalicsBoldText variant="body2" color="text.secondary">
            {this.props.cardType.toUpperCase()}
            {this.props.cardType === "listed" ||
            this.props.cardType === "bought" ||
            this.props.cardType === "price"
              ? `: $${this.props.idea.ideaPrice}`
              : null}
          </ItalicsBoldText>
        </CardContent>
        <CardActions disableSpacing sx={{ mt: "auto" }}>
          <IconButton onClick={this.clickLike}>
            {this.state.likeButton ? <LikedIcon /> : <FavoriteIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <Button onClick={this.handleDialog} sx={{ ml: "auto" }}>
            DETAILS
          </Button>
          <Dialog
            open={this.state.openDialog}
            onClose={this.closeDialog}
            fullWidth
          >
            <DialogTitle>{this.props.idea.ideaName}</DialogTitle>
            <DialogContent dividers>
              <DialogContentText tabIndex={-1}>
                <TextHeader>Idea Summary:</TextHeader>
                <Typography>
                  {this.props.idea.ideaSummary}
                  <br />
                  <br />
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam.
                </Typography>
                <br />
                <TextHeader>Idea Description:</TextHeader>
                <Typography>
                  {this.props.idea.ideaDescription}
                  <br />
                  <br />
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                </Typography>
                <br />
                <TextHeader>Price:</TextHeader>
                <Typography>${this.props.idea.ideaPrice}</Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {this.dynamicDialogActionButtons()}
              <Button onClick={this.closeDialog}>CLOSE</Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </FlexCard>
    );
  }
}

const TextHeader = styled(Typography)`
  font-weight: bold;
`;

const ItalicsBoldText = styled(TextHeader)`
  font-style: italic;
`;

const LikedIcon = styled(FavoriteIcon)`
  color: red;
`;

const FlexCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;
