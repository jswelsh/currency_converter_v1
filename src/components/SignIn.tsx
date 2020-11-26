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
  Container,
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
  
  const classes = useStyles();
  const specialChar = /[@$!%*?&]/;
  const numericChar = /[0-9]/
  const capitalChar = /[A-Z]/;
  const lowerChar = /[a-z]/;


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

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <div>
        <SvgIcon />
      </div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form}
    >
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField 
        /* required */
        /*   type="email"  */
          placeholder="Email" 
          name="Email" 
          label="Email Address"
          variant="outlined"
          fullWidth
          /* autoComplete="email" */
          inputRef={
            register({
              required: "Required", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,/* /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, */
                message: 'invalid email address'
          }})} />
      {errors.Email && errors.Email.type === "required" && <Typography>This is required</Typography>}
      {errors?.Email?.message && <Typography>{errors.Email.message} </Typography>}
      </Grid>
      <Grid item xs={12}>
      <TextField
        name="Password"
        placeholder="Password" 
        variant="outlined"
        fullWidth
        inputRef={register({
          required: "Required",
          minLength: {
            value:6,
            message: 'minimum length is 6 characters ' },
/*           pattern:{
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            message: 'wrong pattern'}, */
          validate: {
            specialChar: value => specialChar.test(value),
            numericChar: value => numericChar.test(value),
            capitalChar: value => capitalChar.test(value),
            lowerChar: value => lowerChar.test(value)
          }
        })}

          /*const regex = /(.*[a-z])/i; // the "global" flag is set
``
// regex.lastIndex is at 0
regex.test('foo')     // true

*/
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
        />
      </Grid>
      </Grid>
        {errors?.Password?.message && <Typography>{errors.Password.message} </Typography>}
        {errors?.Password?.type === 'specialChar' && <Typography> Must have a special character; @ $ ! % * ? & </Typography>}
        {errors?.Password?.type === 'numericChar' && <Typography> Must have a numeric character; 0 to 9 </Typography>}
        {errors?.Password?.type === 'capitalChar' && <Typography> Must have a capitalized character; A to Z  </Typography>}
        {errors?.Password?.type === 'lowerChar' && <Typography> Must have a lowercase character; a to z </Typography>}
        
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
    </form>
    </div>
    </Container>
  );
}
