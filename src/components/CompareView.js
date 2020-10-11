import { func } from 'prop-types';
import React, { useState} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  List,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CircleFlag } from 'react-circle-flags'

import CompareListItem from './CompareListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  CompareListItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const iconHandler = (payload) => {
  console.log(payload)
const iconMap ={
    CAD : 'ca',
    HKD : 'hk',
    ISK : 'is',
    PHP : 'ph',
    DKK : 'dk',
    HUF : 'hu',
    CZK : 'cz',
    GBP : 'gb',
    RON : 'ro',
    SEK : 'se',
    IDR : 'id',
    INR : 'in',
    BRL : 'br',
    RUB : 'ru',
    HRK : 'hr',
    JPY : 'jp',
    THB : 'th',
    CHF : 'ch',
    EUR : 'european_union',
    MYR : 'my',
    BGN : 'bg',
    TRY : 'tr',
    CNY : 'cn',
    NOK : 'no',
    NZD : 'nz',
    ZAR : 'za',
    USD : 'us',
    MXN : 'mx',
    SGD : 'sg',
    AUD : 'au',
    ILS : 'il',
    KRW : 'kr',
    PLN : 'pl'
  }
  console.log(iconMap[payload])

  return <CircleFlag countryCode={iconMap[payload]}  height="35"/>
}



  /*switch (key) { 
    case value: CAD
    
      break;
    case value: HKD
      break;
    case value: ISK
      break;
    case value: PHP
      break;
    case value: DKK
      break;
    case value: HUF
      break;
    case value: CZK
      break;
    case value: GBP
      break;
    case value: RON
      break;
    case value: SEK
      break;
    case value: IDR
      break;
    case value: INR
      break;
    case value: BRL
      break;
    case value: RUB
      break;
    case value: HRK
      break;
    case value: JPY
      break;
    case value: THB
      break;
    case value: CHF
      break;
    case value: EUR
      break;
    case value: MYR
      break;
    case value: BGN
      break;
    case value: TRY
      break;
    case value: CNY
      break;
    case value: NOK
      break;
    case value: NZD
      break;
    case value: ZAR
      break;
    case value: USD
      break;
    case value: MXN
      break;
    case value: SGD
      break;
    case value: AUD
      break;
    case value: ILS
      break;
    case value: KRW
      break;
    case value: PLN
      break;
   */


export default function CompareView(props){
  const classes = useStyles();
  return(
    
      <List>
        <Grid container spacing={2} alignItems="center" >
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
       {/*  {props.compareList} */}

        {(props.compareList).map((payload) => (
          <Grid item xs={12} alignItems="center" >
            <CompareListItem
            icon={iconHandler(payload.currency)}
            currency={payload.currency}
            primary={payload.value}
            />
          </Grid>
        ))}
        </Grid>
      </List>
    
  )
}
/* 
currency: key,
value: value

rates: {
case value: CAD
break;
case value: HKD
break;
case value: ISK
break;
case value: PHP
break;
case value: DKK
break;
case value: HUF
break;
case value: CZK
break;
case value: GBP
break;
case value: RON
break;
case value: SEK
break;
case value: IDR
break;
case value: INR
break;
case value: BRL
break;
case value: RUB
break;
case value: HRK
break;
case value: JPY
break;
case value: THB
break;
case value: CHF
break;
case value: EUR
break;
case value: MYR
break;
case value: BGN
break;
case value: TRY
break;
case value: CNY
break;
case value: NOK
break;
case value: NZD
break;
case value: ZAR
break;
case value: USD
break;
case value: MXN
break;
case value: SGD
break;
case value: AUD
break;
case value: ILS
break;
case value: KRW
break;
case value: PLN
break;



base: "CAD",
date: "2020-10-09"
}
*/