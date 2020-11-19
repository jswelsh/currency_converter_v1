import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CompareListItem } from '../components/CompareListItem'
import {
Grid,
List
} from '@material-ui/core';

const drawerWidth = 280;
const drawerClosed = 100;

const useStyles = makeStyles((theme) => ({
drawerClose: {  
  //marginLeft: drawerClosed,
  marginRight: 'min(100px, 15%)',
  marginLeft: 'min(100px, 15%)',
  width: `calc(95% - ${drawerClosed}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen})
},
drawerOpen: {
  marginLeft: drawerWidth,
  width: `calc(95% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen})
},
ListItem: {
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: '#212121',
  minHeight: 100
},
symbol: {
  marginRight: 16
}
}));

interface ICompareListItem {
  currency: string
  value: number
}


interface ICompareViewProps {
  setFromCurrency(currency:string): void
  fromCurrency: string
  compareList: Array<ICompareListItem>
  opendrawer: boolean
  setAmount: number
  amount: number
}


const CompareView: FC<ICompareViewProps> = ({
  setFromCurrency,
  fromCurrency,
  compareList,
  opendrawer,
  setAmount
}) => {
  const currencySelectHandler = (currency: string) => { 
  setFromCurrency(currency)
  }

  const classes = useStyles();
  return(
  <List
    className = {clsx({
      [classes.drawerOpen]: opendrawer,
      [classes.drawerClose]: !opendrawer})} >
    <Grid 
      container 
      spacing={2}
      alignItems="center" >


      {compareList.map(({currency, value}) => (
      <Grid 
        item
        xs={12} 
        md={opendrawer ? 12 : 6}       
        lg={opendrawer ? 6 : 4} 
        key={currency} >
        <CompareListItem
          currencySelectHandler={currencySelectHandler}
          fromCurrency={fromCurrency}
          currency={currency}
          primary={value}
          setAmount={setAmount}
          // amount={amount}
          />
      </Grid>))}
    </Grid>
  </List> 
  )
}
export {CompareView}