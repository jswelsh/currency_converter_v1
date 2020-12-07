import React from 'react';

import { 
  FormControlLabel,
  CssBaseline,
  TextField,
  Checkbox,
  Button,
  Grid,
} from '@material-ui/core/';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useForm } from "react-hook-form";
// import InputAdornment from '@material-ui/core/InputAdornment';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {ReactComponent as SvgIcon} from './logo.svg'
import {
  Link
} from "react-router-dom";

/* import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton'; */
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  Card: {
    // borderRadius: 12,
    borderRadius: 12,

    margin:'auto',
    minWidth:600,
    maxWidth:600,
    marginBottom:30},
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(3, 0, 2),},
  warning: {
    color:'white'
  },
  input:{
    '-internal-autofill-selected':{
      backgroundColor: 'red'
    }
  }
}));

interface State {
  showPassword: boolean;
  password: string;
}

export function SignUp({modeHandler}) {  
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    // mode: 'onBlur'
  });

/*   const [values, setValues] = React.useState<State>({
    showPassword: false,
    password: '',
  });
 */
  function onSubmit(data) {
    console.log(data);
  }
/* 
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }; */

  return (
    
    // <Card className={classes.Card}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />
      <div className={classes.paper}>
        <div><SvgIcon /></div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          autoComplete='on'
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.input}
              name="firstName"
              id="firstName"
              label="First Name"
              autoComplete="off"
              variant="outlined"
              // required
              fullWidth
              autoFocus
              inputRef={
                register({
                  required: "Required", 
                  minLength: {
                    value:2,
                    message: 'minimum length is 2 characters ' },
                  pattern:{
                    value: /^[A-Z]+$/i,
                    message: 'Sorry Elon Musk; Only alphabetic characters are valid in a name, no symbols.... for now'},
                })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              id="lastName"
              label="Last Name"
              autoComplete='off'
              variant="outlined"
              // required
              fullWidth
              inputRef={
                register({
                  required: "Required", 
                  minLength: {
                    value:2,
                    message: 'minimum length is 2 characters ' },
                  pattern:{
                    value: /^[A-Z]+$/i,
                    message: 'Sorry Elon Musk; Only alphabetic characters are valid in a name, no symbols.... for now'},
                })}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {errors?.firstName?.message && 
              <Alert
                severity= 'warning'
                variant= 'outlined'
                className={classes.warning}
                color='warning'>
                <AlertTitle color= 'warning'>
                  <strong>Warning</strong>
                  </AlertTitle>
                {errors.firstName.message}
              </Alert>}
            </Grid>
            <Grid item xs={12} sm={6}>
              {errors?.lastName?.message && 
              <Alert
                severity= 'warning'
                variant= 'outlined'
                className={classes.warning}
                color='warning'>
                <AlertTitle color= 'warning'>
                  <strong>Warning</strong>
                  </AlertTitle>
                {errors.lastName.message}
              </Alert>}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name='Email' 
              id='email'
              label='Email Address'
              autoComplete='email'
              variant='outlined'
              fullWidth
              // required
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
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                message: 'wrong pattern; must contain atleast one of each; lowercase, uppercase, number and special character; @$!%*?&'},
            })}
        />
        </Grid>
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked value="allowExtraEmails" color='secondary' />}
            label='Get daily exchange rates for over 30 different currencies, professional analysis of foreign and domestic markets as well as interest rates from central banks'
          />
        </Grid>
      </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          size='large'
          className={classes.submit}>
        Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Typography
              component={Link}
              to={'/signin'}
              onClick={() =>{
                modeHandler('SignIn') }} 
              >
              Already have an account? Sign in
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
    </Container>
    // </Card>
  );
}










/*           <Grid item xs={12}>
          <FormControl className={clsx(classes.form)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            name="password"
            ref={register({
              required: true,
              minLength: 6,
            })}
            
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
          </Grid> */
