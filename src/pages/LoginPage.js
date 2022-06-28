import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showError: false,
      errorMessage: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //username and password validation
    if (e.target[0].value === "" || e.target[3].value === "") {
      return this.setState({
        showError: true,
        errorMessage: "Please enter a valid Username/Password",
      });
    }
    if (
      e.target[0].value.indexOf(" ") >= 0 ||
      e.target[3].value.indexOf(" ") >= 0
    ) {
      return this.setState({
        showError: true,
        errorMessage: "No spacings allowed in username/password",
      });
    }
    this.setState({
      showError: false,
      errorMessage: false,
    });
    //log account info
    const userInfo = {
      username: e.target[0].value,
      password: e.target[3].value,
      accountBalance: 100,
    };
    this.props.logUserInfo(userInfo);
    //enter to MainPage
    this.props.changePage();
  }

  togglePasswordVisibility() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{ border: 1 }}
        >
          <Grid item xs={12}>
            <TextField
              margin="normal"
              label="Username"
              placeholder="TommyShelby93"
              error={this.state.showError}
              helperText={this.state.errorMessage}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              label="Password"
              placeholder="QWEqwe123!@#"
              error={this.state.showError}
              helperText={this.state.errorMessage}
              type={this.state.showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.togglePasswordVisibility}
                      edge="end"
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField type="submit" value="Login/Signup" />
          </Grid>
        </Grid>
      </form>
    );
  }
}
