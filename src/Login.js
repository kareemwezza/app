import {
  Box,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Card,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { ErrorSharp, Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8880/auth/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Validation Failed");
        }
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/", { replace: true });
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Box
        sx={{
          mt: "20px",
        }}
      >
        <Card variant="outlined" sx={{ width: "70%", m: "0 auto" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ mb: "20px" }}>
              Login
            </Typography>
            <FormControl
              sx={{ m: 1, width: "50ch" }}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-email">E-mail</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                label="email"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{ width: "50ch" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Login;