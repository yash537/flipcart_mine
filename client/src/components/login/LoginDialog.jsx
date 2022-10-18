import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { DataContext } from "../../context/DataProvider";

import authenticateSignup, { authenticateLogin } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: auto;
  width: 25%;
  padding: 45px 35px;
  & > p,
  h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  button,
  p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and REcommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile to get started",
  },
};

const signupInitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const logininitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialvalues);
  const [login, setLogin] = useState(logininitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const res = await authenticateSignup(signup);
    if (!res) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const res = await authenticateLogin(login);
    if (res.status === 200) {
      handleClose();
      setAccount(res.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                id="standard-basic"
                label="Enter Username"
                variant="standard"
                name="username"
                onChange={(e) => onValueChange(e)}
              />
              {error && <Error>Please Enter Valid Username/Password</Error>}
              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                name="password"
                onChange={(e) => onValueChange(e)}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of use and Privacy
                Policy
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OtpButton>Request OTP</OtpButton>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                id="standard-basic"
                label="Enter FirstName"
                variant="standard"
                name="firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter LastName"
                variant="standard"
                name="lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter UserName"
                variant="standard"
                name="username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter Email"
                variant="standard"
                name="email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter Password"
                variant="standard"
                name="password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter Phone"
                variant="standard"
                name="phone"
                onChange={(e) => onInputChange(e)}
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
