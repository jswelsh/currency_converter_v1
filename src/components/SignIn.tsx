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
  Typography,
} from '@material-ui/core/';


import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import {ReactComponent as SvgIcon} from './logo.svg'

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

/* 
Email regex
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


Password regex
^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
This regex will enforce these rules:

At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/

export function SignIn() {
  const { register, handleSubmit, errors /*, reset  */} = useForm();
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',
  });
  

  function onSubmit(data) {
    console.log(data);
  }

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
/*   const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',
  });

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };
 */


 /* 
               <TextField
                name="username"
                variant="outlined"

                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
              />
 */
  return (
    <Container component="main" maxWidth="xs">
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField 
    /* required */
    /*   type="email"  */
      placeholder="Email" 
      name="Email" 
      label="Email Address"
      variant="outlined"
      /* autoComplete="email" */
      inputRef={
        register({
          required: true, 
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: 'wrong pattern'
      }})} />
            {errors.Password && <Typography role="alert">{errors.Password.message}</Typography>}
      {errors.Email && errors.Email.type === "required" && <Typography>This is required</Typography>}
      {errors?.Email?.message && <Typography>{errors.Email.message} </Typography>}

      <TextField
              name="Password"
              placeholder="Password" 

              inputRef={register({
                required: true,
                minLength: {
                  value:6,
                  message: 'password toooooo short' 
                },
                pattern:{
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/i,
                  message: 'wrong pattern'}
              })}
              
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }}
              label="Password"
              /* labelWidth={70} */
              
              />
              {errors?.Password?.message && <Typography>{errors.Password.message} </Typography>}
    {/* <input 
      type="text" 
      placeholder="Password" 
      name="Password" 
      ref={register({
        required: true, 
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/i})} /> */}
    <input type="submit" />
    </form>
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