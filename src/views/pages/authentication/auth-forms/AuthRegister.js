import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Import useSelector

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
// import { useSelector } from 'react-redux'; // Import useSelector
import axios from 'axios';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// Define or import validDepartments
const validDepartments = ['Dept1', 'Dept2'];
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// Other imports...
import AnimateButton from 'ui-component/extended/AnimateButton';
import Customization from 'layout/Customization';
import { Google } from '@mui/icons-material';

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  // const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
  //   try {
  //     const response = await axios.post('/register', values);
  //     if (response.data) {
  //       // Registration was successful
  //       setStatus({ success: true });
  //       console.log("success", response.data);
  //     } else {
  //       // Handle registration error
  //       setErrors({ submit: 'Registration failed' });
  //     }
  //     setSubmitting(false);
  //   } catch (error) {
  //     console.error(error);
  //     setErrors({ submit: error.message });
  //     setSubmitting(false);
  //   }
  // };


  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${Customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          empId: '',
          username: '',
          dept: '',
          designation: '',
          mNumber: '',
          email: '',
          password: '',
          confirmPass: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          empId: Yup.number().integer('Employee ID must be a number').positive('Employee ID must be a positive number').required('Employee ID is required'),
          username: Yup.string().required('Username is required').trim(),
          dept: Yup.string().required('Department is required').oneOf(validDepartments, 'Invalid department'),
          designation: Yup.string(),
          mNumber: Yup.string(),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          confirmPass: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const response = await axios.post('/register', {values});
            if (response.data) {
              // Registration was successful
              setStatus({ success: true });
              console.log("success", response.data);
            } else {
              // Handle registration error
              setErrors({ submit: 'Registration failed' });
            }
            setSubmitting(false);
          } catch (error) {
            console.error(error);
            setErrors({ submit: error.message });
            setSubmitting(false);
          }
        }}
      >
         {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
        <form noValidate {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Employee ID"
                  margin="normal"
                  name="empId"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.empId}
                />
                {touched.empId && errors.empId && (
                  <FormHelperText error>{errors.empId}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  name="username"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                />
                {touched.username && errors.username && (
                  <FormHelperText error>{errors.username}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Department"
                  margin="normal"
                  name="dept"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.dept}
                />
                {touched.dept && errors.dept && (
                  <FormHelperText error>{errors.dept}</FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Designation"
                  margin="normal"
                  name="designation"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.designation}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  margin="normal"
                  name="mNumber"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={Boolean(touched.email && errors.email)}>
                  <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email-register"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error>{errors.email}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
                  <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error>{errors.password}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={Boolean(touched.confirmPass && errors.confirmPass)}>
                  <InputLabel htmlFor="outlined-adornment-confirm-password-register">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-confirm-password-register"
                    type={showPassword ? 'text' : 'password'}
                    value={values.confirmPass}
                    name="confirmPass"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.confirmPass && errors.confirmPass && (
                    <FormHelperText error>{errors.confirmPass}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            
            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Agree with &nbsp;
                      <Typography variant="subtitle1" component={Link} to="#">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary" >
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
