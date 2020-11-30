import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { 
  FormControlLabel,
  OutlinedInput,
  FormControl,
  Container,
  CssBaseline,
  InputLabel,
  TextField,
  Checkbox,
  List,
  ListItem,
  Link,
  Card,
  CardHeader,
  Grid,
  Box,
  Typography,
} from '@material-ui/core/';

const { useReducer } = React;
const initialState = {
  value: 0,
  op: '',
  num1: 0,
  num2: '',
  num3: ''
};


const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 1,
    margin:'auto',
    minWidth:400,
    maxWidth:900
  },
  Button:{
    border:'solid'
  },
  List:{
    padding:0
  }
}));

const reducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "2":
      if (!state.num1) {
        return {...state, num1: state.num2, op: action.payload, num2: ''}
      }
      if(!state.num2) {
        return {...state, op: action.payload}
      }
      if(state.num1 && state.op) {
        console.log('called')
        return {...state, value: eval(state.value+state.op+state.num2), op: action.payload}
      }
      return {...state, value: eval(state.num1+state.op+state.num2), num2: '', op: action.payload, num1: eval(state.num1+state.op+state.num2)}

    case "1":
      if (state.num2 === '' && action.payload==='.') {
        return { ...state, num2: '0'+action.payload }
      } else if (state.num2 === '') {
        return { ...state, num2: action.payload }
      } else {
        if (action.payload === '.' && state.num2.includes('.')){
          return state
        } else {
        return { ...state, num2: state.num2 + action.payload }
        }     
      }
      
    case "3":
      if (state.op && state.num2) {
        return {...state, value: eval(state.num1+state.op+state.num2), num2: '', num1: eval(state.num1+state.op+state.num2), num3 : state.num2}
      } else if (state.op && state.value) {
        return {...state, value: eval(state.value+state.op+state.num3)}
      } else {
        return state
      }
  
    case "c":  
      if (state.num2.length === 2 && state.num2.includes('0.')) {
        return {...state, num2: ''}
      } else if (state.num2.length>1) {
        return {...state, num2: state.num2.slice(0, -1)}
      } else {
        return {...state, num2: ''}
      }
      //state.num2.length > 1 ? return {...state, num2: state.num2.slice(0, -1)} : return {...state, num2:0}

    case "ac":
      return {
        value: 0,
        op: '',
        num1: 0,
        num2: ''
      }
      
    default:
      return state
  }
}


const Calculator = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState)
  const Display = () => {
    return !state.num2 ? state.value : state.num2
    }
  return (
/*     <div className="calculator">
      <div className="container">
        <div className="display">
          {!state.num2 ? state.value : state.num2} 
          <span className="cursor" /> */
        <Card className={classes.card}>
          <CardHeader
          titleTypographyProps={{ align: 'right',variant: "h4" }}
          title={<Display/>}
          />
{/*           */}
          <List className={classes.List}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            {/* <Grid item xs={12}>  */}
              {/* <ListItem className={classes.Button} button divider variant='contained' color='primary' onClick={() => dispatch({ type: 'ac'})}> */}
                {/* {!state.num2 ? state.value : state.num2}</ListItem></Grid> */}
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: 'ac'})}>AC</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: 'c'})}>C</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '2', payload: '*'})}>x</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '2', payload: '/'})}>/</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '7'})}>7</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '8'})}>8</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '9'})}>9</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '2', payload: '*'})}>x</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '4'})}>4</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '5'})}>5</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '6'})}>6</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '2', payload: '+'})}>+</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '1'})}>1</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '2'})}>2</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '3'})}>3</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '2', payload: '-'})}>-</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn zero" */ onClick={() => dispatch({ type: '1', payload: '0'})}>0</ListItem></Grid>
            <Grid item xs={3}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn"  */onClick={() => dispatch({ type: '1', payload: '.'})}>.</ListItem></Grid>
            <Grid item xs={6}> <ListItem className={classes.Button} button divider variant='contained' color='primary' /* className="btn eq" */ onClick={() => dispatch({ type: '3'})}>=</ListItem></Grid>
          </Grid>
          </List>
        </Card>
  );
};

export { Calculator }
