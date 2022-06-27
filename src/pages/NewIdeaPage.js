import React from "react";
import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

export default class NewIdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //log the idea
    let type = "pending";
    const idea = {
      ideaName: e.target,
      ideaSummary: e.target,
      ideaDescription: e.target,
      ideaPrice: e.target,
    };
    if (idea.ideaPrice === 0) {
      type = "draft";
    }
    //pass idea back to MainPage state
    this.props.onSubmit(type, idea);
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={4}>
          <EmojiObjectsOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item xs={12} sx={{ width: "90%" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              id="ideaName"
              label="Idea Name"
              focused
              fullWidth={true}
              size="small"
              margin="dense"
            />
            <TextField
              type="text"
              id="ideaSummary"
              label="Idea Summary"
              focused
              fullWidth={true}
              size="small"
              multiline
              maxRows={2}
              margin="dense"
              placeholder="Enter a summary of your idea here!&#10;keep it short and digestable like a tagline!"
            />
            <TextField
              type="text"
              id="ideaDescription"
              label="Idea Description"
              focused
              fullWidth={true}
              size="small"
              multiline
              minRows={10}
              maxRows={10}
              margin="dense"
              placeholder="Give a detailed explaination of your how idea works!&#10;Make your idea descriptions concise and to the point, best to use point forms as you go along describing each feature!"
            />
            <TextField
              type="text"
              id="ideaPrice"
              label="Sale Price"
              focused
              fullWidth={true}
              size="small"
              margin="dense"
              defaultValue={0}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <Box className="termsAndConditionsText">
              <Typography>- Idea applications costs $9.90/- ea.</Typography>
              <Typography>
                - If sale price is not entered, idea is not considered applied
                and will be saved as a draft in your inventory.
              </Typography>
              <Typography>
                - All applications will be reviewed individually by Ideas
                Market.
              </Typography>
              <Typography>- Read complete terms and conditions here</Typography>
            </Box>
            <TextField type="submit" value="APPLY" id="applyButton" />
          </form>
        </Grid>
      </Grid>
    );
  }
}
