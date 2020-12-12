import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useForm } from "react-hook-form";
import { 
  Container,
  CssBaseline,
  TextField,
  Button,
  Grid,
  Typography,
} from '@material-ui/core/';
import { Alert, AlertTitle } from '@material-ui/lab';
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
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(3, 0, 2),},
  warning: {
    color:'white'
  }
  
}));

interface State {
  showPassword: boolean;
  password: string;
}

export function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    // mode: 'onBlur'
  });

/*   const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',
  }); */
  
  function onSubmit(data) {
    console.log(data);
  }

/*   const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }; */

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <div><SvgIcon /></div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
    <form 
      autoComplete='on'
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField 
          name='Email' 
          id='email'
          label='Email Address'
          autoComplete='email'
          variant='outlined'
          fullWidth
          autoFocus
          inputRef={
            register({
              required: "Required", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
                }})} />
      </Grid>
      <Grid item xs={12}>
        {errors?.Email?.message && 
        <Alert
          severity= 'warning'
          className={classes.warning}
          variant= 'outlined'
          /* variant="filled" */
          >
          <AlertTitle color= 'warning'>
            <strong>Warning</strong>
            </AlertTitle>
          {errors.Email.message}
        </Alert>}
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="Password"
          placeholder="Password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          inputRef={
            register({
              required: "Required",
              minLength: {
                value:6,
                message: 'minimum length is 6 characters ' },
              pattern:{
                      /*   lowerChar, capitalChar,       specialChar,   rest*/
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                message: 'wrong pattern; must contain at least one of each; lowercase, uppercase, number and special character; @$!%*?&'},
            })}
        />
      </Grid >
      <Grid item xs={12}>
        {errors?.Password?.message && 
        <Alert
          severity= 'warning'
          variant= 'outlined'
          className={classes.warning}
          color='warning'>
          <AlertTitle color= 'warning'>
            <strong>Warning</strong>
            </AlertTitle>
          {errors.Password.message}
        </Alert>}
        </Grid>
      </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size='large'
          className={classes.submit}>
        Sign In
        </Button>
    </form>
    </div>
    </Container>
  );
}
