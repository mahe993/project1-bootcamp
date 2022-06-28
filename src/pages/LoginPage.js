import React from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";

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
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item sx={{ mt: "10%" }}>
          <StyledLogo fontSize="large" />
        </Grid>
        <Grid item>
          <StyledForm onSubmit={this.handleSubmit}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Grid item xs={12}>
                <StyledText
                  margin="normal"
                  label="Username"
                  placeholder="TommyShelby93"
                  error={this.state.showError}
                  helperText={this.state.errorMessage}
                  inputProps={{ maxLength: 18 }}
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
                <StyledText
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
                <StyledText type="submit" value="Login/Signup" />
              </Grid>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    );
  }
}

const lightUp = keyframes`
0% {
  color: none
}
10%{
  color: rgba(255, 215, 100)
}
15% {
  color: none
}
20%{
  color: rgba(255, 215, 100)
}
100%{
  color: rgba(255, 215, 100)
}
`;

const StyledLogo = styled(LightbulbSharpIcon)`
  font-size: 1000%;
  animation: ${lightUp} 2s steps(20, jump-both) infinite;
`;

const StyledForm = styled.form`
  max-width: 90vw;
  margin: 0 auto;
`;

const StyledText = styled(TextField)`
  & > .MuiOutlinedInput-root {
    & > .MuiOutlinedInput-input::placeholder {
      font-style: italic;
      font-size: 14px;
    }

    & > .MuiOutlinedInput-input {
      font-size: 14px;
    }
  }

  & > .MuiInputLabel-root {
    font-weight: bold;
  }
`;
