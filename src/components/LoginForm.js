import React from "react"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button } from '@mui/material';

const USERNAME = 'user1';
const PASSWORD = 'pa55word';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required')
    .matches(USERNAME, 'Wrong username'),
  password: yup
    .string('Enter your password')
    .min(8, 'Minimum 8 characters length')
    .required('Password is required')
    .matches(PASSWORD, 'Password incorrect'),
});

const LoginForm = () => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('dummyToken', '535510nt0k3n')
      navigate("./news", { replace: true });
    },
  });

  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="username"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        autoFocus
        autoComplete="false"
      />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="false"
      />
      <Button
        id="login_button"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
}

export default LoginForm;
