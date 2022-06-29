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

export default class IdeaCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
    };
    this.handleDialog = this.handleDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  handleDialog() {
    this.setState({ openDialog: true });
  }

  closeDialog() {
    this.setState({ openDialog: false });
  }

  render() {
    return (
      <Card sx={{ maxWidth: "100%" }}>
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
          <Typography variant="body2" color="text.secondary">
            {this.props.cardType}
            {this.props.cardType === "listed" ||
            this.props.cardType === "bought"
              ? `:${this.props.idea.ideaPrice}`
              : null}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <CommentIcon />
          </IconButton>
          {/* insert dialog */}
          <Button onClick={this.handleDialog} sx={{ ml: "auto" }}>
            DETAILS
          </Button>
          <Dialog open={this.state.openDialog} onClose={this.closeDialog}>
            <DialogTitle>{this.props.idea.ideaName}</DialogTitle>
            <DialogContent dividers>
              <DialogContentText tabIndex={-1}>
                <Typography>Idea Summary:</Typography>
                <Typography>{this.props.idea.ideaSummary}</Typography>
                <Typography>Idea Description:</Typography>
                <Typography>{this.props.idea.ideaDescription}</Typography>
                <Typography>Price:{this.props.idea.ideaPrice}</Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeDialog}>BUY</Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    );
  }
}
