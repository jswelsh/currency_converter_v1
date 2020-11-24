import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { 
  FormControlLabel,
  OutlinedInput,
  FormControl,
  CssBaseline,
  InputLabel,
  TextField,
  Checkbox,
  Button,
  Link,
  Grid,
  Box,
} from '@material-ui/core/';


import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import {ReactComponent as SvgIcon} from './logo.svg'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),},
  submit: {
    margin: theme.spacing(3, 0, 2),},
}));

interface State {
  showPassword: boolean;
  password: string;
}

export function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',
  });

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ padding: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          SUBMIT
        </Button>
    
        <div style={{ padding: "10px" }}>
          <FormProvider {...methods}> // pass all methods into the context
            <form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormInput name="name" label="Name" />
                </Grid>
              </Grid>
            </form>
          </FormProvider>
        </div>
      </div>
    </Container>
  );
}


/* 
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',

  });
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <SvgIcon />
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            color='secondary'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          // classes.margin, classes.textField 
          <FormControl className={clsx(classes.form)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
        //<Grid item xs>
          //  <Link href="#" variant="body2">
            //  Forgot password?
           // </Link>
         // </Grid> 
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>

*/