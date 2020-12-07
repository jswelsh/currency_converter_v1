import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import reducer from '../../hooks/calculatorReducer'
import { 
  Card,
  Grid,
  List,
  ListItem,
  CardHeader,
  Divider,
  CardContent,
  Paper,
} from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  Test:{
    color:'#009868',
    border:'solid',
    borderRadius: 1,
    
  },
  Display:{
    backgroundColor:'#262626',
    color: 'white',
    background: 'white',
    minHeight: '110px',
    flex: 1
  },
  Card: {
    borderRadius: 6,
    background: '#262626',
    border:'solid',
    color:'#009868',
    margin:'auto',
    maxWidth:350,
  },
  Button:{
    justifyContent:'center',
    border:'solid',
    borderColor: 'black', 
    borderTopWidth: 'thin',
    borderBottomWidth: 'thin',
    borderLeftWidth: 'thin',
    borderRightWidth: 'thin',},
  List:{
    padding:0,
    color:'white'
    // color:'#009868'
  }
}));

const Calculator = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, {
    display: '0',
    expression: ''})

  const Display = () => {
    return (
      <CardHeader
        className={classes.Display} 
        titleTypographyProps={{color:'inherit', align: 'right',variant: "h4", noWrap: 'true'}}
        title={state && state.display ? state.display: null}
        subheader={state && state.expression ? state.expression : null}
        subheaderTypographyProps={{/* color:'primary', */ align: 'right',variant: "h6" }}
      />
      )
    }
    const Button = ({
      size, 
      type, 
      payload, 
      value}) => {
      return (
        <Grid item xs={size}> 
          <ListItem
            className={classes.Button} 
            button 
            divider 
            color='primary' 
            onClick={() => dispatch({ 
              type: type, 
              payload:payload})}
          >{value}
          </ListItem>
        </Grid>
      )}
  return (
    <Card className={classes.Card} >
      <Paper className={classes.Test}>
        <Display />
      </Paper>
      <Grid container >{/* calc */}
        <List className={classes.List}>
          <Grid container item>{/* actions  */} 
            <Button size={3} value="clear" type= 'CLEAR_INPUT' payload= '' />
            <Button size={3} value="bs" type= 'BACK_SPACE' payload= '' />
            <Button size={3} value="+/-" type= 'NEGATION' payload= '-' />
            <Button size={3} value="/" type= 'OPERAND_INPUT' payload= '/' />
          </Grid>
          <Grid container item>{/* numbpad */}
            <Button size={3} value="1" type= 'NUMBER_INPUT' payload= '1' />
            <Button size={3} value="2" type= 'NUMBER_INPUT' payload= '2' />
            <Button size={3} value="3" type= 'NUMBER_INPUT' payload= '3' />
            <Button size={3} value="*" type= 'OPERAND_INPUT' payload= '*' />
            <Button size={3} value="4" type= 'NUMBER_INPUT' payload= '4' />
            <Button size={3} value="5" type= 'NUMBER_INPUT' payload= '5' />
            <Button size={3} value="6" type= 'NUMBER_INPUT' payload= '6' />
            <Button size={3} value="-" type= 'OPERAND_INPUT' payload= '-' />
            <Button size={3} value="7" type= 'NUMBER_INPUT' payload= '7' />
            <Button size={3} value="8" type= 'NUMBER_INPUT' payload= '8' />
            <Button size={3} value="9" type= 'NUMBER_INPUT' payload= '9' />
            <Button size={3} value="+" type= 'OPERAND_INPUT' payload= '+' />
            <Button size={3} value="." type= 'OPERAND_INPUT'payload= '.' />
            <Button size={3} value="0" type= 'NUMBER_INPUT' payload= '0' />
            <Button size={6} value="=" type= 'CALCULATE_EXPRESSION' payload='' />
          </Grid>
        </List>
      </Grid>
    </Card>
  );
}
export  {Calculator};