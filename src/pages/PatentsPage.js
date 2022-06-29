import React from "react";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import { Grid, Typography } from "@mui/material";
import { StyledTextField } from "./LoginPage";
import { ResponsiveForm, StyledApply } from "./NewIdeaPage";

export default class PatentsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      fullName: "",
      contactNumber: "",
      eMail: "",
      remarks: "",
    });
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ maxWidth: "100vw" }}
      >
        <Grid item sx={{ mt: 1 }}>
          <HistoryEduOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item sx={{ p: 1, width: "95vw" }}>
          <Typography variant="subtitle2" align="center">
            If you are ready to take the idea one step further, please fill in
            the neccessary details and our team will be in touch within 3
            business days.
          </Typography>
        </Grid>
        <Grid item sx={{ width: "95vw", maxWidth: "800px" }}>
          <ResponsiveForm onSubmit={this.handleSubmit}>
            <Grid container direction="column" alignItems="center">
              <StyledTextField
                autoComplete="off"
                onChange={this.handleChange}
                required
                type="text"
                id="fullName"
                label="Full Name"
                focused
                fullWidth={true}
                size="small"
                margin="normal"
                value={this.state.fullName}
                error={this.state.fullName === "" ? true : false}
              />
              <StyledTextField
                autoComplete="off"
                onChange={this.handleChange}
                required
                type="text"
                id="contactNumber"
                label="Contact Number"
                focused
                fullWidth={true}
                size="small"
                margin="normal"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                value={this.state.contactNumber}
                error={this.state.contactNumber === "" ? true : false}
              />
              <StyledTextField
                autoComplete="off"
                onChange={this.handleChange}
                required
                type="text"
                id="eMail"
                label="E-Mail"
                focused
                fullWidth={true}
                size="small"
                margin="normal"
                value={this.state.eMail}
                error={this.state.eMail === "" ? true : false}
              />
              <StyledTextField
                onChange={this.handleChange}
                type="text"
                id="remarks"
                label="Additional Remarks"
                focused
                fullWidth={true}
                size="small"
                multiline
                minRows={10}
                maxRows={10}
                margin="normal"
                placeholder="If there are any burning questions, feel free to shoot away!&#10;Do also let us know what you will be expecting of us!"
                value={this.state.remarks}
              />
              <StyledApply
                type="submit"
                value="APPLY"
                id="patentsApplyButton"
              />
            </Grid>
          </ResponsiveForm>
        </Grid>
      </Grid>
    );
  }
}
