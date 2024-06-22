//References:
//https://github.com/mui/material-ui/blob/v5.15.19/docs/data/material/getting-started/templates/sign-in-side/SignInSide.js

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://saakajohor.com/">
        SAAKA JOHOR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const goHome = () => {
  window.location.href = '/';
};

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'));
    setPassword(data.get('password'));

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    try{
      const response = await ApiLogin(email, password);

      if (response.success) {
        // Handle successful login (e.g., redirect to another page or update UI)
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid email or password');
      }
    }
    catch(error){
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const ApiLogin = (email, password) => {
    // This function simulates an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/auth/login' : 'http://api.saakajohor.com/auth/login';
        console.log('URL: ', url)
        console.log('email:', email)
        console.log('password:', password)
        Axios
	          .post(url, {
		          // Data to be sent to the server
		          email: email,
              password: password
	          })
	          .then(response => {
		          console.log(response.data);
               if (response.data === 'Valid') {
                resolve({ success: true });
              } else {
                resolve({ success: false });
              }
	          })
	          .catch(function (error) {
		          console.error(error);
	      });
      }, 1000);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
               {errorMessage && <p className='error'>{errorMessage}</p>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 0, mb: 2 }}
                onClick={goHome}
              >
                Home
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}