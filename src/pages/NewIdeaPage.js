import React from "react";
import {
  Alert,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { StyledTextField } from "./LoginPage";
import styled from "@emotion/styled";

export default class NewIdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaNameValue: "",
      ideaSummaryValue: "",
      ideaDescriptionValue: "",
      ideaPriceValue: "",
      openSnackbar: false,
      snackbarMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [`${e.target.id}Value`]: e.target.value });
  }

  closeSnackbar() {
    this.setState({
      openSnackbar: false,
      snackbarMessage: "",
    });
  }

  componentDidMount() {
    if (this.props.editIdeaData !== "") {
      this.setState({
        ideaNameValue: this.props.editIdeaData.ideaName,
        ideaSummaryValue: this.props.editIdeaData.ideaSummary,
        ideaDescriptionValue: this.props.editIdeaData.ideaDescription,
        ideaPriceValue: this.props.editIdeaData.ideaPrice,
      });
    }
  }

  componentWillUnmount() {
    this.props.deleteEditIdeaData();
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
      this.setState({
        snackbarMessage: "Saved as draft!",
      });
    } else {
      this.setState({
        snackbarMessage: "Your application is successful!",
      });
      //deduct $10
      this.props.logUserInfo({
        ...this.props.userInfo,
        accountBalance: this.props.userInfo.accountBalance - 10,
      });
    }
    //pass idea back to MainPage state
    this.props.onSubmit(type, idea);

    //open Snackbar
    this.setState({
      openSnackbar: true,
    });

    //set fields back to start
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
        <Grid item sx={{ mt: 1 }}>
          <EmojiObjectsOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item>
          <ResponsiveForm onSubmit={this.handleSubmit}>
            <Grid container direction="column" alignItems="center">
              <StyledTextField
                autoComplete="off"
                onChange={this.handleChange}
                required
                type="text"
                id="ideaName"
                label="Idea Name"
                focused
                fullWidth={true}
                size="small"
                margin="normal"
                value={this.state.ideaNameValue}
                error={this.state.ideaNameValue === "" ? true : false}
              />
              <StyledTextField
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
                margin="normal"
                placeholder={`Enter a summary of your idea here!\nkeep it short and digestable like a tagline!`}
                value={this.state.ideaSummaryValue}
                error={this.state.ideaSummaryValue === "" ? true : false}
              />
              <StyledTextField
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
                margin="normal"
                placeholder={`Give a detailed explaination of your how idea works!\n\nMake your descriptions concise and to the point.\n\nBest to use point forms as you go along describing each feature!`}
                value={this.state.ideaDescriptionValue}
                error={this.state.ideaDescriptionValue === "" ? true : false}
              />
              <StyledTextField
                onChange={this.handleChange}
                type="text"
                id="ideaPrice"
                label="Sale Price"
                focused
                fullWidth={true}
                size="small"
                margin="normal"
                value={this.state.ideaPriceValue}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <Grid item>
                <TermsAndConditionsText>
                  - Idea applications costs $10/- ea.
                </TermsAndConditionsText>
                <TermsAndConditionsText>
                  - If sale price is not entered, idea is not considered applied
                  and will be saved as a draft in your inventory.
                </TermsAndConditionsText>
                <TermsAndConditionsText>
                  - All applications will be reviewed individually by Ideas
                  Market.
                </TermsAndConditionsText>
                <TermsAndConditionsText>
                  - Read complete terms and conditions{" "}
                  <TermsAndConditionsText as="span" sx={{ fontWeight: "bold" }}>
                    here
                  </TermsAndConditionsText>
                </TermsAndConditionsText>
              </Grid>
              <Grid item>
                <StyledApply
                  type="submit"
                  value="APPLY"
                  id="applyButton"
                  sx={{ mt: 0.8 }}
                />
              </Grid>
              <Snackbar
                open={this.state.openSnackbar}
                autoHideDuration={2000}
                onClose={this.closeSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <Alert
                  variant="filled"
                  onClose={this.closeSnackbar}
                  severity="success"
                  sx={{ borderRadius: 5 }}
                >
                  {this.state.snackbarMessage}
                </Alert>
              </Snackbar>
            </Grid>
          </ResponsiveForm>
        </Grid>
      </Grid>
    );
  }
}

export const ResponsiveForm = styled.form`
  @media only screen and (max-width: 800px) {
    max-width: 95vw;
    margin: 0 auto;
  }
`;

export const StyledApply = styled(TextField)`
  & > .MuiOutlinedInput-root {
    & > .MuiOutlinedInput-input {
      padding: 10px;
    }
  }
`;

export const TermsAndConditionsText = styled(Typography)`
  font-style: italic;
  font-size: 12px;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
