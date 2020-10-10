import { func } from 'prop-types';
import React, { useState} from 'react';
import PropTypes from 'prop-types';
import {
  List,

} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import CompareListItem from './CompareListItem'

export default function compareView(props){
  return(
    
    <List>
     {/*  {props.compareList} */}
      {(props.compareList).map((payload) => (
        <CompareListItem
        currency={payload.currency}
        primary={payload.value}
        />
      ))}

    </List>
  )
}
/* 
currency: key,
value: value

rates: {
CAD: 1,
HKD: 5.8816111183,
ISK: 104.7484236263,
PHP: 36.7282203063,
DKK: 4.7884442157,
HUF: 229.236906447,
CZK: 17.4430575216,
GBP: 0.5865847381,
RON: 3.1344099858,
SEK: 6.7044138464,
IDR: 11156.8717024836,
INR: 55.461652297,
BRL: 4.2334319907,
RUB: 58.5132544074,
HRK: 4.874855231,
JPY: 80.395058551,
THB: 23.5677518981,
CHF: 0.6931540342,
EUR: 0.6434178355,
MYR: 3.1403937717,
BGN: 1.2583966028,
TRY: 6.0017372282,
CNY: 5.0860249646,
NOK: 6.988997555,
NZD: 1.1466349247,
ZAR: 12.5025736713,
USD: 0.758911337,
MXN: 16.1390425943,
SGD: 1.0285677519,
AUD: 1.0555269592,
ILS: 2.5645991507,
KRW: 868.9486552567,
PLN: 2.8762064084
},
base: "CAD",
date: "2020-10-09"
}
*/