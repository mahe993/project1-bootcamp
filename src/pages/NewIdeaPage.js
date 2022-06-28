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
    this.state = {
      ideaNameValue: "",
      ideaSummaryValue: "",
      ideaDescriptionValue: "",
      ideaPriceValue: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [`${e.target.id}Value`]: e.target.value });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    //validate no identical idea names
    //log the idea
    let type = "pending";
    const idea = {
      ideaName: this.state.ideaNameValue,
      ideaSummary: this.state.ideaSummaryValue,
      ideaDescription: this.state.ideaDescriptionValue,
      ideaPrice: Number(this.state.ideaPriceValue),
    };

    if (idea.ideaPrice === 0 || idea.ideaPrice === "") {
      type = "draft";
    }
    //pass idea back to MainPage state
    console.log(type);
    this.props.onSubmit(type, idea);
    //set fields back to blank
    this.setState({
      ideaNameValue: "",
      ideaSummaryValue: "",
      ideaDescriptionValue: "",
      ideaPriceValue: "",
    });
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={4}>
          <EmojiObjectsOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item xs={12} sx={{ width: "80%" }}>
          <form onSubmit={this.handleSubmit} sx={{ width: "100%", m: 0 }}>
            <TextField
              onChange={this.handleChange}
              required
              type="text"
              id="ideaName"
              label="Idea Name"
              focused
              fullWidth={true}
              size="small"
              margin="dense"
              value={this.state.ideaNameValue}
              error={this.state.ideaNameValue === "" ? true : false}
            />
            <TextField
              onChange={this.handleChange}
              required
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
              value={this.state.ideaSummaryValue}
              error={this.state.ideaSummaryValue === "" ? true : false}
            />
            <TextField
              onChange={this.handleChange}
              required
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
              value={this.state.ideaDescriptionValue}
              error={this.state.ideaDescriptionValue === "" ? true : false}
            />
            <TextField
              onChange={this.handleChange}
              type="text"
              id="ideaPrice"
              label="Sale Price"
              focused
              fullWidth={true}
              size="small"
              margin="dense"
              value={this.state.ideaPriceValue}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <Box className="termsAndConditionsText">
              <Typography>- Idea applications costs $10/- ea.</Typography>
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
